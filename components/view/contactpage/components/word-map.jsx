"use client";

import { useEffect, useRef } from "react";

export function WorldMap({ pageType }) {
  const mapRef = useRef(null);

  return (
    <div ref={mapRef} className="relative md:h-[600px] h-[180px] w-full">
      <div
        className={`absolute inset-0 ${
          pageType !== "contactPage"
            ? "bg-[url('/assets/svg/contact/Container.svg')]"
            : "bg-[url('/assets/svg/contact/world-map.svg')]"
        } bg-contain bg-center bg-no-repeat opacity-100`}
      />
      {/* Add map markers/points here homePage */}
    </div>
  );
}
