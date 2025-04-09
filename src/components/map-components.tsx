"use client"

import { useState, useEffect } from "react"

interface MapProps {
    address: string
    height?: string
    width?: string
    zoom?: number
    className?: string
}

export default function Map({
                                address = "Rawlinson Track, Tin Alley, Parkville",
                                height = "300px",
                                width = "100%",
                                zoom = 16,
                                className = "",
                            }: MapProps) {
    const [mapUrl, setMapUrl] = useState("")

    useEffect(() => {
        // Create a URL-encoded address
        const encodedAddress = encodeURIComponent(address)
        // Create Google Maps URL
        const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=${zoom}`
        setMapUrl(url)
    }, [address, zoom])

    return (
        <div className={`w-full overflow-hidden ${className}`} style={{ height }}>
            {mapUrl && (
                <iframe
                    src={mapUrl}
                    width={width}
                    height={height}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${address}`}
                    className="h-full w-full"
                />
            )}
        </div>
    )
}
