"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CarGalleryProps {
  images: string[];
  name: string;
}

export function CarGallery({ images, name }: CarGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full">
      <div className="relative aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full w-full"
          >
            <Image
              src={images[currentImage]}
              alt={`${name} - Image ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 text-foreground backdrop-blur hover:bg-background/70"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 text-foreground backdrop-blur hover:bg-background/70"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>

        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-1.5">
          {images.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 ${
                currentImage === index
                  ? "bg-chart-5"
                  : "bg-background/50 hover:bg-background/70"
              }`}
              onClick={() => goToImage(index)}
            >
              <span className="sr-only">Go to image {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative aspect-square overflow-hidden rounded-md ${
              currentImage === index
                ? "ring-2 ring-chart-5"
                : "ring-1 ring-border hover:ring-chart-5/50"
            }`}
          >
            <Image
              src={image}
              alt={`${name} - Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}