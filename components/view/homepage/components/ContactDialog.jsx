"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group flex flex-col items-center"
          aria-label="Chat with us"
        >
          <Image
            src="/floating_chat.svg"
            alt=""
            width={32}
            height={32}
            className=""
          />
          <span className="mt-1 text-xs font-medium text-primary">Chat</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0">
        <DialogTitle className="hidden"></DialogTitle>
        <div className=" w-full flex p-2">
          {/* Left Section */}
          <div className="bg-primary text-white p-8 relative overflow-hidden rounded-l-lg w-2/5 ">
            <div className="relative z-10 flex flex-col space-y-8">
              <div>
                {" "}
                <h2 className="text-3xl font-bold mb-2">Quick Call</h2>
                <p className="text-gray-300 mb-12">
                  Write message to get a call back!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+1012 3456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-12 ">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />
          </div>

          {/* Right Section */}
          <div className="p-8 w-3/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 012 3456 789" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Subject?</Label>
                <RadioGroup
                  defaultValue="general1"
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center space-x-2 ">
                      <RadioGroupItem
                        value={`general${num}`}
                        id={`general${num}`}
                      />
                      <Label htmlFor={`general${num}`} className="text-[12px]">
                        General Inquiry
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message.."
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto md:px-8 bg-primary hover:bg-[#2a2366]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
