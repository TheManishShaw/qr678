"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { countries, states, cities } from "@/lib/location-data";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { contactFormService } from "@/actions/post-request";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  type: z.enum(["Patient", "Doctor"], {
    required_error: "Please select a type",
  }),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  authorise: z
    .boolean()
    .refine((val) => val === true, "You must authorize contact"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      city: "",
      type: undefined,
      countryCode: "+91",
      phone: "",
      email: "",
      authorise: false,
    },
  });

  const watchCountry = form.watch("country");
  const watchState = form.watch("state");

  React.useEffect(() => {
    form.setValue("state", "");
    form.setValue("city", "");
  }, [watchCountry, form]);

  React.useEffect(() => {
    form.setValue("city", "");
  }, [watchState, form]);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await contactFormService(data);
      return response;
    },
    onSuccess: () => {
      toast.success(
        `Form submitted successfully! Team will contact you soon.!`
      );
      setIsSubmitting(false);
      form.reset();
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
      setIsSubmitting(false);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        `An error occurred while adding the Booking.`;

      toast.error(errorMessage);
      // onClose();
      setIsSubmitting(false);
    },
  });
  const onSubmit = (values) => {
    console.log("values", values);
    // setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", values.firstName);
    formData.append("email", values.email);
    formData.append("message", "nothing");

    const attributes = [
      { key: "firstName", value: values.firstName },
      { key: "lastName", value: values.lastName },
      { key: "country", value: values.country },
      { key: "countryCode", value: values.countryCode },
      { key: "state", value: values.state },
      { key: "city", value: values.city },
      { key: "areYouAa", value: values.type },
      { key: "phoneNo", value: values.phone },
      { key: "address", value: values.address },
      { key: "authorise", value: values.authorise },
    ].filter((attr) => attr.value != null && attr.value !== "");

    attributes.forEach((attr, index) => {
      formData.append(`attributes[${index}][key]`, attr.key);
      formData.append(`attributes[${index}][value]`, attr.value);
    });
    // Object.entries(values).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });
    mutation.mutate(formData);
    //
    console.log("formData", formData);
  };
  return (
    <Card className="w-full border border-secondary max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div id="contactForm" className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">
            Get in Touch with Us
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your first name"
                        className="border-0 focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your last name"
                        className="border-0 focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Country</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-0 focus:ring-0">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.id} value={country.id}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">State</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-0 border-0">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {watchCountry &&
                          states[watchCountry]?.map((state) => (
                            <SelectItem key={state.id} value={state.id}>
                              {state.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">City</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-0 border-0">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {watchState &&
                          cities[watchState]?.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                              {city.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Are you a</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-0 focus:ring-0">
                          <SelectValue placeholder="Select from dropdown" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Patient">Patient</SelectItem>
                        <SelectItem value="Doctor">Doctor</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <div className="w-24">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="border border-primary h-full flex items-center justify-center space-y-0 p-1 rounded-[8px]">
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-none focus:ring-0">
                              <SelectValue>
                                <div className="flex items-center gap-1">
                                  <span className="text-lg">🇮🇳</span>
                                  <span>+91</span>
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="+91">
                              <div className="flex items-center gap-0">
                                <span className="text-lg">🇮🇳</span>
                                <span>+91</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                        <FormLabel className="text-primary">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="9876543210"
                            className="border-0 focus-visible:ring-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email address"
                        type="email"
                        className="border-0 focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="authorise"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-primary rounded-[8px] text-primary"
                    />
                  </FormControl>
                  <div className="text-lg text-primary leading-none">
                    I authorise QR678 to contact me using the details shared
                    above.
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-primary hover:bg-[#2F2F7E] text-white px-12 py-6 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
