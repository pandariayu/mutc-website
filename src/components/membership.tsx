"use client";
import { useState, useEffect } from "react"
import confetti from 'canvas-confetti'

export default function Membership() {
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

    return (
        <section id="membership" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] sm:py-16">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column - Pricing */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h5 className="lg:mb-2 mb-1 text-secondary">Membership</h5>
                        <h2 className="lg:text-4xl font-semibold mb-8 max-w-2xl">
                            2025 Semester 1
                            <br/>
                            MUTC Membership
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2" hidden={isPurchased}>
                            <div className="font-bold">
                                <p className="text-gray-400">Unimelb student price</p>
                                <p className="text-3xl lg:text-4xl font-bold">$40</p>
                            </div>
                        </div>
                        <div className="space-y-4" hidden={!isPurchased}>
                            <div className="bg-[#F9F9F9] md:bg-white flex flex-col gap-2 md:p-0 p-4">
                                <p className="text-2xl lg:text-3xl font-bold text-primary">Thanks for becoming our member!</p>
                                <p className="text-gray-400">
                                    We appreciate your support and commitment. We will make the club better with your contribution.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2" hidden={isPurchased}>
                            <button
                                className="w-full sm:w-auto bg-[#518581] sm:px-10 sm:py-4 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-[#416c68]"
                                hidden={isPurchased}
                                onClick={() => {
                                    window.open('https://buy.stripe.com/7sI8yI2gJfNU47K7ss', '_blank');
                                }}
                            >
                                Buy Now
                            </button>
                            <button
                                className="w-full sm:w-auto text-primary underline px-5 py-4 text-center transition-colors hover:text-foreground-accent"
                                hidden={isPurchased}
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
                        <h3 className="lg:text-2xl font-bold">Access to All Trainings</h3>
                        <p className="text-gray-400">
                            Open participation in swim/run sessions with flexible scheduling. Build your fitness routine without restrictions.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="lg:text-2xl font-bold">Supportive Community & Mentorship</h3>
                        <p className="text-gray-400">
                            Connect with inclusive peers and student athletes in non-competitive environments.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="lg:text-2xl font-bold">Injury Protection Guarantee</h3>
                        <p className="text-gray-400">
                            All registered members receive free injury coverage* via the University of Melbourne sports insurance program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
