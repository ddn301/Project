"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertCircle, CheckCircle2 } from "lucide-react"

export default function FormDemoPage() {
  // State for GET form
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [getResults, setGetResults] = useState<any>(null)
  const [isLoadingGet, setIsLoadingGet] = useState(false)

  // State for POST form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState("normal")
  const [postResponse, setPostResponse] = useState<any>(null)
  const [isLoadingPost, setIsLoadingPost] = useState(false)

  // State for URL parameters
  const [urlParams, setUrlParams] = useState<Record<string, string>>({})

  // Parse URL parameters on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const paramsObj: Record<string, string> = {}

      params.forEach((value, key) => {
        paramsObj[key] = value
      })

      setUrlParams(paramsObj)

      // Pre-fill form if parameters exist
      if (params.has("search")) setSearchTerm(params.get("search") || "")
      if (params.has("category")) setCategory(params.get("category") || "all")
      if (params.has("sortBy")) setSortBy(params.get("sortBy") || "relevance")
    }
  }, [])

  // Handle GET form submission
  const handleGetSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingGet(true)

    // Build query string
    const queryParams = new URLSearchParams()
    if (searchTerm) queryParams.set("search", searchTerm)
    if (category !== "all") queryParams.set("category", category)
    if (sortBy !== "relevance") queryParams.set("sortBy", sortBy)

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`
    window.history.pushState({ path: newUrl }, "", newUrl)

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would fetch data from an API
      setGetResults({
        query: {
          search: searchTerm,
          category,
          sortBy,
        },
        results: [
          { id: 1, title: "Sample Result 1", category: "notices" },
          { id: 2, title: "Sample Result 2", category: "events" },
          { id: 3, title: "Sample Result 3", category: "maintenance" },
        ],
        timestamp: new Date().toISOString(),
      })
      setIsLoadingGet(false)
    }, 1000)
  }

  // Handle POST form submission
  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingPost(true)

    // Prepare data
    const formData = {
      name,
      email,
      message,
      priority,
      timestamp: new Date().toISOString(),
    }

    try {
      // Simulate API call
      // In a real application, you would POST to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setPostResponse({
        success: true,
        message: "Your message has been submitted successfully!",
        id: Math.floor(Math.random() * 1000),
        data: formData,
      })
    } catch (error) {
      setPostResponse({
        success: false,
        message: "There was an error submitting your message.",
        error: String(error),
      })
    } finally {
      setIsLoadingPost(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">HTTP Methods Demo</h1>

      {/* Explanation Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Understanding HTTP Methods</CardTitle>
          <CardDescription>Learn the difference between GET and POST requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-blue-500" />
                GET Requests
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Parameters are sent in the URL</li>
                <li>Visible in browser address bar</li>
                <li>Can be bookmarked</li>
                <li>Limited data length (URL size restrictions)</li>
                <li>Used for retrieving data</li>
                <li>Idempotent (same request returns same result)</li>
                <li>Cacheable</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-green-500" />
                POST Requests
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Parameters sent in request body</li>
                <li>Not visible in browser address bar</li>
                <li>Cannot be bookmarked</li>
                <li>No data length restrictions</li>
                <li>Used for submitting data</li>
                <li>Not idempotent (may change with each request)</li>
                <li>Not cacheable by default</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* URL Parameters Display */}
      {Object.keys(urlParams).length > 0 && (
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>URL Parameters Detected</AlertTitle>
          <AlertDescription>
            <div className="mt-2">
              <code className="bg-muted p-2 rounded block overflow-x-auto">{JSON.stringify(urlParams, null, 2)}</code>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Forms Section */}
      <Tabs defaultValue="get" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="get">GET Request Demo</TabsTrigger>
          <TabsTrigger value="post">POST Request Demo</TabsTrigger>
        </TabsList>

        {/* GET Form */}
        <TabsContent value="get">
          <Card>
            <CardHeader>
              <CardTitle>Search Form (GET Method)</CardTitle>
              <CardDescription>
                This form demonstrates a GET request. Notice how parameters appear in the URL.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGetSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="search">Search Term</Label>
                  <Input
                    id="search"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="notices">Notices</SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sortBy">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sortBy">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="title">Title</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoadingGet}>
                  {isLoadingGet ? "Searching..." : "Search"}
                </Button>
              </form>
            </CardContent>

            {getResults && (
              <CardFooter className="flex flex-col items-start">
                <div className="w-full p-4 bg-muted rounded-md">
                  <h3 className="font-medium mb-2">Search Results:</h3>
                  <pre className="text-sm overflow-auto p-2 bg-background rounded">
                    {JSON.stringify(getResults, null, 2)}
                  </pre>
                </div>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        {/* POST Form */}
        <TabsContent value="post">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form (POST Method)</CardTitle>
              <CardDescription>
                This form demonstrates a POST request. Data is sent in the request body, not in the URL.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label>Priority</Label>
                  <RadioGroup value={priority} onValueChange={setPriority} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Normal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" disabled={isLoadingPost}>
                  {isLoadingPost ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>

            {postResponse && (
              <CardFooter className="flex flex-col items-start">
                <Alert className="w-full" variant={postResponse.success ? "default" : "destructive"}>
                  {postResponse.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertTitle>{postResponse.success ? "Success!" : "Error!"}</AlertTitle>
                  <AlertDescription>{postResponse.message}</AlertDescription>
                </Alert>

                {postResponse.success && (
                  <div className="w-full mt-4 p-4 bg-muted rounded-md">
                    <h3 className="font-medium mb-2">Submitted Data:</h3>
                    <pre className="text-sm overflow-auto p-2 bg-background rounded">
                      {JSON.stringify(postResponse.data, null, 2)}
                    </pre>
                  </div>
                )}
              </CardFooter>
            )}
          </Card>
        </TabsContent>
      </Tabs>

      {/* HTTP Status Codes Section */}
      <Card>
        <CardHeader>
          <CardTitle>HTTP Status Codes</CardTitle>
          <CardDescription>Common HTTP status codes and their meanings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">2xx - Success</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>200 OK</strong> - Request succeeded
                </li>
                <li>
                  <strong>201 Created</strong> - Resource created successfully
                </li>
                <li>
                  <strong>204 No Content</strong> - Request succeeded but no content returned
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3xx - Redirection</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>301 Moved Permanently</strong> - Resource moved permanently
                </li>
                <li>
                  <strong>302 Found</strong> - Resource temporarily moved
                </li>
                <li>
                  <strong>304 Not Modified</strong> - Resource not modified since last request
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4xx - Client Error</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>400 Bad Request</strong> - Server cannot process the request
                </li>
                <li>
                  <strong>401 Unauthorized</strong> - Authentication required
                </li>
                <li>
                  <strong>403 Forbidden</strong> - Server refuses to fulfill the request
                </li>
                <li>
                  <strong>404 Not Found</strong> - Resource not found
                </li>
                <li>
                  <strong>429 Too Many Requests</strong> - Rate limit exceeded
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">5xx - Server Error</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>500 Internal Server Error</strong> - Unexpected server error
                </li>
                <li>
                  <strong>502 Bad Gateway</strong> - Invalid response from upstream server
                </li>
                <li>
                  <strong>503 Service Unavailable</strong> - Server temporarily unavailable
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
