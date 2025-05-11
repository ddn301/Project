/**
 * HTTP Status Codes:
 * 201 Created - Request has been fulfilled and a new resource has been created. Used when successfully processing a contact form submission.
 * 400 Bad Request - Server cannot process the request due to client error (e.g., missing required fields). Used when validation fails.
 * 500 Internal Server Error - Server encountered an unexpected condition. Used when an error occurs during processing.
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
