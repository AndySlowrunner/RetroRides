import { cars, categories, brands } from "@/data/cars";
import { CarCard } from "@/components/car/car-card";
import { FilterSidebar } from "@/components/car/filter-sidebar";
export const dynamic = "force-dynamic";

interface CarsPageProps {
  searchParams: {
    brand?: string;
    category?: string;
    year?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

export default function CarsPage({ searchParams }: CarsPageProps) {
  // Filter cars based on search params
  const filteredCars = cars.filter((car) => {
    // Filter by brand
    if (searchParams.brand && car.brand.toLowerCase() !== searchParams.brand) {
      return false;
    }
    
    // Filter by category
    if (searchParams.category && car.category !== searchParams.category) {
      return false;
    }
    
    // Filter by year
    if (searchParams.year && car.year.toString() !== searchParams.year) {
      return false;
    }
    
    // Filter by price range
    if (
      searchParams.minPrice &&
      car.pricePerDay < parseInt(searchParams.minPrice)
    ) {
      return false;
    }
    
    if (
      searchParams.maxPrice &&
      car.pricePerDay > parseInt(searchParams.maxPrice)
    ) {
      return false;
    }
    
    return true;
  });

  // Get active filters for displaying
  const activeFilters = [];
  if (searchParams.brand) {
    const brand = brands.find((b) => b.id === searchParams.brand);
    if (brand) activeFilters.push(`Brand: ${brand.name}`);
  }
  if (searchParams.category) {
    const category = categories.find((c) => c.id === searchParams.category);
    if (category) activeFilters.push(`Category: ${category.name}`);
  }
  if (searchParams.year) {
    activeFilters.push(`Year: ${searchParams.year}`);
  }
  if (searchParams.minPrice || searchParams.maxPrice) {
    const min = searchParams.minPrice || "0";
    const max = searchParams.maxPrice || "∞";
    activeFilters.push(`Price: $${min} - $${max}/day`);
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl font-bold">Our Vintage Collection</h1>
        <p className="text-muted-foreground">
          {filteredCars.length} cars available
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        
        <div className="flex-1">
          {activeFilters.length > 0 && (
            <div className="mb-6 p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Active Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-card rounded-full border"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No cars found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}