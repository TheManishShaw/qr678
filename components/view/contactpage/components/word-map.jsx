"use client"

import { useEffect, useRef } from "react"

export function WorldMap() {
  const mapRef = useRef(null)

  useEffect(() => { 
    // Here you would initialize your map
    // You could use libraries like Leaflet or Google Maps
    // For now we'll just show a placeholder    
  }, [])

  return (
    <div ref={mapRef} className="relative md:h-[600px] h-[180px] w-full">
      <div className="absolute inset-0 bg-[url('/assets/svg/contact/world-map.svg')] bg-contain bg-center bg-no-repeat opacity-100" />
      {/* Add map markers/points here */}
    </div>
  )
}
