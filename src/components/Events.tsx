"use client";
import Image from "next/image"
import Link from "next/link";

export default function TriathlonEvent() {
    return (
        <div id="events" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
            {/* Header Section */}
            <div className="mb-8">
                <h5 className="lg:mb-2 mb-1 text-secondary">Events</h5>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <h2 className="lg:text-4xl font-semibold  max-w-2xl">
                        Our in-school
                        <br />
                        Mini-Triathlon race
                    </h2>
                    <div className="text-left lg:text-right flex flex-col justify-center lg:pt-6">
                        <p className="text-3xl lg:text-4xl font-bold">10th May</p>
                        <p className="text-gray-400">Rawlinson Track</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:flex lg:gap-6">
                <div className="lg:w-1/2 space-y-6 flex flex-col gap-2">
                    <p className="text-gray-400 text-lg">
                        Participants will swim in the pool, transition to the stationary bike outdoors, and run on the Rawlinson
                        Track to complete!
                    </p>

                    <div className="space-y-2">
                        <p className="text-secondary">25S1 race registration now open, Secure your spot NOW!</p>
                    </div>

                    <Link className="w-full sm:w-auto bg-[#518581] sm:px-10 sm:py-4 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-[#416c68]"
                            href="/events/mini-triathlon">View detail</Link>

                    {/* Rectangle image for desktop, hidden on mobile */}
                    <div className="hidden md:block relative h-[200px] w-full mt-6">
                        <Image
                            src="/images/minitri2.png"
                            alt="Group photo of triathlon participants"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col">
                    {/* Square image for desktop, full height */}
                    <div className="relative h-[250px] sm:h-[300px] lg:flex-grow w-full">
                        <Image
                            src="/images/minitri1.png"
                            alt="Group photo of triathlon participants"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Rectangle image for mobile, hidden on desktop */}
                    <div className="relative h-[250px] sm:h-[300px] w-full mt-4 md:hidden">
                        <Image
                            src="/images/minitri2.png"
                            alt="Group photo of triathlon participants"
                            fill
                            className="w-full h-[250px] sm:h-[300px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

