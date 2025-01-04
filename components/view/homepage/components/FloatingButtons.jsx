"use client";

import { Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactDialog from "./ContactDialog";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bg-primary rounded-tl-3xl rounded-bl-3xl border-primary border-[1px] border-r-0 right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col ">
      {/* Call Button */}
      <div className="bg-primary  p-4 rounded-tl-3xl">
        <Link href="tel:0987654321">
        <button
          className="group flex flex-col items-center"
          aria-label="Call us"
          
        >
          <Image
            src="/floating_call.svg"
            alt=""
            width={32}
            height={32}
            className=""
          />
          <span className="mt-1 text-xs font-medium text-white">Call</span>
        </button></Link>
      </div>

      {/* Chat Button */}
      <div className="bg-white p-4 rounded-bl-3xl ">
        {" "}

            <ContactDialog/>
         
      </div>
    </div>
  );
}
