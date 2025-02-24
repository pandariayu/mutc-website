import Image from "next/image"

export default function TriathlonEvent() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8">
                <h5 className="mb-2 text-secondary">Events</h5>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">
                        Our in-school
                        <br />
                        Mini-triathlon race
                    </h2>
                    <div className="text-left md:text-right">
                        <h2 className="text-3xl md:text-4xl font-bold">14/4/2025</h2>
                        <p className="text-gray-400">Rawlinson Track</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="md:flex md:gap-6">
                <div className="md:w-1/2 space-y-6">
                    <p className="text-gray-400 text-lg">
                        Participants will swim in the pool, transition to the stationary bike outdoors, and run on the Rawlinson
                        Track to complete!
                    </p>

                    <div className="space-y-2">
                        <p className="text-secondary">Two distances for you to choose from:</p>
                        <p className="text-gray-400">Mini: 200m swim, 4km bike, 2km run</p>
                        <p className="text-gray-400">Sprint: 400m swim, 8km bike, 4km run</p>
                    </div>

                    <button className="w-full bg-[#518581] px-10 py-4 text-center font-bold text-white transition-colors hover:bg-[#416c68] sm:w-auto">Learn More</button>

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

                <div className="mt-4 md:mt-0 md:w-1/2 md:flex md:flex-col">
                    {/* Square image for desktop, full height */}
                    <div className="relative h-[300px] md:flex-grow w-full">
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

