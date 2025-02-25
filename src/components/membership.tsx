"use client";

export default function Membership() {
    return (
        <section id="membership" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column - Pricing */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h5 className="mb-2 text-secondary">Membership</h5>
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">
                            2025 Semester 1
                            <br/>
                            MUTC Membership
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="font-bold">
                                <span>Unimelb student price</span>
                                <p className="text-5xl font-bold">$40</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button
                                className="w-full sm:w-auto bg-[#518581] px-10 py-4 text-center font-bold text-white transition-colors hover:bg-[#416c68]"
                                onClick={() => {
                                    window.open('https://buy.stripe.com/7sI8yI2gJfNU47K7ss', '_blank');
                                }}
                            >
                                Buy Now
                            </button>
                            <button
                                className="w-full sm:w-auto text-primary underline px-5 py-4 text-center hover:text-foreground-accent"
                                onClick={() => {
                                    window.open('https://buy.stripe.com/aEUbKUaNf45c5bOcMN', '_blank');
                                }}
                            >
                                Non Unimelb Student
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-12">
                    <div className="space-y-2">
                        <h4 className="lg:text-3xl font-bold">Professional swim coaching</h4>
                        <p className="text-gray-400">
                            Tailored technique sessions with certified coaches to improve efficiency and speed across all skill
                            levels.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="lg:text-3xl font-bold">Exclusive running sessions</h4>
                        <p className="text-gray-400">
                            Weekly structured workouts across varied terrain to boost endurance, speed, and race-day confidence.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="lg:text-3xl font-bold">Structured bike training programs</h4>
                        <p className="text-gray-400">
                            Customized indoor/outdoor cycling plans focusing on power, cadence, supported by group rides
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
