"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Building2, ArrowLeft, CreditCard, Calendar, DollarSign, FileText, Check, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Payment types
interface Payment {
  id: string
  type: string
  amount: number
  dueDate: string
  status: "paid" | "pending" | "overdue"
  paidDate?: string
  description: string
}

export default function PaymentsPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)

  // Sample payments data
  const payments: Payment[] = [
    {
      id: "1",
      type: "Quarterly Levy",
      amount: 1250.0,
      dueDate: "2025-04-01",
      status: "paid",
      paidDate: "2025-03-25",
      description: "Q2 2025 Strata Levy",
    },
    {
      id: "2",
      type: "Quarterly Levy",
      amount: 1250.0,
      dueDate: "2025-07-01",
      status: "pending",
      description: "Q3 2025 Strata Levy",
    },
    {
      id: "3",
      type: "Special Levy",
      amount: 500.0,
      dueDate: "2025-05-15",
      status: "pending",
      description: "Facade Repair Special Levy",
    },
    {
      id: "4",
      type: "Quarterly Levy",
      amount: 1200.0,
      dueDate: "2025-01-01",
      status: "paid",
      paidDate: "2024-12-28",
      description: "Q1 2025 Strata Levy",
    },
    {
      id: "5",
      type: "Quarterly Levy",
      amount: 1200.0,
      dueDate: "2024-10-01",
      status: "paid",
      paidDate: "2024-09-30",
      description: "Q4 2024 Strata Levy",
    },
  ]

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

  // Handle card number input formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digits
    let value = e.target.value.replace(/\D/g, "")

    // Add spaces after every 4 digits
    if (value.length > 0) {
      value = value.match(/.{1,4}/g)?.join(" ") || value
    }

    // Limit to 19 characters (16 digits + 3 spaces)
    setCardNumber(value.substring(0, 19))
  }

  // Handle expiry date input formatting
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digits
    let value = e.target.value.replace(/\D/g, "")

    // Format as MM/YY
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2)
    }

    // Limit to 5 characters (MM/YY)
    setCardExpiry(value.substring(0, 5))
  }

  // Handle payment submission
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentError(null)

    // Validate form
    if (!cardNumber || !cardName || !cardExpiry || !cardCvc || !paymentAmount) {
      setPaymentError("Please fill in all required fields.")
      return
    }

    // Validate card number (simple check for 16 digits)
    if (cardNumber.replace(/\s/g, "").length !== 16) {
      setPaymentError("Please enter a valid 16-digit card number.")
      return
    }

    // Validate expiry date (MM/YY format)
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
      setPaymentError("Please enter a valid expiry date (MM/YY).")
      return
    }

    // Validate CVC (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cardCvc)) {
      setPaymentError("Please enter a valid CVC (3 or 4 digits).")
      return
    }

    // Validate payment amount
    if (isNaN(Number.parseFloat(paymentAmount)) || Number.parseFloat(paymentAmount) <= 0) {
      setPaymentError("Please enter a valid payment amount.")
      return
    }

    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      // In a real application, you would submit to a payment API
      console.log("Payment submitted:", {
        cardNumber: cardNumber.replace(/\s/g, ""),
        cardName,
        cardExpiry,
        cardCvc,
        amount: Number.parseFloat(paymentAmount),
      })

      setPaymentSuccess(true)
      setIsSubmitting(false)

      // Reset form
      setCardNumber("")
      setCardName("")
      setCardExpiry("")
      setCardCvc("")
      setPaymentAmount("")
    }, 2000)
  }

  // Calculate total due
  const totalDue = payments
    .filter((payment) => payment.status === "pending" || payment.status === "overdue")
    .reduce((sum, payment) => sum + payment.amount, 0)

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
              <Link href="/payments" className="text-sm font-medium transition-colors hover:text-primary">
                Payments
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
            <h1 className="text-3xl font-bold">Payments</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                  <CardDescription>Unit 1201 • John Doe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Due:</span>
                    <span className="text-xl font-bold">{formatCurrency(totalDue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Next Due Date:</span>
                    <span>May 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span>Credit Card</span>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="all">All Payments</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6 space-y-4">
                  {payments
                    .filter((payment) => payment.status === "pending" || payment.status === "overdue")
                    .map((payment) => (
                      <Card key={payment.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{payment.type}</CardTitle>
                              <CardDescription>{payment.description}</CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">{formatCurrency(payment.amount)}</div>
                              <div className="text-sm text-muted-foreground">Due: {formatDate(payment.dueDate)}</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardFooter className="pt-2">
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <span
                                className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                                  payment.status === "overdue"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {payment.status === "overdue" ? "Overdue" : "Pending"}
                              </span>
                            </div>
                            <Button size="sm">Pay Now</Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}

                  {payments.filter((payment) => payment.status === "pending" || payment.status === "overdue").length ===
                    0 && (
                    <div className="text-center py-8">
                      <Check className="mx-auto h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-lg font-medium">All Paid Up!</h3>
                      <p className="text-muted-foreground">You have no upcoming payments due.</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="history" className="mt-6 space-y-4">
                  {payments
                    .filter((payment) => payment.status === "paid")
                    .map((payment) => (
                      <Card key={payment.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{payment.type}</CardTitle>
                              <CardDescription>{payment.description}</CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">{formatCurrency(payment.amount)}</div>
                              <div className="text-sm text-muted-foreground">
                                Paid: {payment.paidDate ? formatDate(payment.paidDate) : "N/A"}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardFooter className="pt-2">
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                Paid
                              </span>
                            </div>
                            <Button size="sm" variant="outline">
                              <FileText className="mr-2 h-4 w-4" />
                              Receipt
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}

                  {payments.filter((payment) => payment.status === "paid").length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No payment history available.</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="all" className="mt-6 space-y-4">
                  {payments.map((payment) => (
                    <Card key={payment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{payment.type}</CardTitle>
                            <CardDescription>{payment.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">{formatCurrency(payment.amount)}</div>
                            <div className="text-sm text-muted-foreground">
                              {payment.status === "paid"
                                ? `Paid: ${payment.paidDate ? formatDate(payment.paidDate) : "N/A"}`
                                : `Due: ${formatDate(payment.dueDate)}`}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="pt-2">
                        <div className="flex justify-between items-center w-full">
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                                payment.status === "paid"
                                  ? "bg-green-100 text-green-700"
                                  : payment.status === "overdue"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {payment.status === "paid"
                                ? "Paid"
                                : payment.status === "overdue"
                                  ? "Overdue"
                                  : "Pending"}
                            </span>
                          </div>
                          {payment.status === "paid" ? (
                            <Button size="sm" variant="outline">
                              <FileText className="mr-2 h-4 w-4" />
                              Receipt
                            </Button>
                          ) : (
                            <Button size="sm">Pay Now</Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Make a Payment</CardTitle>
                  <CardDescription>Securely pay your strata levies and fees</CardDescription>
                </CardHeader>
                <CardContent>
                  {paymentSuccess ? (
                    <div className="space-y-4">
                      <Alert className="bg-green-50 border-green-200 text-green-800">
                        <Check className="h-4 w-4" />
                        <AlertTitle>Payment Successful!</AlertTitle>
                        <AlertDescription>
                          Your payment has been processed successfully. A receipt has been sent to your email.
                        </AlertDescription>
                      </Alert>
                      <Button onClick={() => setPaymentSuccess(false)} className="w-full">
                        Make Another Payment
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handlePayment} className="space-y-4">
                      {paymentError && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{paymentError}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="payment-amount">Payment Amount</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="payment-amount"
                            type="text"
                            placeholder="0.00"
                            className="pl-8"
                            value={paymentAmount}
                            onChange={(e) => {
                              // Allow only numbers and decimal point
                              const value = e.target.value.replace(/[^0-9.]/g, "")
                              setPaymentAmount(value)
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="card-number"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="pl-8"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-name">Cardholder Name</Label>
                        <Input
                          id="card-name"
                          type="text"
                          placeholder="John Doe"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-expiry">Expiry Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="card-expiry"
                              type="text"
                              placeholder="MM/YY"
                              className="pl-8"
                              value={cardExpiry}
                              onChange={handleExpiryChange}
                              maxLength={5}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-cvc">CVC</Label>
                          <Input
                            id="card-cvc"
                            type="text"
                            placeholder="123"
                            value={cardCvc}
                            onChange={(e) => {
                              // Allow only numbers
                              const value = e.target.value.replace(/\D/g, "")
                              setCardCvc(value.substring(0, 4))
                            }}
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Pay Now"}
                      </Button>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All payments are processed securely. Your card details are not stored on our
                    servers.
                  </p>
                </CardFooter>
              </Card>

              <div className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Other ways to pay your strata levies</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Direct Deposit</h3>
                      <p className="text-sm text-muted-foreground">
                        You can make a direct deposit to the strata account:
                      </p>
                      <div className="bg-muted p-3 rounded-md text-sm">
                        <div>
                          <strong>Account Name:</strong> Horizon Heights Strata Plan
                        </div>
                        <div>
                          <strong>BSB:</strong> 123-456
                        </div>
                        <div>
                          <strong>Account Number:</strong> 12345678
                        </div>
                        <div>
                          <strong>Reference:</strong> Unit 1201
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">BPAY</h3>
                      <p className="text-sm text-muted-foreground">BPAY details can be found on your levy notice.</p>
                      <div className="bg-muted p-3 rounded-md text-sm">
                        <div>
                          <strong>Biller Code:</strong> 12345
                        </div>
                        <div>
                          <strong>Reference:</strong> 1201001
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Cheque</h3>
                      <p className="text-sm text-muted-foreground">
                        Cheques should be made payable to "Horizon Heights Strata Plan" and mailed to:
                      </p>
                      <div className="bg-muted p-3 rounded-md text-sm">
                        <div>Horizon Heights Strata Manager</div>
                        <div>PO Box 1234</div>
                        <div>Metropolis, NSW 2000</div>
                      </div>
                    </div>
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
            <Link href="/payments" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Payments
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
