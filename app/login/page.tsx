import Link from "next/link"
import { Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
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
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-full items-center py-12">
          <div className="mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome Back</h1>
                <p className="text-muted-foreground md:text-xl">
                  Log in to access your resident portal and manage your strata services.
                </p>
              </div>
              <div className="hidden md:block bg-muted rounded-xl p-8 text-center">
                <Building2 className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Horizon Heights Resident Portal</p>
                <p className="text-muted-foreground mt-2">Access your strata information and services</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription>Choose your role to access the appropriate portal</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <Tabs defaultValue="resident" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="resident">Resident</TabsTrigger>
                      <TabsTrigger value="committee">Committee Member</TabsTrigger>
                    </TabsList>
                    <TabsContent value="resident">
                      <form className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="resident-email">Email</Label>
                          <Input id="resident-email" type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="resident-password">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-primary underline underline-offset-4">
                              Forgot password?
                            </Link>
                          </div>
                          <Input id="resident-password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                          Login as Resident
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="committee">
                      <form className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="committee-email">Email</Label>
                          <Input id="committee-email" type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="committee-password">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-primary underline underline-offset-4">
                              Forgot password?
                            </Link>
                          </div>
                          <Input id="committee-password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                          Login as Committee Member
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-sm text-muted-foreground text-center">
                    Don't have an account?{" "}
                    <Link href="/contact" className="text-primary underline underline-offset-4">
                      Contact the strata manager
                    </Link>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    By logging in, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-4">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline underline-offset-4">
                      Privacy Policy
                    </Link>
                  </div>
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
