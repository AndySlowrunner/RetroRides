import Link from "next/link";
import Image from "next/image";

import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
          alt="Vintage car"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
          <div className="max-w-md text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Welcome Back to RetroRides
            </h1>
            <p className="text-lg opacity-90">
              Sign in to access your bookings, manage your account, and continue your
              journey through automotive history.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-background flex items-center justify-center p-6 md:p-12">
        <AuthForm type="login" />
      </div>
    </div>
  );
}