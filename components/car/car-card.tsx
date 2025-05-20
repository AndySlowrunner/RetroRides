"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";

import { Car } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CarCardProps {
  car: Car;
  index: number;
  className?: string;
}

export function CarCard({ car, index, className }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={className}
    >
      <Card className="h-full overflow-hidden border border-border/50 bg-card hover:border-chart-5/50 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={car.images[0]}
            alt={car.name}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-chart-5 hover:bg-chart-5/90 text-white">
              {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="font-serif text-xs text-muted-foreground">{car.brand}</p>
            <p className="text-xs font-medium">{car.year}</p>
          </div>
          <h3 className="font-serif text-lg font-medium mt-1 line-clamp-1">
            {car.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
            {car.description.substring(0, 100)}...
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center text-muted-foreground text-xs">
              <Tag className="h-4 w-4 mr-1" />
              <span>{car.specifications.engine}</span>
            </div>
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{car.specifications.seats} seats</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0 border-t border-border/50 mt-auto">
          <div>
            <p className="text-sm text-muted-foreground">Daily Rate</p>
            <p className="font-serif text-xl font-semibold">${car.pricePerDay}</p>
          </div>
          <Button asChild className="bg-chart-2 text-white hover:bg-chart-2/90">
            <Link href={`/cars/${car.id}`}>
              View Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}