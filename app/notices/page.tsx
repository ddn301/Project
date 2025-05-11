import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Bell, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NoticesPage() {
  // Sample data for notices
  const importantNotices = [
    {
      id: 1,
      title: "Fire Alarm Testing",
      date: "April 15, 2025",
      description:
        "Annual fire alarm testing will be conducted throughout the building. Please expect intermittent alarms between 10:00 AM and 2:00 PM.",
      type: "urgent",
    },
    {
      id: 2,
      title: "Elevator Maintenance",
      date: "April 20, 2025",
      description:
        "The south elevator will be undergoing maintenance and will be out of service from 9:00 AM to 5:00 PM. Please use the north elevator during this time.",
      type: "important",
    },
    {
      id: 3,
      title: "Water Shutdown",
      date: "April 25, 2025",
      description:
        "There will be a scheduled water shutdown for essential pipe maintenance. The shutdown will affect all units from 10:00 AM to 2:00 PM. Please store water for essential use during this period.",
      type: "urgent",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 10, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Building Conference Room",
      description:
        "All owners are encouraged to attend the Annual General Meeting where we will discuss the budget, elect new committee members, and address any concerns.",
      image: "/images/event-meeting.png",
    },
    {
      id: 2,
      title: "Community BBQ",
      date: "May 15, 2025",
      time: "12:00 PM - 3:00 PM",
      location: "Rooftop Garden",
      description:
        "Join your neighbors for our quarterly community BBQ. Food and drinks will be provided. Please RSVP by May 10th.",
      image: "/images/event-bbq.png",
    },
    {
      id: 3,
      title: "Building Maintenance Workshop",
      date: "May 20, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "Building Conference Room",
      description:
        "Learn about common maintenance issues in apartments and how to address them. Presented by our building manager and a local contractor.",
      image: "/images/event-workshop.png",
    },
    {
      id: 4,
      title: "Pool Opening Party",
      date: "June 1, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Pool Area",
      description: "Celebrate the opening of the pool for the summer season with music, refreshments, and games.",
      image: "/images/event-pool.png",
    },
  ]

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
              <Link href="/notices" className="text-sm font-medium transition-colors hover:text-primary">
                Notices
              </Link>
              <Link
                href="/committee"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Committee
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
            <h1 className="text-3xl font-bold">Notices & Events</h1>
          </div>

          <Tabs defaultValue="notices" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="notices">
                <Bell className="mr-2 h-4 w-4" />
                Notices
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notices" className="mt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Important notices and announcements for all residents of Horizon Heights.
                </p>

                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {importantNotices.map((notice) => (
                    <Card key={notice.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="rounded-md bg-muted p-2">
                              {notice.type === "urgent" ? (
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
                                  className="text-destructive"
                                >
                                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                  <line x1="12" y1="9" x2="12" y2="13"></line>
                                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                              ) : (
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
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                              )}
                            </div>
                            <CardTitle>{notice.title}</CardTitle>
                          </div>
                          <Badge variant={notice.type === "urgent" ? "destructive" : "default"}>
                            {notice.type === "urgent" ? "Urgent" : "Important"}
                          </Badge>
                        </div>
                        <CardDescription>{notice.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{notice.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">View All Notices</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Upcoming events and activities for the Horizon Heights community.
                </p>

                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={800}
                          height={450}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <div className="rounded-md bg-muted p-2">
                            {event.title.includes("Meeting") ? (
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
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                            ) : event.title.includes("BBQ") ? (
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
                              >
                                <path d="M8 3v3"></path>
                                <path d="M16 3v3"></path>
                                <path d="M8 14h8"></path>
                                <path d="M8 18h8"></path>
                                <path d="M3 22h18"></path>
                                <path d="M3 10h18"></path>
                                <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16h-5v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H3z"></path>
                              </svg>
                            ) : event.title.includes("Workshop") ? (
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
                              >
                                <path d="M2 3h20"></path>
                                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                                <path d="m7 21 5-5 5 5"></path>
                              </svg>
                            ) : (
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
                              >
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                            )}
                          </div>
                          <div>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>
                              <div className="flex items-center gap-1 mt-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {event.date} • {event.time}
                                </span>
                              </div>
                              <div className="mt-1">
                                <span className="font-medium">Location:</span> {event.location}
                              </div>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{event.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">View All Events</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
            <Link href="/committee" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Committee
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
