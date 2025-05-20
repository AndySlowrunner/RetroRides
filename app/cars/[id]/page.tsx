import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Gauge, Info, Settings, Users } from "lucide-react";

import { cars } from "@/data/cars";
import { CarGallery } from "@/components/car/car-gallery";
import { CarCard } from "@/components/car/car-card";
import { BookingForm } from "@/components/booking/booking-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = cars.find((car) => car.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-2 mb-6">
        <Link 
          href="/cars" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all cars
        </Link>
        <h1 className="font-serif text-3xl font-bold">{car.name}</h1>
        <div className="flex items-center space-x-4">
          <Badge className="bg-chart-5 hover:bg-chart-5/90 text-white">
            {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
          </Badge>
          <span className="text-muted-foreground">Year: {car.year}</span>
          <span className="text-muted-foreground">Brand: {car.brand}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CarGallery images={car.images} name={car.name} />

          <Tabs defaultValue="description">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-4 border rounded-lg mt-4">
              <h3 className="font-serif text-xl font-semibold mb-4">About This Vehicle</h3>
              <p className="text-muted-foreground">{car.description}</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col space-y-1 p-3 border rounded-md bg-muted/30">
                  <span className="text-xs text-muted-foreground">Engine</span>
                  <span className="font-medium">{car.specifications.engine}</span>
                </div>
                <div className="flex flex-col space-y-1 p-3 border rounded-md bg-muted/30">
                  <span className="text-xs text-muted-foreground">Transmission</span>
                  <span className="font-medium">{car.specifications.transmission}</span>
                </div>
                <div className="flex flex-col space-y-1 p-3 border rounded-md bg-muted/30">
                  <span className="text-xs text-muted-foreground">Horsepower</span>
                  <span className="font-medium">{car.specifications.horsepower} hp</span>
                </div>
                <div className="flex flex-col space-y-1 p-3 border rounded-md bg-muted/30">
                  <span className="text-xs text-muted-foreground">Top Speed</span>
                  <span className="font-medium">{car.specifications.topSpeed}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="p-4 border rounded-lg mt-4">
              <h3 className="font-serif text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Engine</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.engine}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Horsepower</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.horsepower} hp</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Transmission</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.transmission}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Top Speed</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.topSpeed}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Acceleration</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.acceleration}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Seats</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.seats}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Color</span>
                    <span className="w-1/2 text-muted-foreground">{car.specifications.color}</span>
                  </div>
                  <div className="flex border-b pb-2">
                    <span className="w-1/2 font-medium">Year</span>
                    <span className="w-1/2 text-muted-foreground">{car.year}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="p-4 border rounded-lg mt-4">
              <h3 className="font-serif text-xl font-semibold mb-4">Features & Equipment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-chart-5" />
                  <span>Fully Restored</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-chart-5" />
                  <span>Original Gauges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-chart-5" />
                  <span>Historic Vehicle Registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-chart-5" />
                  <span>{car.specifications.seats} Leather Seats</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-chart-5" />
                  <span>Documented Service History</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-chart-5" />
                  <span>Period Correct Details</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-6 bg-card">
            <div className="flex flex-col space-y-3">
              <h2 className="font-serif text-2xl font-semibold">Rental Rates</h2>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Daily Rate</span>
                <span className="font-serif text-2xl font-bold">${car.pricePerDay}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Plus applicable taxes and fees. Security deposit required.
              </p>
              <div className="mt-4">
                <Button
                  asChild
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-white"
                >
                  <a href="#booking-form">Book Now</a>
                </Button>
              </div>
            </div>
          </div>

          <div id="booking-form">
            <h2 className="font-serif text-2xl font-semibold mb-4">Book This Car</h2>
            <BookingForm car={car} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-2xl font-semibold mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars
            .filter(
              (relatedCar) =>
                relatedCar.id !== car.id &&
                (relatedCar.category === car.category ||
                  relatedCar.brand === car.brand)
            )
            .slice(0, 3)
            .map((relatedCar, index) => (
              <CarCard key={relatedCar.id} car={relatedCar} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}