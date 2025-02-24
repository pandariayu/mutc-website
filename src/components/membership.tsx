"use client";

export default function Membership() {
    return (
        <section className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column - Pricing */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <p className="text-[#E58E27] text-lg font-medium mb-2">Membership</p>
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">
                            2025
                            <br/>
                            Student Membership
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-5xl font-bold">$40</p>
                            <p className="text-gray-400">One Semester</p>
                        </div>
                        <button
                            className="w-full bg-[#518581] px-10 py-4 text-center text-white transition-colors hover:bg-[#416c68] sm:w-auto"
                            onClick={() => {
                                window.open('https://buy.stripe.com/test_7sI01xfon4Nn0OQ9AA', '_blank');
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-12">
                    <div className="space-y-2">
                        <h3 className="font-bold">Professional swim coaching</h3>
                        <p className="text-gray-400">
                            Tailored technique sessions with certified coaches to improve efficiency and speed across all skill
                            levels.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold">Exclusive running sessions</h3>
                        <p className="text-gray-400">
                            Weekly structured workouts across varied terrain to boost endurance, speed, and race-day confidence.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold">Structured bike training programs</h3>
                        <p className="text-gray-400">
                            Customized indoor/outdoor cycling plans focusing on power, cadence, supported by group rides
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

