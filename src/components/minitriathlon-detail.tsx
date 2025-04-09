"use client"

import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    DollarSign,
    Shirt,
    Droplets,
    LifeBuoy,
    Footprints,
} from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import Map from "./map-components"
import PhotoCarousel from "./photo-carousel"

export default function TriathlonEventDetailPage() {
    const racePhotos = [
        {
            src: "/images/minitri1.png?height=600&width=1200&text=Triathlon+Swimming",
            alt: "Participants during the swimming leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri2.png?height=600&width=1200&text=Triathlon+Cycling",
            alt: "Participants during the cycling leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri1.png?height=600&width=1200&text=Triathlon+Running",
            alt: "Participants during the running leg of last year's mini-triathlon",
        },
        {
            src: "/images/minitri1.png?height=600&width=1200&text=Triathlon+Finish+Line",
            alt: "Participants crossing the finish line at last year's mini-triathlon",
        },
        {
            src: "/images/minitri1.png?height=600&width=1200&text=Triathlon+Awards",
            alt: "Award ceremony from last year's mini-triathlon",
        },
    ]

    return (
        <main className="pt-16 pb-8 bg-white">
            {/* Hero Section */}
            <div className="relative h-64 w-full sm:h-80 md:h-96">
                <Image
                    src="/images/minitri1.png?height=600&width=1200"
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
                            <span>Date TBC</span>
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

                <div className="grid gap-8 md:grid-cols-3">


                    {/* Main Content */}
                    <div className="md:col-span-2">
                        <div className="mb-8">
                            <h2 className="mb-4 font-bold">Event Details</h2>
                            <p className="text-gray-600">
                                Join us for MUTC Mini-triathlon Race! This on-campus event is perfect for both first-timers and
                                experienced triathletes looking for a fun, supportive environment to test their skills. Complete the Race, and the top 3 timed in each distance win Medals (Male race & Female race)
                            </p>
                        </div>





                        <div className="mb-8">
                            {/*<h3 className="mb-4 font-bold">Why Participate?</h3>*/}
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Safe environment to do your first Triathlon race</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Ride on stationary bike, you only need to bring swim gear and running gear</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Just challenging enough for you to complete</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Free & Amazing food and beverages (This is where most of the registration fee goes)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Supportive environment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4d8076]">✓</span>
                                    <span>Professional photos to capture your moment</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="mb-4 font-bold">Race Format</h3>
                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                <div className="border-l-4 border-[#4d8076] bg-gray-50 p-4 pl-5">
                                    <h4 className="mb-2 text-lg font-bold">Mini Distance</h4>
                                    <div className="mb-2">

                                        <ul className="ml-5 mt-1 list-disc text-gray-600">
                                            <li>200-meter swim (4 come backs)</li>
                                            <li>3km cycling on stationary bike</li>
                                            <li>2km run (5 loops)</li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-[#4d8076]" />
                                        <span className="font-medium">Begins at 1:15 pm</span>
                                    </div>
                                </div>

                                <div className="border-l-4 border-[#4d8076] bg-gray-50 p-4 pl-5">
                                    <h4 className="mb-2 text-lg font-bold">Sprint Distance</h4>
                                    <div className="mb-2">

                                        <ul className="ml-5 mt-1 list-disc text-gray-600">
                                            <li>400-meter swim (8 come backs)</li>
                                            <li>5km cycling on stationary bike</li>
                                            <li>4km run (10 loops)</li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-[#4d8076]" />
                                        <span className="font-medium">Begins at 2:45 pm</span>
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

                        <div className="mb-8">
                            <PhotoCarousel photos={racePhotos} className="mb-2" autoPlayInterval={4000} initialAutoPlay={true} />
                            {/*<p className="text-right text-sm text-gray-500">Swipe or use arrows to navigate photos</p>*/}
                        </div>

                        {/*<div className="grid gap-6 sm:grid-cols-2">*/}
                        {/*    <div className="bg-gray-50 p-4">*/}
                        {/*        <h3 className="mb-2 text-lg font-bold">Spectators</h3>*/}
                        {/*        <p className="text-gray-600">Please bring friends to support you</p>*/}
                        {/*    </div>*/}

                        {/*    <div className="bg-gray-50 p-4">*/}
                        {/*        <h3 className="mb-2 text-lg font-bold">Parking</h3>*/}
                        {/*        <p className="text-gray-600">Near Uni Campus (recommend arrive 20 minutes prior to the race)</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="mb-6 bg-gray-50 p-6">

                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                    <div>
                                        <div className="font-bold">Date</div>
                                        <div className="text-gray-600">TBC</div>
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
                                    <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                                    <div>
                                        <div className="font-bold">Registration Fee</div>
                                        <div className="text-gray-600">Mini Distance: $10</div>
                                        <div className="text-gray-600">Sprint Distance: $12</div>
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
                                            View Larger Map
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <Map address="Rawlinson Track, University of Melbourne, Parkville VIC" height="200px" />
                            </div>

                            <div className="mt-6 flex flex-col gap-3">
                                <button className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]"
                                        onClick={() => {
                                            window.open('https://buy.stripe.com/8wMbKUdZr45cdIk4gi', '_blank');
                                        }}>
                                    Register for Mini Distance
                                </button>

                                <button className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]"
                                        onClick={() => {
                                            window.open('https://buy.stripe.com/00gbKU3kN59g5bO8wz', '_blank');
                                        }}>
                                    Register for Sprint Distance
                                </button>

                                <button className="w-full border border-[#4d8076] p-3 text-center font-medium text-[#4d8076] hover:bg-gray-100">
                                    Add to calendar
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 bg-gray-50 p-6">
                            <h3 className="mb-4 text-xl font-bold">Registration Now Open</h3>
                            <p className="mb-4 text-gray-600">
                                Limited spots available! Register now to secure your place in this exciting event.
                            </p>
                            <div className="flex items-center justify-center border-t border-gray-200 pt-4">
                                <div className="text-center justify-center">
                                    <div className="text-sm text-gray-500">Mini Distance</div>
                                    <div className="font-bold">30 spots</div>
                                </div>
                                <div className="text-center ml-8 justify-center">
                                    <div className="text-sm text-gray-500">Sprint Distance</div>
                                    <div className="font-bold">40 spots</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6">
                            <h3 className="mb-4 text-xl font-bold">Event Photos</h3>
                            <p className="mb-4 text-gray-600">
                                Event photos link will appear here after the event. Stay tuned!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
