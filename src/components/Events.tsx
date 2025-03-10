"use client";
import Image from "next/image"

export default function TriathlonEvent() {
    return (
        <div id="events" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
            {/* Header Section */}
            <div className="mb-8">
                <h5 className="mb-2 text-secondary">Events</h5>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <h2 className="text-4xl lg:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">
                        Our in-school
                        <br />
                        Mini-Duathlon race
                    </h2>
                    {/*<div className="text-left lg:text-right flex flex-col justify-center lg:pt-6">*/}
                    {/*    <h2 className="text-4xl lg:text-5xl font-bold">14/4/2025</h2>*/}
                    {/*    <p className="text-gray-400">Rawlinson Track</p>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:flex lg:gap-6">
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-gray-400 text-lg">
                        Participants will swim in the pool, transition to the stationary bike outdoors, and run on the Rawlinson
                        Track to complete!
                    </p>

                    <div className="space-y-2">
                        <p className="text-secondary">More detail TBC</p>
                    </div>

                    <button className="w-full bg-[#518581] px-10 py-4 text-center font-bold text-white transition-colors hover:bg-[#416c68] sm:w-auto"
                            onClick={() => {
                                window.open('https://www.instagram.com/p/C_-EnLPTssl/?igsh=ODczdTJrNDlsY2tn', '_blank');
                            }}>See our previous events</button>

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
                    <div className="relative h-[300px] lg:flex-grow w-full">
                        <Image
                            src="/images/minitri1.png"
                            alt="Group photo of triathlon participants"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Rectangle image for mobile, hidden on desktop */}
                    <div className="relative h-[300px] w-full mt-4 md:hidden">
                        <Image
                            src="/images/minitri2.png"
                            alt="Group photo of triathlon participants"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

