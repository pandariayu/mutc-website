"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface PhotoCarouselProps {
    photos: {
        src: string
        alt: string
    }[]
    className?: string
    autoPlayInterval?: number
    initialAutoPlay?: boolean
}

export default function PhotoCarousel({
                                          photos,
                                          className = "",
                                          autoPlayInterval = 5000,
                                          initialAutoPlay = true,
                                      }: PhotoCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(initialAutoPlay)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }, [currentIndex, photos.length])

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === photos.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }, [currentIndex, photos.length])

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlaying((prev) => !prev)
    }

    // Set up auto-play
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(goToNext, autoPlayInterval)
        } else if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
        }

        // Clean up on unmount or when dependencies change
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying, goToNext, autoPlayInterval])

    // Pause auto-play when user interacts with carousel
    const handleUserInteraction = () => {
        if (isAutoPlaying && autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
            autoPlayRef.current = setInterval(goToNext, autoPlayInterval)
        }
    }

    return (
        <div className={`relative w-full ${className}`}>
            <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
                <Image
                    src={photos[currentIndex].src || "/placeholder.svg"}
                    alt={photos[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Navigation Arrows */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white/80 p-2 hover:bg-white"
                onClick={() => {
                    goToPrevious()
                    handleUserInteraction()
                }}
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </div>
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white/80 p-2 hover:bg-white"
                onClick={() => {
                    goToNext()
                    handleUserInteraction()
                }}
            >
                <ChevronRight className="h-6 w-6 text-gray-800" />
            </div>

            {/* Auto-play Toggle */}
            <div className="absolute right-0 top-0 cursor-pointer bg-white/80 p-2 hover:bg-white" onClick={toggleAutoPlay}>
                {isAutoPlaying ? <Pause className="h-5 w-5 text-gray-800" /> : <Play className="h-5 w-5 text-gray-800" />}
            </div>

            {/* Dots/Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
                {photos.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => {
                            goToSlide(slideIndex)
                            handleUserInteraction()
                        }}
                        className={`h-2 w-8 cursor-pointer ${slideIndex === currentIndex ? "bg-[#4d8076]" : "bg-white/70"}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}
