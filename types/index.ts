export type Car = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: 'muscle' | 'convertible' | 'classic' | 'luxury';
  pricePerDay: number;
  description: string;
  specifications: {
    engine: string;
    horsepower: number;
    transmission: string;
    topSpeed: string;
    acceleration: string;
    seats: number;
    color: string;
  };
  images: string[];
  available: boolean;
};

export type Booking = {
  id: string;
  carId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalPrice: number;
  createdAt: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

export type Brand = {
  id: string;
  name: string;
};

export type Filter = {
  brand?: string;
  category?: string;
  year?: number;
  minPrice?: number;
  maxPrice?: number;
};