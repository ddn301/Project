/**
 * HTTP Status Codes:
 * 200 OK - Standard response for successful HTTP requests. Used when successfully returning the visitor count.
 * 500 Internal Server Error - Server encountered an unexpected condition. Used when an error occurs during processing.
 */

import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real application, this would be fetched from a database
    const visitorCount = 1247

    return NextResponse.json(
      {
        count: visitorCount,
        lastUpdated: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching visitor count:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch visitor count",
      },
      { status: 500 },
    )
  }
}
