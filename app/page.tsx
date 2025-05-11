import Link from "next/link"
import Image from "next/image"
import { Building2, HelpCircle, Mail, Bell, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  // Get site name from environment variable or use default
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Horizon Heights"

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">{siteName}</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex md:gap-6 mr-4">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
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

      {/* Banner Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/images/building-exterior.png"
          alt="Horizon Heights Building"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-2">{siteName}</h1>
            <p className="text-xl">Modern Living in the Heart of the City</p>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to {siteName}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A modern residential community where neighbors become friends and every day feels like home.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg">Resident Login</Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/apartment-interior.png"
                width={800}
                height={550}
                alt="Horizon Heights Interior"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What is Strata?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Strata title is a form of ownership that allows individuals to own their unit while sharing ownership
                  of common property with other owners. This includes facilities like lobbies, gardens, pools, and
                  parking areas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Community Living</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Enjoy the benefits of shared facilities and a vibrant community atmosphere while maintaining your
                    private space.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Shared Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Maintenance costs and responsibilities are shared among all owners, making upkeep more manageable
                    and cost-effective.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Collective Decision Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Important decisions about the building are made collectively through the strata committee and
                    general meetings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Quick Links</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access important information and services with just one click.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/help">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-medium">Help & FAQ</h3>
                    <p className="text-sm text-muted-foreground">Find answers to common questions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/contact">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <Mail className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-medium">Contact Us</h3>
                    <p className="text-sm text-muted-foreground">Get in touch with management</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/notices">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <Bell className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-medium">Notices</h3>
                    <p className="text-sm text-muted-foreground">Stay updated with announcements</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/committee">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-medium">Committee</h3>
                    <p className="text-sm text-muted-foreground">Meet your strata committee</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="text-lg font-bold">{siteName}</span>
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
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
