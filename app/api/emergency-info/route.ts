/**
 * HTTP Status Codes:
 * 200 OK - Successfully returned emergency information based on user's location
 * 400 Bad Request - Missing or invalid country code
 * 500 Internal Server Error - Server error during processing
 */

import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

// Emergency contact information by country
const emergencyContacts = {
  AU: {
    emergency: "000",
    police: "131 444",
    ambulance: "000",
    fire: "000",
    building_manager: "+61 2 9876 5432",
  },
  US: {
    emergency: "911",
    police: "911",
    ambulance: "911",
    fire: "911",
    building_manager: "+1 555 123 4567",
  },
  UK: {
    emergency: "999",
    police: "101",
    ambulance: "999",
    fire: "999",
    building_manager: "+44 20 1234 5678",
  },
  // Default fallback
  DEFAULT: {
    emergency: "112", // International emergency number
    police: "112",
    ambulance: "112",
    fire: "112",
    building_manager: process.env.EMERGENCY_PHONE || "+61 2 9876 5432",
  },
}

export async function GET(request: NextRequest) {
  try {
    // Get country from geo header or query param
    const countryFromHeader = request.geo?.country || ""
    const { searchParams } = new URL(request.url)
    const countryFromQuery = searchParams.get("country") || ""

    // Use country from query param if provided, otherwise use geo header
    const country = countryFromQuery || countryFromHeader || "DEFAULT"

    // Get emergency contacts for the country
    const contacts = emergencyContacts[country as keyof typeof emergencyContacts] || emergencyContacts.DEFAULT

    // Get building name from environment variable
    const buildingName = process.env.BUILDING_NAME || "Horizon Heights"

    return NextResponse.json(
      {
        country,
        buildingName,
        contacts,
        message: `Emergency information for ${buildingName} in ${country}`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing emergency info request:", error)
    return NextResponse.json(
      {
        error: "Failed to process emergency information request",
      },
      { status: 500 },
    )
  }
}
