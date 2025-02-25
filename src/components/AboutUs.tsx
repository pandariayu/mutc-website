import Image from "next/image"

export default function Page() {
    const awards = [
        {
            title: "2XU Series 1 Elwood Triathlon",
            achievement: "First Medal & 1st Place",
            details: "Ranking 1st place in the overall team relays out of 25 teams",
            date: "November, 2024",
        },
        {
            title: "MelbUniSports Recognition",
            achievement: "Award of Excellence",
            details: "Outstanding achievement in innovation and inclusion",
            date: "December, 2024",
        },
    ]
    return (
        <div className="min-h-screen bg-white text-black">
            <section id="about" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
                <h5 className="mb-2 text-secondary">About us</h5>
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">Why MUTC?</h2>
                <p className="max-w-4xl text-lg text-[#AFADB5]">
                    Founded in 2023, the Melbourne University Triathlon Club is dedicated to cultivating a passion for triathlon
                    while fostering personal growth. We are <span className="text-secondary">beginner-friendly</span> and offer a
                    supportive environment where members can progress gradually in swimming, cycling, and running. For
                    intermediate athletes, we are supported by a <span className="text-secondary">professional triathlon coach</span> from a local sports club to bring in
                    the real triathlon experience and push your limits. With three weekly training sessions and a Mini-Triathlon
                    Race held on campus each semester, students have the perfect opportunity to experience, progress, and compete
                    in triathlon.
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
                    <h4 className="mb-4">Local & Campus Race</h4>
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
                    <h4 className="mb-4">Inclusive community</h4>
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
                    <h4 className="mb-4">Professional Coaching</h4>
                    <p className="text-[#AFADB5]">
                        Chris from the Elite TriClub Momentum leads our swim and run. Student athletes will also quide you through the journey
                    </p>
                </div>
            </section>
            <div className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <h2 className="text-4xl md:text-5xl tracking-tighter">Our Achievements</h2>
                </div>

                <div className="space-y-8">
                    {awards.map((award, index) => (
                        <div key={index} className="border-b border-muted pb-6 last:border-0">
                            <div className="grid gap-1">
                                <p className="text-[#AFADB5]">{award.date}</p>
                                <div className="flex items-baseline justify-between">
                                    <h4>{award.title}</h4>
                                </div>
                                <p className="text-lg font-semibold text-secondary">{award.achievement}</p>
                                <p className="text-[#AFADB5]">{award.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

