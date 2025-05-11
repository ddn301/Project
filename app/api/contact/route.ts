/**
 * HTTP Status Codes:
 * 201 Created - Contact message successfully received and processed
 * 400 Bad Request - Missing required fields or invalid data
 * 500 Internal Server Error - Server error during processing
 */

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, message } = body

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        {
          error: "Name and message are required fields",
        },
        { status: 400 },
      )
    }

    // Access environment variable (backend only)
    const apiKey = process.env.SECRET_API_KEY

    // In a real application, you would use the API key to authenticate
    // with an external service and store the contact message
    console.log(`Using API key: ${apiKey} to process contact from ${name}`)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: "Contact message received",
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
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
