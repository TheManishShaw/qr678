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
      <Card className="w-[370px] h-[517px] overflow-hidden rounded-[32px]">
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
          <div className="relative w-full aspect-[3.3/5]">
            <Image
              src={`https://img.youtube.com/vi/Qav5CGFFllI/maxresdefault.jpg`}
              alt="Transformation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/60 transition-colors"
              >
                <Play className="w-8 h-8 text-gray-700/80 ml-1" />
              </button>
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
