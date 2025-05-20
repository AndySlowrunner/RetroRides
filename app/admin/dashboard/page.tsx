"use client";

import { useState } from "react";
import { format } from "date-fns";
import { 
  Car, 
  Calendar, 
  Users, 
  DollarSign, 
  Search, 
  Edit, 
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  Clock 
} from "lucide-react";

import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { toast } from "sonner";

// Mock booking data
const bookings = [
  {
    id: "1",
    car: "1967 Ford Mustang GT Fastback",
    customer: "John Smith",
    email: "john@example.com",
    startDate: "2025-09-15",
    endDate: "2025-09-18",
    status: "confirmed",
    totalPrice: 597,
  },
  {
    id: "2",
    car: "1965 Mercedes-Benz 230SL Pagoda",
    customer: "Emma Wilson",
    email: "emma@example.com",
    startDate: "2025-10-05",
    endDate: "2025-10-08",
    status: "pending",
    totalPrice: 747,
  },
  {
    id: "3",
    car: "1959 Cadillac Eldorado Biarritz",
    customer: "Michael Johnson",
    email: "michael@example.com",
    startDate: "2025-08-10",
    endDate: "2025-08-12",
    status: "completed",
    totalPrice: 558,
  },
  {
    id: "4",
    car: "1970 Dodge Challenger R/T",
    customer: "Sarah Davis",
    email: "sarah@example.com",
    startDate: "2025-11-20",
    endDate: "2025-11-23",
    status: "confirmed",
    totalPrice: 567,
  },
  {
    id: "5",
    car: "1970 Porsche 911S",
    customer: "Robert Brown",
    email: "robert@example.com",
    startDate: "2025-12-15",
    endDate: "2025-12-18",
    status: "pending",
    totalPrice: 777,
  },
];

export default function AdminDashboardPage() {
  const [searchCars, setSearchCars] = useState("");
  const [searchBookings, setSearchBookings] = useState("");
  const [carsList, setCarsList] = useState(cars);
  const [bookingsList, setBookingsList] = useState(bookings);

  // Filter cars based on search
  const filteredCars = carsList.filter(
    (car) =>
      car.name.toLowerCase().includes(searchCars.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchCars.toLowerCase()) ||
      car.category.toLowerCase().includes(searchCars.toLowerCase())
  );

  // Filter bookings based on search
  const filteredBookings = bookingsList.filter(
    (booking) =>
      booking.car.toLowerCase().includes(searchBookings.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchBookings.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchBookings.toLowerCase())
  );

  const handleDeleteCar = (id: string) => {
    setCarsList(carsList.filter((car) => car.id !== id));
    toast.success("Car deleted successfully");
  };

  const handleUpdateBookingStatus = (id: string, status: string) => {
    setBookingsList(
      bookingsList.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
    toast.success(`Booking status updated to ${status}`);
  };

  return (
    <div className="container py-8">
      <h1 className="font-serif text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{carsList.length}</div>
            <p className="text-xs text-muted-foreground">
              in your fleet inventory
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Bookings
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                bookingsList.filter(
                  (booking) => booking.status === "confirmed" || booking.status === "pending"
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground">
              pending and confirmed bookings
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              registered users this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,580</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cars" className="space-y-6">
        <TabsList>
          <TabsTrigger value="cars">Car Management</TabsTrigger>
          <TabsTrigger value="bookings">Booking Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cars" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cars..."
                value={searchCars}
                onChange={(e) => setSearchCars(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Car
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Price/Day</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell className="font-medium">{car.name}</TableCell>
                    <TableCell>{car.brand}</TableCell>
                    <TableCell>
                      {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
                    </TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>${car.pricePerDay}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          car.available
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {car.available ? "Available" : "Unavailable"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 text-destructive" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Car</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this car? This action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button 
                                variant="destructive"
                                onClick={() => handleDeleteCar(car.id)}
                              >
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredCars.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6">
                      No cars found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="bookings" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bookings..."
              value={searchBookings}
              onChange={(e) => setSearchBookings(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Car</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Dates</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">#{booking.id}</TableCell>
                    <TableCell>{booking.car}</TableCell>
                    <TableCell>
                      <div>
                        <p>{booking.customer}</p>
                        <p className="text-xs text-muted-foreground">{booking.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-xs">
                          {format(new Date(booking.startDate), "MMM dd, yyyy")} -
                        </p>
                        <p className="text-xs">
                          {format(new Date(booking.endDate), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>${booking.totalPrice}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          booking.status === "confirmed"
                            ? "bg-green-50 text-green-700"
                            : booking.status === "pending"
                            ? "bg-yellow-50 text-yellow-700"
                            : booking.status === "completed"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {booking.status === "confirmed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {booking.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                        {booking.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {booking.status === "cancelled" && <XCircle className="h-3 w-3 mr-1" />}
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        {booking.status === "pending" && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleUpdateBookingStatus(booking.id, "confirmed")}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="sr-only">Confirm</span>
                          </Button>
                        )}
                        {(booking.status === "pending" || booking.status === "confirmed") && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleUpdateBookingStatus(booking.id, "cancelled")}
                          >
                            <XCircle className="h-4 w-4 text-destructive" />
                            <span className="sr-only">Cancel</span>
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredBookings.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6">
                      No bookings found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}