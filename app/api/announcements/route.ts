/**
 * HTTP Status Codes:
 * 200 OK - Successfully returned announcements with A/B testing variant
 * 500 Internal Server Error - Server error during processing
 */

import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

// A/B test variants for announcements
const announcementVariants = {
  A: {
    title: "Important Building Maintenance",
    message:
      "We will be conducting routine maintenance on the elevators next week. Please check the schedule for details.",
    cta: "View Schedule",
    ctaUrl: "/notices",
    style: "info", // blue
  },
  B: {
    title: "Upcoming Elevator Maintenance",
    message: "To ensure your safety, elevator maintenance will be performed next week. See the detailed schedule now.",
    cta: "Check Details",
    ctaUrl: "/notices",
    style: "warning", // orange
  },
}

export async function GET(request: NextRequest) {
  try {
    // Get or set A/B test variant
    const { searchParams } = new URL(request.url)
    let variant = searchParams.get("variant") || ""

    // If no variant specified or invalid, assign one based on user properties
    if (variant !== "A" && variant !== "B") {
      // Use country or IP to consistently assign the same variant to the same user
      const country = request.geo?.country || ""
      const ip = request.ip || request.headers.get("x-forwarded-for") || ""

      // Simple hashing to consistently assign variant
      const hash = (country + ip).split("").reduce((acc, char) => {
        return acc + char.charCodeAt(0)
      }, 0)

      variant = hash % 2 === 0 ? "A" : "B"
    }

    // Get the announcement for the variant
    const announcement = announcementVariants[variant as keyof typeof announcementVariants]

    // Get building name from environment variable
    const buildingName = process.env.BUILDING_NAME || "Horizon Heights"

    return NextResponse.json(
      {
        variant,
        buildingName,
        announcement,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "X-AB-Variant": variant,
        },
      },
    )
  } catch (error) {
    console.error("Error processing announcement request:", error)
    return NextResponse.json(
      {
        error: "Failed to process announcement request",
      },
      { status: 500 },
    )
  }
}
