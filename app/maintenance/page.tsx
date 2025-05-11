"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Building2, ArrowLeft, Upload, AlertCircle, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function MaintenancePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [unit, setUnit] = useState("")
  const [phone, setPhone] = useState("")
  const [issueType, setIssueType] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("normal")
  const [entryPermission, setEntryPermission] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    // Validate form
    if (!name || !unit || !issueType || !description) {
      setSubmitError("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real application, you would submit to an API
      console.log("Maintenance request submitted:", {
        name,
        email,
        unit,
        phone,
        issueType,
        description,
        priority,
        entryPermission,
      })

      setSubmitSuccess(true)

      // Reset form
      setName("")
      setEmail("")
      setUnit("")
      setPhone("")
      setIssueType("")
      setDescription("")
      setPriority("normal")
      setEntryPermission(null)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was a problem submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to handle new request after success
  const handleNewRequest = () => {
    setSubmitSuccess(false)
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
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link href="/maintenance" className="text-sm font-medium transition-colors hover:text-primary">
                Maintenance
              </Link>
              <Link
                href="/amenities"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
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
            <h1 className="text-3xl font-bold">Maintenance Request</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Submit a maintenance request for your unit or common areas. Our maintenance team will respond as quickly
                as possible based on the priority of your request.
              </p>

              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Emergency Maintenance</AlertTitle>
                <AlertDescription className="text-blue-700">
                  For urgent issues like major water leaks, electrical hazards, or gas leaks, please call our emergency
                  maintenance line at <strong>{process.env.EMERGENCY_PHONE || "+61 2 9876 5432"}</strong> immediately.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Process</CardTitle>
                  <CardDescription>How we handle your maintenance requests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Submit Request</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out the maintenance request form with all relevant details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Request Review</h3>
                      <p className="text-sm text-muted-foreground">
                        Our maintenance team will review your request and prioritize it accordingly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        You will be contacted to schedule a convenient time for the maintenance work.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Completion</h3>
                      <p className="text-sm text-muted-foreground">
                        Once the work is completed, you will receive a notification and can provide feedback.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Request Form</CardTitle>
                  <CardDescription>Please provide details about the maintenance issue</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="space-y-4">
                      <Alert className="bg-green-50 border-green-200 text-green-800">
                        <Check className="h-4 w-4" />
                        <AlertTitle>Request Submitted!</AlertTitle>
                        <AlertDescription>
                          Your maintenance request has been submitted successfully. Our team will review it and contact
                          you shortly. Your reference number is: <strong>MR-{Math.floor(Math.random() * 10000)}</strong>
                        </AlertDescription>
                      </Alert>
                      <Button onClick={handleNewRequest} className="w-full">
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {submitError && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{submitError}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="unit">Unit Number *</Label>
                          <Input
                            id="unit"
                            placeholder="e.g. 1201"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+61 4XX XXX XXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issue-type">Issue Type *</Label>
                        <select
                          id="issue-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={issueType}
                          onChange={(e) => setIssueType(e.target.value)}
                          required
                        >
                          <option value="">Select issue type</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="electrical">Electrical</option>
                          <option value="hvac">HVAC/Air Conditioning</option>
                          <option value="appliance">Appliance</option>
                          <option value="structural">Structural</option>
                          <option value="common-area">Common Area</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Please describe the issue in detail..."
                          className="min-h-[120px]"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Priority Level</Label>
                        <RadioGroup value={priority} onValueChange={setPriority} className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="priority-low" />
                            <Label htmlFor="priority-low" className="font-normal">
                              Low - Not urgent, can be scheduled anytime
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="priority-normal" />
                            <Label htmlFor="priority-normal" className="font-normal">
                              Normal - Should be addressed within a week
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="priority-high" />
                            <Label htmlFor="priority-high" className="font-normal">
                              High - Needs attention within 48 hours
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>Permission to Enter Unit</Label>
                        <RadioGroup
                          value={entryPermission || ""}
                          onValueChange={setEntryPermission}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="entry-yes" />
                            <Label htmlFor="entry-yes" className="font-normal">
                              Yes, building staff may enter to perform maintenance
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="entry-no" />
                            <Label htmlFor="entry-no" className="font-normal">
                              No, please contact me to schedule a time
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photos">Upload Photos (Optional)</Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="photos"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                              <p className="mb-2 text-sm text-muted-foreground">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (MAX. 5MB)</p>
                            </div>
                            <input id="photos" type="file" className="hidden" multiple accept="image/*" />
                          </label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Fields marked with * are required. For emergency maintenance issues, please
                    call our emergency line.
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
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Maintenance
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
