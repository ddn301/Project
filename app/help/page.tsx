import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function HelpPage() {
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
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/help" className="text-sm font-medium transition-colors hover:text-primary">
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
          <div className="flex items-center gap-4">
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
            <h1 className="text-3xl font-bold">Help & FAQ</h1>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-muted-foreground">
              Find answers to the most frequently asked questions about living in Horizon Heights. If you can't find
              what you're looking for, please{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4">
                contact us
              </Link>
              .
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="levies">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Strata Levies
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">How much are the strata levies?</h3>
                      <p className="text-muted-foreground">
                        Strata levies vary depending on your unit size and entitlement. Please refer to your quarterly
                        levy notice or contact the strata manager for specific amounts.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">When are levies due?</h3>
                      <p className="text-muted-foreground">
                        Levies are due quarterly on the 1st of January, April, July, and October.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How can I pay my levies?</h3>
                      <p className="text-muted-foreground">
                        Levies can be paid via direct deposit, BPAY, or through the resident portal after logging in.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What happens if I miss a payment?</h3>
                      <p className="text-muted-foreground">
                        Late payments incur interest charges. If you're experiencing financial difficulties, please
                        contact the strata manager to discuss payment arrangements.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="repairs">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    Repairs & Maintenance
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">How do I report a maintenance issue?</h3>
                      <p className="text-muted-foreground">
                        Maintenance issues can be reported through the resident portal after logging in, or by
                        contacting the building manager directly for urgent matters.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Who is responsible for repairs inside my unit?</h3>
                      <p className="text-muted-foreground">
                        Generally, owners are responsible for repairs inside their units, including appliances, internal
                        walls, floors, and fixtures. The strata corporation is responsible for common property and
                        structural elements.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What about plumbing or electrical issues?</h3>
                      <p className="text-muted-foreground">
                        If the issue affects only your unit, it's typically your responsibility. If it affects common
                        property or multiple units, it may be the strata's responsibility. When in doubt, report the
                        issue to the building manager.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pets">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"></path>
                      <path d="M14.5 5.17c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path>
                      <path d="M8 14v.5"></path>
                      <path d="M16 14v.5"></path>
                      <path d="M11.25 16.25h1.5L12 17l-.75-.75z"></path>
                      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"></path>
                    </svg>
                    Pet Policies
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Are pets allowed in the building?</h3>
                      <p className="text-muted-foreground">
                        Yes, pets are allowed with prior approval from the strata committee. There are restrictions on
                        size, number, and type of pets.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How do I apply for pet approval?</h3>
                      <p className="text-muted-foreground">
                        Submit a pet application form through the resident portal or contact the strata manager. Include
                        details about your pet, including breed, size, age, and a photo.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What are the rules for pets in common areas?</h3>
                      <p className="text-muted-foreground">
                        Pets must be on a leash in all common areas. Owners must clean up after their pets immediately.
                        Pets are not allowed in the pool area or gym.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="noise">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M2 10s2-2 5-2 5 2 5 2"></path>
                      <path d="M12 10s2-2 5-2 5 2 5 2"></path>
                      <path d="M2 14s2-2 5-2 5 2 5 2"></path>
                      <path d="M12 14s2-2 5-2 5 2 5 2"></path>
                      <path d="M2 18s2-2 5-2 5 2 5 2"></path>
                      <path d="M12 18s2-2 5-2 5 2 5 2"></path>
                    </svg>
                    Noise Complaints
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">What are the quiet hours in the building?</h3>
                      <p className="text-muted-foreground">
                        Quiet hours are from 10:00 PM to 7:00 AM on weekdays, and 11:00 PM to 8:00 AM on weekends and
                        holidays.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How do I report a noise complaint?</h3>
                      <p className="text-muted-foreground">
                        For immediate concerns, contact the building security. For ongoing issues, submit a formal
                        complaint through the resident portal or contact the strata manager.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What happens after I file a noise complaint?</h3>
                      <p className="text-muted-foreground">
                        The strata manager will investigate the complaint and may issue a warning to the resident.
                        Repeated violations may result in fines or other enforcement actions.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rubbish">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Rubbish Collection
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Where are the garbage and recycling bins located?</h3>
                      <p className="text-muted-foreground">
                        Garbage and recycling bins are located in the designated waste room on each floor near the
                        service elevator.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What are the recycling guidelines?</h3>
                      <p className="text-muted-foreground">
                        Please separate recyclables (paper, cardboard, glass, plastic, and metal) from general waste.
                        Rinse containers before recycling. Flatten cardboard boxes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How do I dispose of large items?</h3>
                      <p className="text-muted-foreground">
                        Large items such as furniture or appliances cannot be placed in regular bins. Contact the
                        building manager to arrange special collection, which may incur a fee.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="moving">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Moving In/Out
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Do I need to book the elevator for moving?</h3>
                      <p className="text-muted-foreground">
                        Yes, you must book the service elevator at least 48 hours in advance for any move in or out.
                        This can be done through the resident portal or by contacting the building manager.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What are the moving hours?</h3>
                      <p className="text-muted-foreground">
                        Moving is permitted Monday through Saturday from 9:00 AM to 5:00 PM. No moving is allowed on
                        Sundays or public holidays.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Is there a security deposit for moving?</h3>
                      <p className="text-muted-foreground">
                        Yes, a refundable security deposit of $500 is required for moving. This will be returned after
                        inspection confirms no damage to common areas.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What documentation do I need to provide when moving in?</h3>
                      <p className="text-muted-foreground">
                        New residents must complete a resident information form, provide photo ID, and sign an
                        acknowledgment of building rules before receiving access cards and keys.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="rounded-lg border p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
              <p className="mb-4">
                If you couldn't find the answer to your question, please don't hesitate to contact us.
              </p>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
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
