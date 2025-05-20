import { Car } from "@/types";

export const cars: Car[] = [
  {
    id: "1",
    name: "1967 Ford Mustang GT Fastback",
    brand: "Ford",
    model: "Mustang GT Fastback",
    year: 1967,
    category: "muscle",
    pricePerDay: 199,
    description: "The iconic American muscle car that defined a generation. This beautifully restored 1967 Ford Mustang GT Fastback features a powerful V8 engine, manual transmission, and the classic fastback styling that made it a legend.",
    specifications: {
      engine: "V8 390 cu in (6.4 L)",
      horsepower: 320,
      transmission: "4-speed manual",
      topSpeed: "130 mph",
      acceleration: "0-60 mph in 6.2 seconds",
      seats: 4,
      color: "Highland Green",
    },
    images: [
      "https://images.pexels.com/photos/12066803/pexels-photo-12066803.jpeg",
      "https://images.pexels.com/photos/12066804/pexels-photo-12066804.jpeg",
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
    ],
    available: true,
  },
  {
    id: "2",
    name: "1957 Chevrolet Bel Air",
    brand: "Chevrolet",
    model: "Bel Air",
    year: 1957,
    category: "classic",
    pricePerDay: 179,
    description: "A stunning example of 1950s American automotive design. This 1957 Chevrolet Bel Air combines beautiful styling with the reliability of a modern restoration. Its two-tone paint scheme and chrome accents make it a true head-turner.",
    specifications: {
      engine: "V8 283 cu in (4.6 L)",
      horsepower: 220,
      transmission: "2-speed Powerglide automatic",
      topSpeed: "110 mph",
      acceleration: "0-60 mph in 9.5 seconds",
      seats: 6,
      color: "Tropical Turquoise/Ivory",
    },
    images: [
      "https://images.pexels.com/photos/9020081/pexels-photo-9020081.jpeg",
      "https://images.pexels.com/photos/9020082/pexels-photo-9020082.jpeg",
      "https://images.pexels.com/photos/2062211/pexels-photo-2062211.jpeg"
    ],
    available: true,
  },
  {
    id: "3",
    name: "1970 Dodge Challenger R/T",
    brand: "Dodge",
    model: "Challenger R/T",
    year: 1970,
    category: "muscle",
    pricePerDay: 189,
    description: "The pinnacle of Mopar muscle. This 1970 Dodge Challenger R/T represents the golden era of American performance cars with its aggressive styling and thunderous HEMI power.",
    specifications: {
      engine: "V8 426 HEMI cu in (7.0 L)",
      horsepower: 425,
      transmission: "4-speed manual",
      topSpeed: "135 mph",
      acceleration: "0-60 mph in 5.8 seconds",
      seats: 5,
      color: "Plum Crazy Purple",
    },
    images: [
      "https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg",
      "https://images.pexels.com/photos/5288810/pexels-photo-5288810.jpeg",
      "https://images.pexels.com/photos/8271410/pexels-photo-8271410.jpeg"
    ],
    available: true,
  },
  {
    id: "4",
    name: "1965 Mercedes-Benz 230SL Pagoda",
    brand: "Mercedes-Benz",
    model: "230SL Pagoda",
    year: 1965,
    category: "convertible",
    pricePerDay: 249,
    description: "European elegance personified. The 'Pagoda' SL is widely considered one of the most beautiful convertibles ever made, combining Mercedes-Benz engineering with timeless styling.",
    specifications: {
      engine: "Inline-6 2.3 L",
      horsepower: 150,
      transmission: "4-speed automatic",
      topSpeed: "120 mph",
      acceleration: "0-60 mph in 9.0 seconds",
      seats: 2,
      color: "Silver",
    },
    images: [
      "https://images.pexels.com/photos/4065181/pexels-photo-4065181.jpeg",
      "https://images.pexels.com/photos/175330/pexels-photo-175330.jpeg",
      "https://images.pexels.com/photos/5290468/pexels-photo-5290468.jpeg"
    ],
    available: true,
  },
  {
    id: "5",
    name: "1969 Chevrolet Camaro Z/28",
    brand: "Chevrolet",
    model: "Camaro Z/28",
    year: 1969,
    category: "muscle",
    pricePerDay: 189,
    description: "A true American icon. This first-generation Camaro Z/28 delivers raw performance and aggressive styling that continues to inspire modern muscle cars today.",
    specifications: {
      engine: "V8 302 cu in (5.0 L)",
      horsepower: 290,
      transmission: "4-speed manual",
      topSpeed: "130 mph",
      acceleration: "0-60 mph in 6.9 seconds",
      seats: 4,
      color: "Rally Green with white stripes",
    },
    images: [
      "https://images.pexels.com/photos/10549237/pexels-photo-10549237.jpeg",
      "https://images.pexels.com/photos/7605332/pexels-photo-7605332.jpeg",
      "https://images.pexels.com/photos/5372813/pexels-photo-5372813.jpeg"
    ],
    available: true,
  },
  {
    id: "6",
    name: "1963 Jaguar E-Type Roadster",
    brand: "Jaguar",
    model: "E-Type Roadster",
    year: 1963,
    category: "convertible",
    pricePerDay: 299,
    description: "Enzo Ferrari called it 'the most beautiful car ever made,' and this Series 1 E-Type Roadster lives up to that praise. Its flowing lines and impressive performance make it a true automotive legend.",
    specifications: {
      engine: "Inline-6 3.8 L",
      horsepower: 265,
      transmission: "4-speed manual",
      topSpeed: "150 mph",
      acceleration: "0-60 mph in 6.9 seconds",
      seats: 2,
      color: "British Racing Green",
    },
    images: [
      "https://images.pexels.com/photos/3062039/pexels-photo-3062039.jpeg",
      "https://images.pexels.com/photos/1446045/pexels-photo-1446045.jpeg",
      "https://images.pexels.com/photos/242200/pexels-photo-242200.jpeg"
    ],
    available: true,
  },
  {
    id: "7",
    name: "1959 Cadillac Eldorado Biarritz",
    brand: "Cadillac",
    model: "Eldorado Biarritz",
    year: 1959,
    category: "convertible",
    pricePerDay: 279,
    description: "The pinnacle of 1950s automotive excess. This 1959 Cadillac Eldorado Biarritz convertible features the most outrageous tailfins ever produced and represents the height of American post-war optimism and flamboyance.",
    specifications: {
      engine: "V8 390 cu in (6.4 L)",
      horsepower: 345,
      transmission: "4-speed Hydra-Matic automatic",
      topSpeed: "115 mph",
      acceleration: "0-60 mph in 10.2 seconds",
      seats: 6,
      color: "Shell Pink",
    },
    images: [
      "https://images.pexels.com/photos/712614/pexels-photo-712614.jpeg",
      "https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg",
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"
    ],
    available: true,
  },
  {
    id: "8",
    name: "1970 Porsche 911S",
    brand: "Porsche",
    model: "911S",
    year: 1970,
    category: "classic",
    pricePerDay: 259,
    description: "A perfect example of German engineering excellence. This early 911S represents the golden age of Porsche design with its pure lines and engaging driving experience.",
    specifications: {
      engine: "Flat-6 2.2 L",
      horsepower: 180,
      transmission: "5-speed manual",
      topSpeed: "140 mph",
      acceleration: "0-60 mph in 6.5 seconds",
      seats: 4,
      color: "Gulf Blue",
    },
    images: [
      "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
      "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg",
      "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg"
    ],
    available: true,
  },
  {
    id: "9",
    name: "1976 Rolls-Royce Silver Shadow",
    brand: "Rolls-Royce",
    model: "Silver Shadow",
    year: 1976,
    category: "luxury",
    pricePerDay: 319,
    description: "The epitome of British luxury. This Rolls-Royce Silver Shadow delivers an unmatched sense of occasion with its handcrafted interior, smooth V8 engine, and stately presence.",
    specifications: {
      engine: "V8 6.75 L",
      horsepower: 189,
      transmission: "3-speed automatic",
      topSpeed: "118 mph",
      acceleration: "0-60 mph in 10.9 seconds",
      seats: 5,
      color: "Willow Gold",
    },
    images: [
      "https://images.pexels.com/photos/3519206/pexels-photo-3519206.jpeg",
      "https://images.pexels.com/photos/3786125/pexels-photo-3786125.jpeg",
      "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg"
    ],
    available: true,
  },
  {
    id: "10",
    name: "1971 Alfa Romeo GTV 1750",
    brand: "Alfa Romeo",
    model: "GTV 1750",
    year: 1971,
    category: "classic",
    pricePerDay: 199,
    description: "Italian passion in automotive form. This Alfa Romeo GTV combines beautiful Bertone styling with the legendary Alfa twin-cam engine for an unforgettable driving experience.",
    specifications: {
      engine: "Inline-4 1.8 L",
      horsepower: 120,
      transmission: "5-speed manual",
      topSpeed: "120 mph",
      acceleration: "0-60 mph in 9.2 seconds",
      seats: 4,
      color: "Rosso Red",
    },
    images: [
      "https://images.pexels.com/photos/3459328/pexels-photo-3459328.jpeg",
      "https://images.pexels.com/photos/5349296/pexels-photo-5349296.jpeg",
      "https://images.pexels.com/photos/2384101/pexels-photo-2384101.jpeg"
    ],
    available: true,
  }
];

export const brands: { id: string; name: string }[] = [
  { id: "ford", name: "Ford" },
  { id: "chevrolet", name: "Chevrolet" },
  { id: "dodge", name: "Dodge" },
  { id: "mercedes-benz", name: "Mercedes-Benz" },
  { id: "jaguar", name: "Jaguar" },
  { id: "cadillac", name: "Cadillac" },
  { id: "porsche", name: "Porsche" },
  { id: "rolls-royce", name: "Rolls-Royce" },
  { id: "alfa-romeo", name: "Alfa Romeo" }
];

export const categories = [
  { id: "muscle", name: "Muscle" },
  { id: "convertible", name: "Convertible" },
  { id: "classic", name: "Classic" },
  { id: "luxury", name: "Luxury" }
];

export const years = Array.from(
  { length: 1989 - 1950 + 1 },
  (_, i) => 1950 + i
).sort((a, b) => b - a);