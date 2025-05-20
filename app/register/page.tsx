import Link from "next/link";
import Image from "next/image";

import { AuthForm } from "@/components/auth/auth-form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" 
          alt="Vintage car"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
          <div className="max-w-md text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Join the RetroRides Family
            </h1>
            <p className="text-lg opacity-90">
              Create an account to start exploring our vintage car collection, book your dream ride, and unlock exclusive member benefits.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-background flex items-center justify-center p-6 md:p-12">
        <AuthForm type="register" />
      </div>
    </div>
  );
}