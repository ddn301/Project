/**
 * HTTP Status Codes:
 * 201 Created - Contact form submission successful
 * 429 Too Many Requests - Rate limit exceeded
 * 400 Bad Request - Missing required fields
 * 500 Internal Server Error - Server error during processing
 */

import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

// Simple in-memory rate limiting (in production, use Redis or similar)
const RATE_LIMIT_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_IP = 5 // Maximum 5 submissions per hour per IP

// In-memory store for rate limiting
// Note: This is reset when the function is redeployed
// In production, use a persistent store like Redis
const ipSubmissions: Record<string, { count: number; resetTime: number }> = {}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limit
    const now = Date.now()
    if (!ipSubmissions[ip] || ipSubmissions[ip].resetTime < now) {
      // First request or reset time passed
      ipSubmissions[ip] = { count: 1, resetTime: now + RATE_LIMIT_DURATION }
    } else if (ipSubmissions[ip].count >= MAX_REQUESTS_PER_IP) {
      // Rate limit exceeded
      const resetTime = new Date(ipSubmissions[ip].resetTime).toISOString()
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again later.",
          resetTime,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": MAX_REQUESTS_PER_IP.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": resetTime,
          },
        },
      )
    } else {
      // Increment count
      ipSubmissions[ip].count++
    }

    // Process the contact form submission
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        {
          error: "Name and message are required fields",
        },
        { status: 400 },
      )
    }

    // Access environment variable
    const adminEmail = process.env.ADMIN_EMAIL || "admin@horizonheights.com"

    // In a real application, you would send an email or store in a database
    console.log(`Contact form submission from ${name} (${email}) to ${adminEmail}: ${message}`)

    // Return remaining submissions info
    const remainingSubmissions = MAX_REQUESTS_PER_IP - ipSubmissions[ip].count
    const resetTime = new Date(ipSubmissions[ip].resetTime).toISOString()

    return NextResponse.json(
      {
        success: true,
        message: "Contact message received",
        timestamp: new Date().toISOString(),
        rateLimit: {
          remaining: remainingSubmissions,
          resetTime,
        },
      },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": MAX_REQUESTS_PER_IP.toString(),
          "X-RateLimit-Remaining": remainingSubmissions.toString(),
          "X-RateLimit-Reset": resetTime,
        },
      },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error: "Failed to process contact form",
      },
      { status: 500 },
    )
  }
}
