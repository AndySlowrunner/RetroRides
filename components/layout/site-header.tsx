"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Car, Menu, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/cars",
      label: "Browse Cars",
      active: pathname === "/cars",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-chart-5" />
          <motion.div
            className="hidden font-serif text-xl font-bold tracking-wide sm:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            RetroRides
          </motion.div>
        </Link>
        <nav className="hidden flex-1 justify-center space-x-6 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-base font-medium transition-colors hover:text-chart-5 ${
                route.active ? "text-chart-5" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="link"
            asChild
            className="hidden md:flex text-muted-foreground hover:text-chart-5"
          >
            <Link href="/login">
              <User className="mr-1 h-5 w-5" />
              Sign In
            </Link>
          </Button>
          <Button
            variant="default"
            className="hidden md:flex bg-chart-5 hover:bg-chart-5/90 text-white"
            asChild
          >
            <Link href="/register">Sign Up</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="flex flex-col space-y-4 py-8">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Car className="h-6 w-6 text-chart-5" />
                  <span className="font-serif text-xl font-bold">
                    RetroRides
                  </span>
                </Link>
                <div className="flex flex-col space-y-3">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-base font-medium transition-colors hover:text-chart-5 ${
                        route.active
                          ? "text-chart-5"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <Button
                    variant="link"
                    className="justify-start px-0"
                    asChild
                  >
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="mr-2 h-5 w-5" />
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    className="bg-chart-5 hover:bg-chart-5/90 text-white mt-2"
                    asChild
                  >
                    <Link
                      href="/register"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}