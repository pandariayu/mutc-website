"use client"
import confetti from 'canvas-confetti'

import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    Shirt,
    Droplets,
    LifeBuoy,
    Footprints,
    Waves,
    Bike,
    Users
} from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import Map from "./map-components"
import PhotoCarousel from "./photo-carousel"
import {useEffect, useState} from "react";

export default function TriathlonEventDetailPage() {
    const [isPurchased, setIsPurchased] = useState(false)

    // Check if membership was purchased (simulating checking from localStorage or cookies)
    useEffect(() => {
        // Check URL parameters for payment success
        const urlParams = new URLSearchParams(window.location.search)
        const paymentStatus = urlParams.get('payment_status')

        if (paymentStatus === 'success') {
            setIsPurchased(true)
            handleScroll('membership')
            const colors = ['#518581', '#416c68', '#ffffff']

            ;(function frame() {
                confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                })
                confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                })
            })()
        }
    }, [])

    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const racePhotos = [
        {
            src: "/images/minitri/minitri1.jpg?height=600&width=1200&text=Triathlon+Swimming",
            alt: "Participants during the swimming leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri/minitri2.jpg?height=600&width=1200&text=Triathlon+Cycling",
            alt: "Participants during the cycling leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri/minitri7.jpg?height=600&width=1200&text=Triathlon+Running",
            alt: "Participants during the running leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri/minitri4.jpg?height=600&width=1200&text=Triathlon+Finish+Line",
            alt: "Participants crossing the finish line at last year's mini-triathlon",
        },
        {
            src: "/images/minitri/minitri5.jpg?height=600&width=1200&text=Triathlon+Awards",
            alt: "Award ceremony from last year's mini-triathlon",
        },
        {
            src: "/images/minitri/minitri6.jpg?height=600&width=1200&text=Triathlon+Awards",
            alt: "Award ceremony from last year's mini-triathlon",
        },
    ]

    return (
        <main className="pt-16 pb-8 bg-white">
            {/* Hero Section */}
            <div className="relative h-64 w-full sm:h-80 md:h-96">
                <Image
                    src="/images/minitri/minitri3.jpg?height=600&width=1200"
                    alt="Mini-triathlon Race"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

                <div className="absolute inset-0 flex flex-col justify-end items-center">
                    <div className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] pb-6 sm:pb-8">
                        <div className="flex  gap-2 text-white">
                            <Calendar className="h-5 w-5" />
                            <span>10th May</span>
                        </div>
                        <h1 className="mt-2 font-bold text-white">Mini-triathlon Race</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-8 sm:py-16">
                <div className="mb-8">
                    <Link href="/#events" className="flex items-center gap-2 text-[#4d8076] hover:underline">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to all events</span>
                    </Link>
                </div>
                <div className="order-2 mb-6 bg-gray-50 p-6 md:order-none bg-primary" hidden={!isPurchased}>
                    <h3 className="mb-4 font-bold text-white">Thanks for your registration</h3>
                    <p className="mb-4 text-white">
                        Please read the race day preparation carefully prior the race. Keeps an eye on our whatsapp group for any updates.
                    </p>
                </div>

                {/* Main content grid with reordering for mobile */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Event Information Block - Will appear first on mobile */}
                    <div className="md:col-span-1">
                        {/* Event Information Block - First in the sidebar group */}
                        <div className="order-first mb-6 bg-gray-50 p-6 md:order-none">
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                <div>
                                    <div className="font-bold">Date</div>
                                    <div className="text-gray-600">May 10th</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                <div>
                                    <div className="font-bold">Time</div>
                                    <div className="text-gray-600">1:00 pm – 5:00 pm</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                <div>
                                    <div className="font-bold">Location</div>
                                    <div className="text-gray-600">On-Campus. Rawlinson Track (Tin Alley, Parkville)</div>
                                    <a
                                        href="https://maps.google.com/?q=Rawlinson+Track,+University+of+Melbourne,+Parkville+VIC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-[#4d8076] hover:underline"
                                    >
                                        View on map
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 hidden md:block">
                            <Map address="Rawlinson Track, University of Melbourne, Parkville VIC" height="200px" />
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <button className="w-full border border-[#4d8076] p-3 text-center font-medium text-[#4d8076] hover:bg-gray-100">
                                Add to calendar
                            </button>
                        </div>
                    </div>
                        {/* Registration Closing Soon - Second in the sidebar group */}
                        <div className="order-2 mb-6 bg-gray-50 p-6 md:order-none">
                            <h3 className="mb-4 text-xl font-bold">Registration Just Opened</h3>
                            <p className="mb-4 text-gray-600">
                                Limited spots available! Register now to secure your place in this exciting event.
                            </p>
                        </div>

                    </div>

                    {/* Main Content - Will appear after the sidebar group on mobile */}
                    <div className="order-4 md:order-none md:col-span-2">
                        <div className="mb-8">
                            <h2 className="mb-4 font-bold">Event Details</h2>
                            <p className="text-gray-600">
                                Join us for MUTC Mini-triathlon Race! This on-campus event is perfect for both first-timers and
                                experienced triathletes looking for a fun, supportive environment to test their skills. Complete the Race, and the top 3 timed in each distance win Medals (Male race & Female race)
                            </p>
                        </div>


                        <div className="mb-8">
                            <PhotoCarousel photos={racePhotos} className="mb-2" autoPlayInterval={4000} initialAutoPlay={true} />
                            {/*<p className="text-right text-sm text-gray-500">Swipe or use arrows to navigate photos</p>*/}
                        </div>


                        <div className="mb-8">
                            {/*<h3 className="mb-4 font-bold">Why Participate?</h3>*/}
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Safe environment to do your first Triathlon race</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Ride on stationary bike, you only need to bring swim gear and running gear</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Just challenging enough for you to complete</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Free & Amazing food and beverages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Supportive environment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary">✓</span>
                                    <span>Professional photos to capture your moment</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="mb-4 font-bold">Race Formats</h3>
                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                {/* Mini Distance Card */}
                                <div className="overflow-hidden bg-gray-50">
                                    {/* Header */}
                                    <div className="bg-[#4d8076] p-4 text-white">
                                        <h4 className="text-xl font-bold">Mini Distance</h4>
                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="font-medium">$10 Registration Fee</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <div className="mb-4 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Waves className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Swim</div>
                                                    <div className="text-gray-600">200-meter (4 come backs)</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Bike className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Bike</div>
                                                    <div className="text-gray-600">3km on stationary bike</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Footprints className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Run</div>
                                                    <div className="text-gray-600">2km run (5 loops)</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex items-center gap-3">
                                            <Clock className="h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                            <div>
                                                <div className="font-medium">Start Time</div>
                                                <div className="text-gray-600">1:15 pm</div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex items-center gap-3">
                                            <Users className="h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                            <div>
                                                <div className="font-medium">Capacity</div>
                                                <div className="text-gray-600">30 spots available</div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]"
                                                    onClick={() => {
                                                        window.open('https://buy.stripe.com/8wMbKUdZr45cdIk4gi', '_blank');
                                                    }}>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sprint Distance Card */}
                                <div className="overflow-hidden bg-gray-50">
                                    {/* Header */}
                                    <div className="bg-[#4d8076] p-4 text-white">
                                        <h4 className="text-xl font-bold">Sprint Distance</h4>
                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="font-medium">$12 Registration Fee</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <div className="mb-4 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Waves className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Swim</div>
                                                    <div className="text-gray-600">400-meter (8 come backs)</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Bike className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Bike</div>
                                                    <div className="text-gray-600">5km on stationary bike</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Footprints className="mt-1 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                                <div>
                                                    <div className="font-medium">Run</div>
                                                    <div className="text-gray-600">4km run (10 loops)</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex items-center gap-3">
                                            <Clock className="h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                            <div>
                                                <div className="font-medium">Start Time</div>
                                                <div className="text-gray-600">2:45 pm</div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex items-center gap-3">
                                            <Users className="h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                            <div>
                                                <div className="font-medium">Capacity</div>
                                                <div className="text-gray-600">40 spots available</div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]"
                                                    onClick={() => {
                                                        window.open('https://buy.stripe.com/00gbKU3kN59g5bO8wz', '_blank');
                                                    }}>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                {/*            <div className="mb-4 flex items-center gap-2">*/}
                {/*                <Award className="h-5 w-5 text-[#4d8076]" />*/}
                {/*                <span className="font-medium">*/}
                {/*  Complete the Race, and the top 3 timed in each distance win Medals (Male race & Female race)*/}
                {/*</span>*/}
                {/*            </div>*/}

                {/*            <div className="flex items-center gap-2">*/}
                {/*                <Users className="h-5 w-5 text-[#4d8076]" />*/}
                {/*                <span className="font-medium">Maximum sign ups: 30 spots for Mini Race, 40 spots for the Sprint</span>*/}
                {/*            </div>*/}
                        </div>

                        {/*<div className="mb-8">*/}
                        {/*    <h3 className="mb-4 font-bold">Location</h3>*/}
                        {/*    <p className="mb-4 text-gray-600">*/}
                        {/*        The event will take place at Rawlinson Track, located on Tin Alley, Parkville. The track is easily*/}
                        {/*        accessible from the University of Melbourne campus. Park near Uni Campus (recommend arrive 20 minutes prior to the race)*/}
                        {/*    </p>*/}
                        {/*    <Map address="Rawlinson Track, University of Melbourne, Parkville VIC" height="400px" className="mb-4" />*/}
                        {/*</div>*/}

                        <div className="mb-8">
                            <h3 className="mb-4 font-bold">Race day steps</h3>
                            <div className="relative">
                                {/* Vertical line */}
                                <div className="absolute left-[39px] top-0 h-full w-[2px] bg-gray-200"></div>

                                <div className="space-y-8">
                                    {/* Step 1 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">1</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Rolling Start</h4>
                                            <p className="text-gray-600">
                                                The race begins with a rolling start format, allowing participants to begin in a staggered
                                                manner.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">2</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Registration Check-in</h4>
                                            <p className="text-gray-600">
                                                Begin your race at the registration desk when your number is called.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">3</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Swimming Leg</h4>
                                            <p className="text-gray-600">
                                                In your swimwear, enter the pool for the swim portion of the race.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">4</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Transition</h4>
                                            <p className="text-gray-600">
                                                Off the pool, transition at your bag, dry, put on shoes and running outfit.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">5</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Cycling Leg</h4>
                                            <p className="text-gray-600">Head to stationary bike to complete the cycling distance.</p>
                                        </div>
                                    </div>

                                    {/* Step 6 */}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                            <span className="text-2xl font-bold text-white">6</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="mb-1 text-lg font-bold">Running Leg</h4>
                                            <p className="text-gray-600">Finish the bike then head to Rawlinson Track for the final run.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="mb-4 font-bold">What to Bring</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-4 bg-gray-50 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                        <Footprints className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Running Shoes</h4>
                                        <p className="text-sm text-gray-600">For the spinning bike and the run</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-gray-50 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                        <LifeBuoy className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Swim Gear</h4>
                                        <p className="text-sm text-gray-600">Swimming goggles, swimwear, swim cap (Optional)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-gray-50 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                        <Shirt className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Running Wear</h4>
                                        <p className="text-sm text-gray-600">To put on when finishing the swim</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-gray-50 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                        <Droplets className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Towel</h4>
                                        <p className="text-sm text-gray-600">To dry yourself after swimming</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-gray-50 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#4d8076]">
                                        <Shirt className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Replacing Clothes</h4>
                                        <p className="text-sm text-gray-600">Clean clothes to change into after the race</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}
