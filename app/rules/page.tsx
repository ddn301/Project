import Link from "next/link"
import { Building2, ArrowLeft, AlertCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RulesPage() {
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
              <Link href="/rules" className="text-sm font-medium transition-colors hover:text-primary">
                Building Rules
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
            <h1 className="text-3xl font-bold">Building Rules & Regulations</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              <p className="text-muted-foreground">
                These rules and regulations have been established to ensure a harmonious living environment for all
                residents of Horizon Heights. All owners, tenants, and visitors must comply with these rules.
              </p>

              <Alert className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Important Notice</AlertTitle>
                <AlertDescription className="text-amber-700">
                  These rules were last updated on May 1, 2025. The strata committee reserves the right to amend these
                  rules as necessary, with proper notice to all residents.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="noise">Noise</TabsTrigger>
                  <TabsTrigger value="common">Common Areas</TabsTrigger>
                  <TabsTrigger value="pets">Pets</TabsTrigger>
                  <TabsTrigger value="moving">Moving</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Rules</CardTitle>
                      <CardDescription>Rules that apply to all residents and visitors</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">1. Compliance with Laws</h3>
                        <p className="text-muted-foreground">
                          All residents and visitors must comply with all applicable laws, regulations, and ordinances.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">2. Insurance</h3>
                        <p className="text-muted-foreground">
                          All owners must maintain adequate insurance coverage for their units, including liability
                          insurance.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">3. Access</h3>
                        <p className="text-muted-foreground">
                          Building management must be provided with access to units for maintenance, repairs, and
                          emergencies.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">4. Alterations</h3>
                        <p className="text-muted-foreground">
                          No structural alterations may be made to any unit without prior written approval from the
                          strata committee.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">5. Balconies and Windows</h3>
                        <p className="text-muted-foreground">
                          No items may be hung from balconies or windows. Balconies must be kept clean and tidy.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">6. Smoking</h3>
                        <p className="text-muted-foreground">
                          Smoking is prohibited in all common areas, including hallways, elevators, and amenity spaces.
                          Smoking on balconies must not disturb other residents.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="noise" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Noise Regulations</CardTitle>
                      <CardDescription>Rules regarding noise and quiet hours</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">1. Quiet Hours</h3>
                        <p className="text-muted-foreground">
                          Quiet hours are from 10:00 PM to 7:00 AM on weekdays, and 11:00 PM to 8:00 AM on weekends and
                          holidays.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">2. Excessive Noise</h3>
                        <p className="text-muted-foreground">
                          Residents must not create excessive noise at any time that may disturb other residents. This
                          includes loud music, television, parties, and other activities.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">3. Construction Work</h3>
                        <p className="text-muted-foreground">
                          Construction, renovation, or repair work that creates noise is only permitted between 8:00 AM
                          and 5:00 PM on weekdays, and 9:00 AM to 4:00 PM on Saturdays. No such work is permitted on
                          Sundays or public holidays.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">4. Musical Instruments</h3>
                        <p className="text-muted-foreground">
                          Playing of musical instruments is permitted during non-quiet hours, but must not disturb other
                          residents. The use of headphones is encouraged.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">5. Flooring</h3>
                        <p className="text-muted-foreground">
                          Units with hard flooring must have adequate sound insulation and floor coverings to minimize
                          noise transmission.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="common" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Common Areas</CardTitle>
                      <CardDescription>Rules for common areas and facilities</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">1. Hallways and Lobbies</h3>
                        <p className="text-muted-foreground">
                          Hallways, lobbies, and other common areas must be kept clear of personal items, including
                          shoes, bicycles, and decorations.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">2. Swimming Pool</h3>
                        <p className="text-muted-foreground">
                          Pool hours are from 6:00 AM to 10:00 PM daily. Children under 16 must be supervised by an
                          adult. No glass containers are allowed in the pool area.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">3. Fitness Center</h3>
                        <p className="text-muted-foreground">
                          The fitness center is open 24 hours. Please wipe down equipment after use and return weights
                          to their proper place. No children under 16 are allowed without adult supervision.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">4. BBQ Area</h3>
                        <p className="text-muted-foreground">
                          The BBQ area must be booked in advance through the resident portal. Users must clean the area
                          after use and dispose of all trash properly.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">5. Parking</h3>
                        <p className="text-muted-foreground">
                          Residents must park only in their assigned spaces. Visitor parking is limited to 24 hours
                          unless approved by management. No vehicle maintenance is permitted in the parking areas.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pets" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pet Policies</CardTitle>
                      <CardDescription>Rules for pet owners in the building</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">1. Approval</h3>
                        <p className="text-muted-foreground">
                          All pets must be approved by the strata committee before being brought into the building. A
                          pet application form must be submitted.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">2. Restrictions</h3>
                        <p className="text-muted-foreground">
                          Dogs must not exceed 20kg in weight. Maximum of two pets per unit. Exotic animals, reptiles,
                          and farm animals are not permitted.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">3. Common Areas</h3>
                        <p className="text-muted-foreground">
                          Pets must be on a leash or in a carrier at all times in common areas. Pets are not allowed in
                          the pool area, fitness center, or other amenity spaces.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">4. Waste</h3>
                        <p className="text-muted-foreground">
                          Pet owners must immediately clean up after their pets in all areas of the property, including
                          common areas and designated pet areas.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">5. Noise</h3>
                        <p className="text-muted-foreground">
                          Excessive barking or other pet noise that disturbs other residents is not permitted. Pet
                          owners are responsible for ensuring their pets do not create a nuisance.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="moving" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Moving Regulations</CardTitle>
                      <CardDescription>Rules for moving in and out of the building</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">1. Scheduling</h3>
                        <p className="text-muted-foreground">
                          All moves must be scheduled at least 48 hours in advance through the building management.
                          Moves are only permitted between 9:00 AM and 5:00 PM, Monday through Saturday.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">2. Security Deposit</h3>
                        <p className="text-muted-foreground">
                          A refundable security deposit of $500 is required for all moves. This will be returned after
                          inspection confirms no damage to common areas.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">3. Elevator Use</h3>
                        <p className="text-muted-foreground">
                          The service elevator must be used for all moves. Protective padding must be installed in the
                          elevator before moving begins.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">4. Damages</h3>
                        <p className="text-muted-foreground">
                          Residents are responsible for any damages caused during their move. This includes damage to
                          walls, doors, elevators, and other common areas.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold">5. Notification</h3>
                        <p className="text-muted-foreground">
                          New residents must provide contact information and complete a resident information form before
                          or upon moving in.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Search Rules</CardTitle>
                    <CardDescription>Find specific rules quickly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search rules..."
                        className="pl-8 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rule Violations</CardTitle>
                    <CardDescription>Consequences for breaking rules</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Violations of building rules may result in the following actions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Verbal warning</li>
                      <li>Written warning</li>
                      <li>Fines (ranging from $50 to $500)</li>
                      <li>Restriction of amenity access</li>
                      <li>Legal action for serious or repeated violations</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Residents have the right to appeal any penalties through the strata committee.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Download Rules</CardTitle>
                    <CardDescription>Get a copy for your records</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">Download PDF</Button>
                    <p className="text-xs text-muted-foreground text-center">Last updated: May 1, 2025</p>
                  </CardContent>
                </Card>
              </div>
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
            <Link href="/rules" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Building Rules
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
