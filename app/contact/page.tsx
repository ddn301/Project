"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Phone, Mail, MapPin, AlertCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [unit, setUnit] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [isLoadingVisitors, setIsLoadingVisitors] = useState(true)
  const [visitorError, setVisitorError] = useState<string | null>(null)

  // Fetch visitor count on page load
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitors")
        if (!response.ok) {
          throw new Error("Failed to fetch visitor count")
        }
        const data = await response.json()
        setVisitorCount(data.count)
      } catch (error) {
        console.error("Error fetching visitor count:", error)
        setVisitorError("Could not load visitor statistics")
      } finally {
        setIsLoadingVisitors(false)
      }
    }

    fetchVisitorCount()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !message) {
      toast({
        title: "Missing information",
        description: "Please provide your name and message.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          unit,
          subject,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      const data = await response.json()

      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setUnit("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
              <Link
                href="/notices"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
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
            <h1 className="text-3xl font-bold">Contact Us</h1>
          </div>

          {visitorCount !== null && !isLoadingVisitors && (
            <div className="mb-8">
              <Alert className="bg-primary/10 border-primary/20">
                <Users className="h-4 w-4" />
                <AlertTitle>Visitor Statistics</AlertTitle>
                <AlertDescription>
                  Our website has been visited {visitorCount} times. Thank you for being part of our community!
                </AlertDescription>
              </Alert>
            </div>
          )}

          {visitorError && (
            <div className="mb-8">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{visitorError}</AlertDescription>
              </Alert>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Have a question or need assistance? Fill out the form below and our team will get back to you as soon as
                possible.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit Number</Label>
                  <Input id="unit" placeholder="e.g. 1201" value={unit} onChange={(e) => setUnit(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border p-6 bg-muted/50">
                <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-medium">Building Emergency</h3>
                      <p className="text-sm text-muted-foreground">For fire, flood, or other building emergencies</p>
                      <p className="font-medium mt-1">000 (Emergency Services)</p>
                      <p className="font-medium">+61 2 9876 5432 (Building Security)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-medium">Plumbing Emergency</h3>
                      <p className="text-sm text-muted-foreground">For urgent water leaks or plumbing issues</p>
                      <p className="font-medium mt-1">+61 2 8765 4321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <h3 className="font-medium">Electrical Emergency</h3>
                      <p className="text-sm text-muted-foreground">For power outages or electrical hazards</p>
                      <p className="font-medium mt-1">+61 2 7654 3210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map snapshot */}
              <div className="rounded-lg border overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/images/map-location.png"
                    alt="Map location of Horizon Heights"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/80 p-2 rounded-md">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-sm text-muted-foreground">123 Skyline Avenue, Metropolis</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Skyline Avenue, Metropolis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+61 2 1234 5678</p>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 9am to 5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">admin@horizonheights.com</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Strata Manager</CardTitle>
                  <CardDescription>Your primary point of contact for strata matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Strata Manager</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Email:</span> sarah.johnson@horizonheights.com
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> +61 2 2345 6789
                    </p>
                  </div>
                </CardContent>
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
