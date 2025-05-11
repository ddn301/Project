import Link from "next/link"
import {
  Building2,
  Bell,
  Wrench,
  Calendar,
  FileText,
  LogOut,
  Settings,
  Home,
  Users,
  Upload,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommitteeDashboard() {
  // Sample data for maintenance requests
  const maintenanceRequests = [
    {
      id: 1,
      unit: "1201",
      resident: "John Doe",
      issue: "Plumbing leak in bathroom",
      status: "pending",
      date: "April 10, 2025",
    },
    {
      id: 2,
      unit: "1502",
      resident: "Sarah Johnson",
      issue: "Electrical outlet not working",
      status: "in-progress",
      date: "April 8, 2025",
    },
    {
      id: 3,
      unit: "901",
      resident: "Michael Chen",
      issue: "AC not cooling properly",
      status: "completed",
      date: "April 5, 2025",
    },
  ]

  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 10, 2025",
      time: "7:00 PM",
      location: "Building Conference Room",
    },
    {
      id: 2,
      title: "Community BBQ",
      date: "May 15, 2025",
      time: "12:00 PM",
      location: "Rooftop Garden",
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
              <AvatarFallback>MC</AvatarFallback>
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
              <h2 className="px-4 text-lg font-semibold tracking-tight">Committee Dashboard</h2>
            </div>
            <div className="flex-1">
              <nav className="grid gap-1 px-2">
                <Link
                  href="/dashboard/committee"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
                >
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
                <Link
                  href="/dashboard/committee/maintenance"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Wrench className="h-4 w-4" />
                  <span>Maintenance</span>
                </Link>
                <Link
                  href="/dashboard/committee/notices"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notices</span>
                </Link>
                <Link
                  href="/dashboard/committee/events"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </Link>
                <Link
                  href="/dashboard/committee/documents"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </Link>
                <Link
                  href="/dashboard/committee/residents"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Users className="h-4 w-4" />
                  <span>Residents</span>
                </Link>
              </nav>
            </div>
            <div className="mt-auto">
              <Separator className="my-4" />
              <nav className="grid gap-1 px-2">
                <Link
                  href="/dashboard/committee/settings"
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
              <h1 className="text-3xl font-bold">Committee Dashboard</h1>
              <p className="text-muted-foreground">Welcome, Michael Chen • Chairperson</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Units</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">120</div>
                  <p className="text-xs text-muted-foreground">100% occupancy</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 pending, 5 in progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: Annual General Meeting</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,200</div>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={75} className="h-2" />
                    <span className="text-xs text-muted-foreground">75%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Overview of recent maintenance requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left font-medium">Unit</th>
                          <th className="px-4 py-3 text-left font-medium">Resident</th>
                          <th className="px-4 py-3 text-left font-medium">Issue</th>
                          <th className="px-4 py-3 text-left font-medium">Status</th>
                          <th className="px-4 py-3 text-left font-medium">Date</th>
                          <th className="px-4 py-3 text-left font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {maintenanceRequests.map((request) => (
                          <tr key={request.id} className="border-b">
                            <td className="px-4 py-3">{request.unit}</td>
                            <td className="px-4 py-3">{request.resident}</td>
                            <td className="px-4 py-3">{request.issue}</td>
                            <td className="px-4 py-3">
                              <Badge
                                variant={
                                  request.status === "pending"
                                    ? "outline"
                                    : request.status === "in-progress"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {request.status === "pending"
                                  ? "Pending"
                                  : request.status === "in-progress"
                                    ? "In Progress"
                                    : "Completed"}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">{request.date}</td>
                            <td className="px-4 py-3">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View All Requests</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Post Notice</CardTitle>
                  <CardDescription>Create a new notice for residents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="notice">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="notice">Notice</TabsTrigger>
                      <TabsTrigger value="event">Event</TabsTrigger>
                    </TabsList>
                    <TabsContent value="notice" className="space-y-4 pt-4">
                      <div>
                        <label htmlFor="notice-title" className="block text-sm font-medium mb-1">
                          Title
                        </label>
                        <input
                          id="notice-title"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter notice title"
                        />
                      </div>
                      <div>
                        <label htmlFor="notice-type" className="block text-sm font-medium mb-1">
                          Type
                        </label>
                        <select
                          id="notice-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="general">General</option>
                          <option value="important">Important</option>
                          <option value="urgent">Urgent</option>
                          <option value="maintenance">Maintenance</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="notice-content" className="block text-sm font-medium mb-1">
                          Content
                        </label>
                        <textarea
                          id="notice-content"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter notice content"
                        ></textarea>
                      </div>
                    </TabsContent>
                    <TabsContent value="event" className="space-y-4 pt-4">
                      <div>
                        <label htmlFor="event-title" className="block text-sm font-medium mb-1">
                          Event Title
                        </label>
                        <input
                          id="event-title"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter event title"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="event-date" className="block text-sm font-medium mb-1">
                            Date
                          </label>
                          <input
                            id="event-date"
                            type="date"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="event-time" className="block text-sm font-medium mb-1">
                            Time
                          </label>
                          <input
                            id="event-time"
                            type="time"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="event-location" className="block text-sm font-medium mb-1">
                          Location
                        </label>
                        <input
                          id="event-location"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter event location"
                        />
                      </div>
                      <div>
                        <label htmlFor="event-description" className="block text-sm font-medium mb-1">
                          Description
                        </label>
                        <textarea
                          id="event-description"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter event description"
                        ></textarea>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Post</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upload Documents</CardTitle>
                  <CardDescription>Share documents with residents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-dashed p-10 text-center">
                      <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                      <div className="mt-4 text-sm font-medium">Drag and drop files here or click to browse</div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Supports PDF, DOC, DOCX, XLS, XLSX up to 10MB
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Browse Files
                      </Button>
                    </div>
                    <div>
                      <label htmlFor="document-type" className="block text-sm font-medium mb-1">
                        Document Type
                      </label>
                      <select
                        id="document-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select document type</option>
                        <option value="meeting-minutes">Meeting Minutes</option>
                        <option value="financial">Financial Report</option>
                        <option value="bylaws">Bylaws</option>
                        <option value="rules">Rules & Regulations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="document-description" className="block text-sm font-medium mb-1">
                        Description
                      </label>
                      <input
                        id="document-description"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter document description"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upload</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events scheduled for the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {event.date} at {event.time} • {event.location}
                          </p>
                        </div>
                        <div className="ml-auto flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="mr-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Calendar
                  </Button>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Event
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
