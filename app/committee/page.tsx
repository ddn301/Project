import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommitteePage() {
  // Sample data for committee members
  const committeeMembers = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Chairperson",
      bio: "Michael has been a resident for 5 years and has served on the committee for 3 years. He has a background in property management and is passionate about maintaining high standards in the building.",
      image: "/images/profile-michael.png",
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      role: "Secretary",
      bio: "Sophia is a lawyer specializing in property law. She handles all correspondence, meeting minutes, and ensures the committee follows proper procedures and regulations.",
      image: "/images/profile-sophia.png",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Treasurer",
      bio: "David has a background in finance and accounting. He manages the building's finances, prepares budgets, and ensures levies are collected and expenses are properly managed.",
      image: "/images/profile-david.png",
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Maintenance Coordinator",
      bio: "Emma has a background in civil engineering and oversees all maintenance and repair projects in the building. She works closely with contractors and service providers.",
      image: "/images/profile-emma.png",
    },
    {
      id: 5,
      name: "James Taylor",
      role: "Social Coordinator",
      bio: "James organizes community events and activities to foster a sense of community among residents. He's been living in the building for 4 years and works in event management.",
      image: "/images/profile-james.png",
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
              <Link
                href="/notices"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Notices
              </Link>
              <Link href="/committee" className="text-sm font-medium transition-colors hover:text-primary">
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
            <h1 className="text-3xl font-bold">Strata Committee</h1>
          </div>

          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-muted-foreground">
                The strata committee is elected by owners to represent their interests and make decisions on behalf of
                the owners corporation. Committee members volunteer their time to help manage the building and ensure it
                runs smoothly.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {committeeMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Interested in Joining the Committee?</h2>
              <p className="mb-6 text-muted-foreground">
                The strata committee is elected annually at the Annual General Meeting. If you're interested in
                contributing to the community and helping to manage the building, consider nominating yourself for the
                next election.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button>Express Interest</Button>
                </Link>
                <Button variant="outline">Learn More</Button>
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
