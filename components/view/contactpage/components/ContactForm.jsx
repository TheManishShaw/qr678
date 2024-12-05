"use client"

import * as React from "react"
import { Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form"

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      state: "",
      city: "",
      country: "",
      type: "",
      phone: "",
      email: "",
      authorise: false,
    },
  })

  function onSubmit(data) {
    console.log(data)
    alert(data)
  }

  return (
    <Card className="w-full border border-secondary max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#B08D57]">
            Lorem Ipsum Dolor Sit Amet,
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B08D57]">
            Consectetur Adipiscing Elit
          </h2>
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
                        placeholder="your first name" 
                        className="border-0 focus-visible:ring-0 " 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="border focus:ring-0 focus:outline-none focus:border-0 border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your last name" 
                        className="border-0 focus-visible:ring-0 " 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-0 border-0">
                          <SelectValue placeholder="select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="state1">State 1</SelectItem>
                        <SelectItem value="state2">State 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className=" border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">City</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className=" focus:ring-0 border-0   ">
                          <SelectValue placeholder="select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="city1">City 1</SelectItem>
                        <SelectItem value="city2">City 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-0 focus:ring-0">
                          <SelectValue placeholder="select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="border border-primary space-y-0 p-2 rounded-[8px]">
                    <FormLabel className="text-primary">Are you a</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-0 focus:ring-0">
                          <SelectValue placeholder="select from dropdown" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <div className="w-24">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="border border-primary h-full flex items-center justify-center space-y-0 p-2 rounded-[8px]">
                        <FormLabel className="text-primary"></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue="+91">
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
                              <div className="flex items-center gap-1">
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
                        <FormLabel className="text-primary">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="9876543210" 
                            className="border-0 focus-visible:ring-0" 
                            {...field} 
                          />
                        </FormControl>
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
                    <FormLabel className="text-primary">Email address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="enter email address" 
                        type="email" 
                        className="border-0 focus-visible:ring-0" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="authorise"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0  p-2 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-primary rounded-[8px] text-primary"
                    />
                  </FormControl>
                  <div className="text-lg text-primary leading-none">
                    I authorise QR678 to contact me using the details shared above.
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-[#2F2F7E] text-white px-12 py-6 rounded-md"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

