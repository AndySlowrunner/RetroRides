import Link from "next/link";
import { Facebook, Instagram, Twitter, Car } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container max-w-screen-2xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 text-chart-5"
            >
              <Car className="h-6 w-6" />
              <span className="font-serif text-xl font-bold tracking-wide">RetroRides</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Experience the golden era of automobiles with our premium vintage car rental service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-chart-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-chart-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-chart-5" />
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-serif text-lg font-semibold">Explore</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/cars" className="text-muted-foreground hover:text-chart-5">
                      Our Cars
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-chart-5">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-chart-5">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="text-muted-foreground hover:text-chart-5">
                      Customer Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-serif text-lg font-semibold">Support</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/faq" className="text-muted-foreground hover:text-chart-5">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-chart-5">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-chart-5">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-chart-5">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="font-serif text-lg font-semibold">Subscribe</h3>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Get exclusive offers, vintage car news, and updates on our newest additions.
                </p>
                <div className="mt-4 flex max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-r-none focus-visible:ring-chart-5"
                  />
                  <Button className="rounded-l-none bg-chart-5 hover:bg-chart-5/90 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RetroRides. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}