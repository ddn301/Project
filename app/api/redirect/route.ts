/**
 * HTTP Status Codes:
 * 200 OK - Standard response for successful HTTP requests. Used when access is granted.
 * 302 Found - Temporary redirect. Used to redirect the user to the login page when auth=false.
 */

import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  // Get the auth query parameter
  const { searchParams } = new URL(request.url)
  const auth = searchParams.get("auth")

  // If auth=false, redirect to login page
  if (auth === "false") {
    return NextResponse.redirect(new URL("/login", request.url), 302)
  }

  // Otherwise, return access granted message
  return NextResponse.json(
    {
      message: "Access granted",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}
