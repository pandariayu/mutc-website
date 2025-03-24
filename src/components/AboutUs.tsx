"use client";

import Image from "next/image"
import {ArrowRight} from "lucide-react"

export default function Page() {
    const awards = [
        {
            title: "2XU Triathlon Series 2025 - Race 1 Elwood",
            achievement: "First Medal & 1st Place",
            details: "Ranking 1st place in the overall team relays out of 25 teams",
            date: "November, 2024",
            url: "https://www.multisportaustralia.com.au/races/2xu-triathlon-series-2425-race-1-elwood-2024/events/4/results/individuals/1459"
        },
        {
            title: "MelbUniSports Recognition",
            achievement: "Award of Excellence",
            details: "Outstanding achievement in innovation and inclusion",
            date: "December, 2024",
            url: "https://sport.unimelb.edu.au/news/melbourne-plus-recognises-students-volunteering-in-sport"
        },
        {
            title: "2XU Triathlon Series 2025 - Race 6 St Kilda",
            achievement: "1st Place in Mixed Relay",
            details: "Ranking 1st place in the mixed relays out of 13 teams",
            date: "March, 2025",
            url: "https://www.multisportaustralia.com.au/races/2xu-triathlon-series-2425-race-6-st-kilda-2025/events/4/results/individuals/2906"
        },
    ]
    return (
        <div className="min-h-screen bg-white text-black">
            <section id="about" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-10 sm:py-16">
                <h5 className="lg:mb-2 mb-1 text-secondary">About us</h5>
                <h2 className="lg:text-5xl font-semibold mb-8 max-w-2xl">Who Are We</h2>
                <p className="text-[#AFADB5]">
                    Founded in 2023, the Melbourne University Triathlon Club (MUTC) is established based on the core values of affordability, accessibility, and inclusivity. We mix training from the professional coach with relaxing social sessions to help members become better athletes and create meaningful connections. Whether it be training space, coaching, or support from fellow student athletes, the club community aims to provide students with everything they need for triathlon. We host 4-5 training sessions weekly on campus, and students participate in sessions based on interest and availability. Student athletes in the community hang out for regular training; we race in local competitions and host on-campus races to bring dynamics to students experiences. Join us to begin your triathlon journey!
                </p>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-5 grid gap-8 lg:grid-cols-3">
                <div>
                    <Image
                        src="/images/run.png"
                        alt="Local & Campus Race"
                        width={40}
                        height={40}
                        className="mb-4 h-12 lg:h-14 w-12 lg:w-14"
                    />
                    <h3 className="lg:text-3xl mb-4">Local & Campus Race</h3>
                    <p className="text-[#AFADB5]">
                        MUTC is known for hosting races on campus.There are also numerous local races for you to choose from. Time to add some medals to your collection.
                    </p>
                </div>

                <div>
                    <Image
                        src="/images/earth.png"
                        alt="Inclusive community"
                        width={40}
                        height={40}
                        className="mb-4 h-12 lg:h-14 w-12 lg:w-14"
                    />
                    <h3 className="lg:text-3xl mb-4">Inclusive community</h3>
                    <p className="text-[#AFADB5]">
                        Open to all students with zero barriers – enjoy peer support, cultural diversity and mentorship in a judgment-free environment.
                    </p>
                </div>

                <div>
                    <Image
                        src="/images/people.png"
                        alt="Professional Coaching"
                        width={40}
                        height={40}
                        className="mb-4 h-12 lg:h-14 w-12 lg:w-14"
                    />
                    <h3 className="lg:text-3xl mb-4">Professional Coaching</h3>
                    <p className="text-[#AFADB5]">
                        Chris from the Elite TriClub Momentum leads our swim and run. Student athletes will also quide you through the journey
                    </p>
                </div>
            </section>
            <div className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-8 sm:py-16">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <h2 className="lg:text-5xl tracking-tighter">Our Achievements</h2>
                </div>

                <div className="space-y-6">
                    {awards.map((award, index) => (
                        <div key={index} className="border-b border-muted pb-6 last:border-0">
                            <div className="grid gap-1">
                                <p className="text-[#AFADB5]">{award.date}</p>
                                <div className="sm:flex items-center justify-between">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="lg:text-3xl">{award.title}</h3>
                                        <p className="mb-4 text-lg font-semibold text-secondary">{award.achievement}</p>
                                        <p className="text-[#AFADB5]">{award.details}</p>
                                    </div>
                                    <button
                                        className="w-full sm:w-auto flex items-center lg:justify-center gap-2 bg-transparent sm:px-10 sm:py-4 lg:font-bold text-[#518581] transition-colors underline hover:text-[#416c68]"
                                        onClick={() => window.open(award.url, '_blank')}
                                    >
                                        Read more
                                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

