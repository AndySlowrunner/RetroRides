import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { cars, categories } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/car/car-card";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  // Featured cars - first 3 items
  const featuredCars = cars.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Cars Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                Featured Vehicles
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our hand-picked selection of iconic vintage cars, each representing the
                pinnacle of design and engineering of their era.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="mt-4 md:mt-0 text-chart-5 hover:text-chart-5/90 font-medium"
            >
              <Link href="/cars">
                View All Cars <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Find the perfect vintage car for your needs, from powerful muscle cars to
              elegant convertibles and timeless classics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/cars?category=${category.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={cars.find((car) => car.category === category.id)?.images[0] || ""}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/80 group-hover:text-white transition-colors">
                      Explore our {category.name.toLowerCase()} collection
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Renting a vintage car with RetroRides is simple and straightforward. 
              Follow these easy steps to get behind the wheel of your dream car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border bg-card hover:border-chart-5 transition-colors duration-300">
              <div className="w-12 h-12 bg-chart-5 text-white font-serif text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Browse & Select</h3>
              <p className="text-muted-foreground">
                Explore our extensive collection of vintage cars and choose the one that matches your style and needs.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border bg-card hover:border-chart-5 transition-colors duration-300">
              <div className="w-12 h-12 bg-chart-5 text-white font-serif text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Book Your Ride</h3>
              <p className="text-muted-foreground">
                Choose your rental dates, complete the booking form, and confirm your reservation with our simple booking process.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border bg-card hover:border-chart-5 transition-colors duration-300">
              <div className="w-12 h-12 bg-chart-5 text-white font-serif text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Enjoy the Drive</h3>
              <p className="text-muted-foreground">
                Pick up your car at our location, get a brief introduction to your vehicle, and hit the road in style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-chart-2 text-white">
        <div className="container max-w-4xl text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-8">
            What Our Customers Say
          </h2>
          <blockquote className="text-xl md:text-2xl font-serif italic mb-8">
            "Renting the '67 Mustang for our wedding day was the perfect choice. Not only did it look amazing in our photos, but the driving experience was unlike anything we'd ever experienced before. RetroRides made the whole process easy and memorable."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                alt="John & Sarah D."
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold">John & Sarah D.</p>
              <p className="text-sm opacity-80">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src="https://images.pexels.com/photos/4065181/pexels-photo-4065181.jpeg"
                alt="Vintage car on coastal road"
                layout="fill"
                objectFit="cover"
                className="filter brightness-[0.4]"
              />
            </div>
            <div className="relative z-10 px-6 py-24 sm:px-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Ready for a Nostalgic Drive?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                  Experience the thrill of driving a piece of automotive history. 
                  Book your vintage car rental today and create memories that will last a lifetime.
                </p>
                <div className="mt-10 flex justify-center">
                  <Button
                    asChild
                    className="bg-chart-5 hover:bg-chart-5/90 text-white px-8 py-6 text-lg"
                  >
                    <Link href="/cars">
                      Browse Our Collection
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}