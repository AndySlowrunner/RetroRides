"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Calendar, Car, CheckCircle, Clock, Edit, Trash2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock booking data
const bookings = [
  {
    id: "1",
    car: {
      id: "1",
      name: "1967 Ford Mustang GT Fastback",
      image: "https://images.pexels.com/photos/12066803/pexels-photo-12066803.jpeg",
    },
    startDate: "September 15, 2025",
    endDate: "September 18, 2025",
    status: "confirmed",
    bookingRef: "RR-2025678",
    totalPrice: 597,
  },
  {
    id: "2",
    car: {
      id: "4",
      name: "1965 Mercedes-Benz 230SL Pagoda",
      image: "https://images.pexels.com/photos/4065181/pexels-photo-4065181.jpeg",
    },
    startDate: "October 5, 2025",
    endDate: "October 8, 2025",
    status: "pending",
    bookingRef: "RR-2025722",
    totalPrice: 747,
  },
  {
    id: "3",
    car: {
      id: "7",
      name: "1959 Cadillac Eldorado Biarritz",
      image: "https://images.pexels.com/photos/712614/pexels-photo-712614.jpeg",
    },
    startDate: "August 10, 2025",
    endDate: "August 12, 2025",
    status: "completed",
    bookingRef: "RR-2025498",
    totalPrice: 558,
  },
];

export default function UserBookingsPage() {
  const [bookingsList, setBookingsList] = useState(bookings);
  const [bookingToCancel, setBookingToCancel] = useState<string | null>(null);

  const handleCancelBooking = (id: string) => {
    // Update the booking status to "cancelled"
    setBookingsList(
      bookingsList.map((booking) =>
        booking.id === id ? { ...booking, status: "cancelled" } : booking
      )
    );
    setBookingToCancel(null);
    toast.success("Booking cancelled successfully");
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="font-serif text-3xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground">
          Manage and view your vintage car rental bookings
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 sm:w-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          {bookingsList.map((booking) => (
            <BookingCard 
              key={booking.id}
              booking={booking}
              onCancelClick={() => setBookingToCancel(booking.id)}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="confirmed" className="space-y-6">
          {bookingsList
            .filter((booking) => booking.status === "confirmed")
            .map((booking) => (
              <BookingCard 
                key={booking.id}
                booking={booking}
                onCancelClick={() => setBookingToCancel(booking.id)}
              />
            ))}
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-6">
          {bookingsList
            .filter((booking) => booking.status === "pending")
            .map((booking) => (
              <BookingCard 
                key={booking.id}
                booking={booking}
                onCancelClick={() => setBookingToCancel(booking.id)}
              />
            ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          {bookingsList
            .filter((booking) => booking.status === "completed")
            .map((booking) => (
              <BookingCard 
                key={booking.id}
                booking={booking}
              />
            ))}
        </TabsContent>
      </Tabs>

      <Dialog open={!!bookingToCancel} onOpenChange={() => setBookingToCancel(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            If you cancel within 48 hours of your booking start time, a cancellation fee may apply according to our terms and conditions.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Keep Booking</Button>
            </DialogClose>
            <Button 
              variant="destructive"
              onClick={() => bookingToCancel && handleCancelBooking(bookingToCancel)}
            >
              Yes, Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface BookingCardProps {
  booking: typeof bookings[0];
  onCancelClick?: () => void;
}

function BookingCard({ booking, onCancelClick }: BookingCardProps) {
  const statusColors = {
    confirmed: "text-green-500 bg-green-50",
    pending: "text-yellow-500 bg-yellow-50",
    completed: "text-blue-500 bg-blue-50",
    cancelled: "text-red-500 bg-red-50",
  };

  const statusIcons = {
    confirmed: <CheckCircle className="h-4 w-4 mr-1" />,
    pending: <Clock className="h-4 w-4 mr-1" />,
    completed: <CheckCircle className="h-4 w-4 mr-1" />,
    cancelled: <XCircle className="h-4 w-4 mr-1" />,
  };

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[320px_1fr]">
        <div className="relative h-48 md:h-full">
          <Image
            src={booking.car.image}
            alt={booking.car.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    statusColors[booking.status as keyof typeof statusColors]
                  }`}
                >
                  {statusIcons[booking.status as keyof typeof statusIcons]}
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
                <span className="text-sm text-muted-foreground">
                  Ref: {booking.bookingRef}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold mt-2">{booking.car.name}</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-8 mt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{booking.startDate} to {booking.endDate}</span>
                </div>
                <div className="flex items-center text-sm font-medium">
                  <span>Total: ${booking.totalPrice}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 md:self-start">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <Link href={`/cars/${booking.car.id}`}>
                  <Car className="h-4 w-4 mr-1" />
                  View Car
                </Link>
              </Button>
              {(booking.status === "confirmed" || booking.status === "pending") && (
                <>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link href={`/user/bookings/${booking.id}/edit`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Modify
                    </Link>
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={onCancelClick}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>

          <Separator className="my-4" />

          <div className="text-sm space-y-2">
            <div className="flex items-start space-x-1">
              <p className="font-medium">Pickup Details</p>
              <p className="text-muted-foreground">
                Please arrive at our location at 123 Vintage Way, with your ID, driver's license, and the credit card used for booking.
              </p>
            </div>
            {booking.status === "confirmed" && (
              <Link 
                href="/contact"
                className="text-chart-5 hover:underline inline-block mt-2"
              >
                Need to make changes? Contact us
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}