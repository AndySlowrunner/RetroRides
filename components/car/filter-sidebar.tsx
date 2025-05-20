"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Calendar, ChevronDown, Filter } from "lucide-react";

import { brands, categories, years } from "@/data/cars";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 350]);

  const [filters, setFilters] = useState({
    brand: searchParams.get("brand") || null,
    category: searchParams.get("category") || null,
    year: searchParams.get("year") || null,
    minPrice: searchParams.get("minPrice") || priceRange[0].toString(),
    maxPrice: searchParams.get("maxPrice") || priceRange[1].toString(),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleBrandChange = (value: string | null) => {
    setFilters((prev) => ({ ...prev, brand: value }));
    router.push(`${pathname}?${createQueryString("brand", value)}`);
  };

  const handleCategoryChange = (value: string | null) => {
    setFilters((prev) => ({ ...prev, category: value }));
    router.push(`${pathname}?${createQueryString("category", value)}`);
  };

  const handleYearChange = (value: string | null) => {
    setFilters((prev) => ({ ...prev, year: value }));
    router.push(`${pathname}?${createQueryString("year", value)}`);
  };

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    setFilters((prev) => ({
      ...prev,
      minPrice: value[0].toString(),
      maxPrice: value[1].toString(),
    }));

    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", value[0].toString());
    params.set("maxPrice", value[1].toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      brand: null,
      category: null,
      year: null,
      minPrice: "100",
      maxPrice: "350",
    });
    setPriceRange([100, 350]);
    router.push(pathname);
  };

  const filterContent = (
    <div className="flex flex-col space-y-6">
      <div className="space-y-3">
        <h3 className="font-serif text-lg font-medium">Brand</h3>
        <Select value={filters.brand || undefined} onValueChange={handleBrandChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Brands" />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.id}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-lg font-medium">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex items-center space-x-2"
            >
              <Checkbox 
                id={category.id} 
                checked={filters.category === category.id}
                onCheckedChange={(checked) => {
                  handleCategoryChange(checked ? category.id : null);
                }}
              />
              <Label 
                htmlFor={category.id}
                className="cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-lg font-medium">Year</h3>
        <Select value={filters.year || undefined} onValueChange={handleYearChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-lg font-medium">Daily Rate</h3>
        <div className="pt-4 px-2">
          {mounted && (
            <Slider
              value={priceRange}
              min={100}
              max={350}
              step={10}
              onValueChange={handlePriceChange}
              className="mt-2"
            />
          )}
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        onClick={handleReset}
        className="mt-4 w-full"
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <div className="hidden md:block w-full max-w-[250px] sticky top-20 h-fit">
        <div className="p-4 border rounded-lg bg-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold">Filters</h2>
            <Button 
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-8 text-xs"
            >
              Reset
            </Button>
          </div>
          {filterContent}
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <div className="md:hidden w-full mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filter Cars
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh]">
            <SheetHeader>
              <SheetTitle className="font-serif">Car Filters</SheetTitle>
              <SheetDescription>
                Customize your search to find the perfect vintage car
              </SheetDescription>
            </SheetHeader>
            <div className="py-6">
              {filterContent}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}