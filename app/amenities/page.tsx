"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Calendar, Clock, Users, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Amenity types
interface Amenity {
  id: string
  name: string
  description: string
  image: string
  capacity: number
  availableTimes: string[]
}

export default function AmenitiesPage() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedAmenity, setSelectedAmenity] = useState<string>("")
  const [guestCount, setGuestCount] = useState<number>(1)
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false)
  const [bookingError, setBookingError] = useState<string | null>(null)

  // Sample amenities data
  const amenities: Amenity[] = [
    {
      id: "pool",
      name: "Swimming Pool",
      description: "Enjoy our heated indoor pool with stunning city views. Perfect for relaxation or exercise.",
      image: "/images/amenities/pool.jpg",
      capacity: 20,
      availableTimes: ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
    },
    {
      id: "gym",
      name: "Fitness Center",
      description: "State-of-the-art fitness equipment and free weights. Personal trainers available upon request.",
      image: "/images/amenities/gym.jpg",
      capacity: 15,
      availableTimes: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    },
    {
      id: "bbq",
      name: "BBQ Area",
      description: "Outdoor BBQ area with seating for entertaining guests. Includes gas grills and dining tables.",
      image: "/images/amenities/bbq.jpg",
      capacity: 30,
      availableTimes: ["11:00", "13:00", "15:00", "17:00", "19:00"],
    },
    {
      id: "lounge",
      name: "Resident Lounge",
      description: "Comfortable lounge area with TV, games, and kitchen facilities for resident gatherings.",
      image: "/images/amenities/lounge.jpg",
      capacity: 25,
      availableTimes: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
    },
    {
      id: "conference",
      name: "Conference Room",
      description: "Professional meeting space with presentation equipment and high-speed internet.",
      image: "/images/amenities/conference.jpg",
      capacity: 12,
      availableTimes: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    },
  ]

  // Function to handle booking submission
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingError(null)

    // Validate form
    if (!selectedDate || !selectedTime || !selectedAmenity) {
      setBookingError("Please select a date, time, and amenity.")
      return
    }

    // Check if selected date is in the past
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const bookingDate = new Date(selectedDate)
    if (bookingDate < today) {
      setBookingError("Please select a future date.")
      return
    }

    // In a real application, you would submit this to an API
    console.log("Booking submitted:", {
      amenity: selectedAmenity,
      date: selectedDate,
      time: selectedTime,
      guests: guestCount,
    })

    // Show success message
    setBookingSuccess(true)

    // Reset form
    setSelectedDate("")
    setSelectedTime("")
    setSelectedAmenity("")
    setGuestCount(1)
  }

  // Function to handle new booking after success
  const handleNewBooking = () => {
    setBookingSuccess(false)
  }

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <Link href="/" className="text-xl font-bold">
              Horizon Heights
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex md:gap-6 mr-4">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link
                href="/help"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Help & FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/notices"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Notices
              </Link>
              <Link href="/amenities" className="text-sm font-medium transition-colors hover:text-primary">
                Amenities
              </Link>
            </nav>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Building Amenities</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground mb-6">
                Horizon Heights offers a variety of amenities for residents to enjoy. Book your preferred amenity in
                advance to ensure availability.
              </p>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All Amenities</TabsTrigger>
                  <TabsTrigger value="indoor">Indoor</TabsTrigger>
                  <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6 space-y-6">
                  {amenities.map((amenity) => (
                    <Card key={amenity.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <div className="h-48 w-full bg-muted flex items-center justify-center">
                          <Image
                            src={`/placeholder.svg?height=300&width=600`}
                            alt={amenity.name}
                            width={600}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{amenity.name}</CardTitle>
                        <CardDescription>Capacity: {amenity.capacity} people</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{amenity.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => setSelectedAmenity(amenity.id)}
                          variant={selectedAmenity === amenity.id ? "default" : "outline"}
                        >
                          {selectedAmenity === amenity.id ? (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Selected
                            </>
                          ) : (
                            "Select"
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="indoor" className="mt-6 space-y-6">
                  {amenities
                    .filter((a) => ["pool", "gym", "lounge", "conference"].includes(a.id))
                    .map((amenity) => (
                      <Card key={amenity.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <div className="aspect-video w-full overflow-hidden bg-muted">
                          <div className="h-48 w-full bg-muted flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=300&width=600`}
                              alt={amenity.name}
                              width={600}
                              height={300}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{amenity.name}</CardTitle>
                          <CardDescription>Capacity: {amenity.capacity} people</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{amenity.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            onClick={() => setSelectedAmenity(amenity.id)}
                            variant={selectedAmenity === amenity.id ? "default" : "outline"}
                          >
                            {selectedAmenity === amenity.id ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Selected
                              </>
                            ) : (
                              "Select"
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="outdoor" className="mt-6 space-y-6">
                  {amenities
                    .filter((a) => ["bbq"].includes(a.id))
                    .map((amenity) => (
                      <Card key={amenity.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <div className="aspect-video w-full overflow-hidden bg-muted">
                          <div className="h-48 w-full bg-muted flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=300&width=600`}
                              alt={amenity.name}
                              width={600}
                              height={300}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{amenity.name}</CardTitle>
                          <CardDescription>Capacity: {amenity.capacity} people</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{amenity.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            onClick={() => setSelectedAmenity(amenity.id)}
                            variant={selectedAmenity === amenity.id ? "default" : "outline"}
                          >
                            {selectedAmenity === amenity.id ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Selected
                              </>
                            ) : (
                              "Select"
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book an Amenity</CardTitle>
                  <CardDescription>Select an amenity, date, and time to make your booking</CardDescription>
                </CardHeader>
                <CardContent>
                  {bookingSuccess ? (
                    <div className="space-y-4">
                      <Alert className="bg-green-50 border-green-200 text-green-800">
                        <Check className="h-4 w-4" />
                        <AlertTitle>Booking Confirmed!</AlertTitle>
                        <AlertDescription>
                          Your amenity booking has been confirmed. You will receive a confirmation email shortly.
                        </AlertDescription>
                      </Alert>
                      <Button onClick={handleNewBooking} className="w-full">
                        Make Another Booking
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleBooking} className="space-y-4">
                      {bookingError && (
                        <Alert variant="destructive">
                          <AlertDescription>{bookingError}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="amenity">Selected Amenity</Label>
                        <div className="p-2 border rounded-md bg-muted/50">
                          {selectedAmenity ? (
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-600 mr-2" />
                              <span>{amenities.find((a) => a.id === selectedAmenity)?.name || "Unknown amenity"}</span>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">Please select an amenity from the list</span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <Input
                            id="date"
                            type="date"
                            min={today}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Time Slot</Label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <select
                            id="time"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            required
                            disabled={!selectedAmenity}
                          >
                            <option value="">Select a time slot</option>
                            {selectedAmenity &&
                              amenities
                                .find((a) => a.id === selectedAmenity)
                                ?.availableTimes.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <Input
                            id="guests"
                            type="number"
                            min="1"
                            max={selectedAmenity ? amenities.find((a) => a.id === selectedAmenity)?.capacity || 1 : 1}
                            value={guestCount}
                            onChange={(e) => setGuestCount(Number.parseInt(e.target.value))}
                            required
                          />
                        </div>
                        {selectedAmenity && (
                          <p className="text-xs text-muted-foreground">
                            Maximum capacity: {amenities.find((a) => a.id === selectedAmenity)?.capacity} people
                          </p>
                        )}
                      </div>

                      <Button type="submit" className="w-full" disabled={!selectedAmenity}>
                        Book Now
                      </Button>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Bookings must be made at least 24 hours in advance. Cancellations must be
                    made at least 12 hours before the booking time.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="text-lg font-bold">Horizon Heights</span>
            </div>
            <p className="text-sm text-muted-foreground">123 Skyline Avenue, Metropolis</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/help" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Help & FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/notices" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Notices
            </Link>
            <Link href="/amenities" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Amenities
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Horizon Heights. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
