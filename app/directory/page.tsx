"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, ArrowLeft, Search, Mail, Phone, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Resident types
interface Resident {
  id: string
  name: string
  unit: string
  email?: string
  phone?: string
  isCommittee: boolean
  isOwner: boolean
}

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  // Sample residents data
  const residents: Resident[] = [
    {
      id: "1",
      name: "John Smith",
      unit: "101",
      email: "john.smith@example.com",
      phone: "+61 4XX XXX XXX",
      isCommittee: false,
      isOwner: true,
    },
    { id: "2", name: "Sarah Johnson", unit: "102", email: "sarah.j@example.com", isCommittee: false, isOwner: false },
    {
      id: "3",
      name: "Michael Chen",
      unit: "201",
      email: "michael.chen@example.com",
      phone: "+61 4XX XXX XXX",
      isCommittee: true,
      isOwner: true,
    },
    { id: "4", name: "Emma Wilson", unit: "202", email: "emma.w@example.com", isCommittee: true, isOwner: true },
    {
      id: "5",
      name: "David Kim",
      unit: "301",
      email: "david.kim@example.com",
      phone: "+61 4XX XXX XXX",
      isCommittee: true,
      isOwner: true,
    },
    { id: "6", name: "Lisa Taylor", unit: "302", isCommittee: false, isOwner: false },
    { id: "7", name: "Robert Brown", unit: "401", email: "robert.b@example.com", isCommittee: false, isOwner: true },
    { id: "8", name: "Jennifer Lee", unit: "402", phone: "+61 4XX XXX XXX", isCommittee: false, isOwner: false },
    {
      id: "9",
      name: "James Taylor",
      unit: "501",
      email: "james.t@example.com",
      phone: "+61 4XX XXX XXX",
      isCommittee: true,
      isOwner: true,
    },
    {
      id: "10",
      name: "Sophia Rodriguez",
      unit: "502",
      email: "sophia.r@example.com",
      isCommittee: true,
      isOwner: true,
    },
    { id: "11", name: "William Davis", unit: "601", isCommittee: false, isOwner: true },
    {
      id: "12",
      name: "Olivia Martin",
      unit: "602",
      email: "olivia.m@example.com",
      phone: "+61 4XX XXX XXX",
      isCommittee: false,
      isOwner: false,
    },
  ]

  // Filter and search residents
  const filteredResidents = residents.filter((resident) => {
    // Apply search filter
    const matchesSearch =
      searchTerm === "" ||
      resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.unit.toLowerCase().includes(searchTerm.toLowerCase())

    // Apply tab filter
    if (filter === "all") return matchesSearch
    if (filter === "committee") return matchesSearch && resident.isCommittee
    if (filter === "owners") return matchesSearch && resident.isOwner
    if (filter === "tenants") return matchesSearch && !resident.isOwner

    return matchesSearch
  })

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
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
              <Link href="/directory" className="text-sm font-medium transition-colors hover:text-primary">
                Directory
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
            <h1 className="text-3xl font-bold">Resident Directory</h1>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground">
              Connect with your neighbors in Horizon Heights. This directory is only accessible to residents and is not
              publicly available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or unit..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">
                  <Users className="mr-2 h-4 w-4" />
                  All Residents
                </TabsTrigger>
                <TabsTrigger value="committee">
                  <User className="mr-2 h-4 w-4" />
                  Committee
                </TabsTrigger>
                <TabsTrigger value="owners">
                  <User className="mr-2 h-4 w-4" />
                  Owners
                </TabsTrigger>
                <TabsTrigger value="tenants">
                  <User className="mr-2 h-4 w-4" />
                  Tenants
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredResidents.map((resident) => (
                    <Card key={resident.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{getInitials(resident.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{resident.name}</CardTitle>
                            <CardDescription>Unit {resident.unit}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          {resident.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.email}</span>
                            </div>
                          )}
                          {resident.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.phone}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 text-xs">
                          {resident.isCommittee && (
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Committee Member</span>
                          )}
                          {resident.isOwner ? (
                            <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Owner</span>
                          ) : (
                            <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Tenant</span>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredResidents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No residents found matching your search criteria.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="committee" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredResidents.map((resident) => (
                    <Card key={resident.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{getInitials(resident.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{resident.name}</CardTitle>
                            <CardDescription>Unit {resident.unit}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          {resident.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.email}</span>
                            </div>
                          )}
                          {resident.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.phone}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 text-xs">
                          {resident.isCommittee && (
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Committee Member</span>
                          )}
                          {resident.isOwner ? (
                            <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Owner</span>
                          ) : (
                            <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Tenant</span>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredResidents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No committee members found matching your search criteria.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="owners" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredResidents.map((resident) => (
                    <Card key={resident.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{getInitials(resident.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{resident.name}</CardTitle>
                            <CardDescription>Unit {resident.unit}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          {resident.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.email}</span>
                            </div>
                          )}
                          {resident.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.phone}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 text-xs">
                          {resident.isCommittee && (
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Committee Member</span>
                          )}
                          <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Owner</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredResidents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No owners found matching your search criteria.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="tenants" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredResidents.map((resident) => (
                    <Card key={resident.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{getInitials(resident.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{resident.name}</CardTitle>
                            <CardDescription>Unit {resident.unit}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          {resident.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.email}</span>
                            </div>
                          )}
                          {resident.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{resident.phone}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 text-xs">
                          {resident.isCommittee && (
                            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">Committee Member</span>
                          )}
                          <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Tenant</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredResidents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No tenants found matching your search criteria.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
            <Link href="/directory" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Directory
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
