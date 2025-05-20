"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/12066803/pexels-photo-12066803.jpeg",
    alt: "Classic Ford Mustang",
  },
  {
    src: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
    alt: "Vintage Porsche 911",
  },
  {
    src: "https://images.pexels.com/photos/9020081/pexels-photo-9020081.jpeg",
    alt: "Classic Chevrolet Bel Air",
  },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[75vh] min-h-[500px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Drive a Piece <br className="hidden sm:inline" />
            <span className="text-chart-5">of History</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/90">
            Experience the golden era of automobiles with our premium vintage car
            rental service. Find your perfect retro ride today.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button
              asChild
              className="bg-chart-5 hover:bg-chart-5/90 text-white px-8 py-6 text-lg"
            >
              <Link href="/cars">
                Browse Collection <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-chart-5"
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}