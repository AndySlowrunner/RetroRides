"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon, ChevronRight, Loader2 } from "lucide-react";

import { Car } from "@/types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  startDate: z.date({
    required_error: "A pickup date is required",
  }),
  endDate: z.date({
    required_error: "A return date is required",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number",
  }),
  notes: z.string().optional(),
}).refine((data) => data.endDate > data.startDate, {
  message: "Return date must be after pickup date",
  path: ["endDate"],
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  car: Car;
}

export function BookingForm({ car }: BookingFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [totalDays, setTotalDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(car.pricePerDay);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const watchStartDate = form.watch("startDate");
  const watchEndDate = form.watch("endDate");

  useEffect(() => {
    if (watchStartDate && watchEndDate) {
      const days = differenceInDays(watchEndDate, watchStartDate) + 1;
      setTotalDays(days > 0 ? days : 1);
      setTotalPrice(days > 0 ? days * car.pricePerDay : car.pricePerDay);
    }
  }, [watchStartDate, watchEndDate, car.pricePerDay]);

  const nextStep = async () => {
    if (step === 1) {
      const startDateResult = await form.trigger(["startDate", "endDate"]);
      if (startDateResult) {
        setStep(2);
      }
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const onSubmit = (values: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast.success("Your booking has been submitted!");
      router.push("/booking/success");
    }, 1500);
  };

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 ? (
            <>
              <div className="space-y-2 text-center">
                <h3 className="font-serif text-xl font-semibold">Select Dates</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your pickup and return dates
                </p>
              </div>

              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Pickup Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Return Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < watchStartDate || date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Daily Rate</span>
                    <span>${car.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Number of Days</span>
                    <span>{totalDays}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                    <span>Total Price</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </div>

              <Button
                type="button"
                className="w-full bg-chart-5 hover:bg-chart-5/90 text-white"
                onClick={nextStep}
              >
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2 text-center">
                <h3 className="font-serif text-xl font-semibold">Your Information</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your contact details to complete your booking
                </p>
              </div>

              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requests or information about your booking..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Vehicle</span>
                    <span className="text-right">{car.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Pickup Date</span>
                    <span>{format(watchStartDate, "PPP")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Return Date</span>
                    <span>{format(watchEndDate, "PPP")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration</span>
                    <span>{totalDays} days</span>
                  </div>
                  <div className="pt-2 border-t mt-2 flex justify-between font-bold">
                    <span>Total Price</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-1/3"
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-2/3 bg-chart-5 hover:bg-chart-5/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Booking"
                  )}
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}