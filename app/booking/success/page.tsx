import Link from "next/link";
import { Calendar, CheckCircle, ChevronRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BookingSuccessPage() {
  return (
    <div className="container max-w-2xl py-16">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h1 className="font-serif text-3xl font-bold">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your vintage car rental booking has been successfully processed. We've sent
            confirmation details to your email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-muted rounded-lg">
            <h2 className="font-serif text-lg font-semibold mb-2">Booking Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Booking Reference</span>
                <span className="font-medium">RR-2025678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vehicle</span>
                <span className="font-medium">1965 Ford Mustang</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rental Period</span>
                <span className="font-medium">Sep 15 - Sep 18, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Cost</span>
                <span className="font-bold">$597.00</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-semibold">What's Next?</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-chart-5 text-white">
                  1
                </div>
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm text-muted-foreground">
                    We've sent a detailed confirmation to your email with all the information
                    about your booking.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-chart-5 text-white">
                  2
                </div>
                <div>
                  <p className="font-medium">Prepare your documents</p>
                  <p className="text-sm text-muted-foreground">
                    Don't forget to bring your driver's license, ID, and the credit card used
                    for the booking.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-chart-5 text-white">
                  3
                </div>
                <div>
                  <p className="font-medium">Pick up your vehicle</p>
                  <p className="text-sm text-muted-foreground">
                    Arrive at our location at the scheduled time to pick up your vintage car.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button
              asChild
              className="flex-1 bg-chart-5 hover:bg-chart-5/90 text-white"
            >
              <Link href="/user/bookings">
                View My Bookings <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>

          <div className="border-t pt-6 mt-6">
            <p className="text-sm text-muted-foreground text-center">
              Need assistance with your booking?{" "}
              <Link
                href="/contact"
                className="text-chart-5 hover:underline font-medium"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}