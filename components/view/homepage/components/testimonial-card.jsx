"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function TestimonialCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <Card className="w-[370px] h-[517px] overflow-hidden rounded-[32px] bg-[#F3F0FF]">
        <CardContent className="p-0 relative">
          {/* Logo */}
          <div className="absolute top-4 right-4 z-10">
            <Image
              src="/assets/svg/logo/logo.svg"
              alt="QR 678 Logo"
              width={80}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Main Image (Fetched from YouTube Thumbnail) */}
          <div className="relative w-full aspect-[3.4/5]">
            <Image
              src={`https://img.youtube.com/vi/Qav5CGFFllI/maxresdefault.jpg`}
              alt="Transformation"
              fill
              className="object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </button>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/svg/productpage/abhinav_jain_after.svg"
                  alt="Before"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/svg/productpage/abhinav_jain_before.svg"
                  alt="After"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-white rounded-3xl p-2">
              <p className="text-center text-[#1e3a8a] text-lg">
                <span className="font-medium">Sumana</span> achieved this result
                in just <span className="text-[#B17F4A]">10 sessions</span>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent className="h-[85vh] p-0">
          <div className=" w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Qav5CGFFllI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
