import Link from "next/link"
import { Building2, Bell, Wrench, Calendar, FileText, LogOut, Settings, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ResidentDashboard() {
  // Sample data for notices
  const recentNotices = [
    {
      id: 1,
      title: "Fire Alarm Testing",
      date: "April 15, 2025",
      description: "Annual fire alarm testing will be conducted throughout the building.",
      type: "urgent",
    },
    {
      id: 2,
      title: "Elevator Maintenance",
      date: "April 20, 2025",
      description: "The south elevator will be undergoing maintenance and will be out of service.",
      type: "important",
    },
  ]

  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 10, 2025",
      time: "7:00 PM",
    },
    {
      id: 2,
      title: "Community BBQ",
      date: "May 15, 2025",
      time: "12:00 PM",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">Horizon Heights</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="md:hidden">
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
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <h2 className="px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
            </div>
            <div className="flex-1">
              <nav className="grid gap-1 px-2">
                <Link
                  href="/dashboard/resident"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/dashboard/resident/notices"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notices</span>
                </Link>
                <Link
                  href="/dashboard/resident/maintenance"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Wrench className="h-4 w-4" />
                  <span>Maintenance</span>
                </Link>
                <Link
                  href="/dashboard/resident/events"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </Link>
                <Link
                  href="/dashboard/resident/documents"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </Link>
              </nav>
            </div>
            <div className="mt-auto">
              <Separator className="my-4" />
              <nav className="grid gap-1 px-2">
                <Link
                  href="/dashboard/resident/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
              <p className="text-muted-foreground">Unit 1201 • Resident</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Recent Notices</CardTitle>
                  <CardDescription>Stay updated with important announcements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentNotices.map((notice) => (
                    <div key={notice.id} className="flex items-start gap-4">
                      <Bell className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{notice.title}</h3>
                          <Badge variant={notice.type === "urgent" ? "destructive" : "default"} className="ml-auto">
                            {notice.type === "urgent" ? "Urgent" : "Important"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notice.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Notices
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Maintenance Request</CardTitle>
                  <CardDescription>Submit a new maintenance request</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-type">Issue Type</Label>
                      <select
                        id="issue-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select issue type</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="hvac">HVAC</option>
                        <option value="appliance">Appliance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe the issue in detail..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit Request</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Community events and activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-4">
                      <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Committee</CardTitle>
                  <CardDescription>Send a message to the strata committee</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here..." className="min-h-[120px]" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Send Message</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>Useful resources and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Building Rules & Regulations</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Strata Plan</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Resident Handbook</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Emergency Procedures</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Amenity Booking Form</span>
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Documents
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
