import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* About Section */}
            <section className="container mx-auto px-8 lg:px-16 py-16">
                <h3 className="mb-6 text-secondary">About us</h3>
                <h2 className="mb-8">Why MUTC?</h2>
                <p className="max-w-4xl text-lg text-[#AFADB5]">
                    Founded in 2023, the Melbourne University Triathlon Club is dedicated to cultivating a passion for triathlon
                    while fostering personal growth. We are <span className="text-secondary">beginner-friendly</span> and offer a
                    supportive environment where members can progress gradually in swimming, cycling, and running. For
                    intermediate athletes, we are supported by a professional triathlon coach from a local sports club to bring in
                    the real triathlon experience and push your limits. With three weekly training sessions and a Mini-Triathlon
                    Race held on campus each semester, students have the perfect opportunity to experience, progress, and compete
                    in triathlon.
                </p>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-8 lg:px-16 py-16 grid gap-8 lg:grid-cols-3">
                <div>
                    <h2 className="mb-4 text-primary">01</h2>
                    <h3 className="mb-4">All-inclusive Community</h3>
                    <p className="text-[#AFADB5]">
                        Open to all students with zero barriers – enjoy peer support, cultural diversity and mentorship in a
                        judgment-free environment.
                    </p>
                </div>

                <div>
                    <h2 className="mb-4 text-primary">02</h2>
                    <h3 className="mb-4">Progressive Coaching</h3>
                    <p className="text-[#AFADB5]">
                        From beginner-friendly tutorials to pro-guided intermediate plans, advance at your pace with structured
                        swim/bike/run skill development.
                    </p>
                </div>

                <div>
                    <h2 className="mb-4 text-primary">03</h2>
                    <h3 className="mb-4">Fun events around campus</h3>
                    <p className="text-[#AFADB5]">
                        Join 3 weekly tailored sessions + semesterly Mini-Tri races on campus – affordable, low-pressure
                        opportunities to build fitness and race experience.
                    </p>
                </div>
            </section>
            <section className="container relative mx-auto px-4 py-16">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/news.webp"
                        alt="Triathlon event"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Navigation Buttons */}
                    <Button
                        className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-black/50 text-white hover:bg-black/70"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-black/50 text-white hover:bg-black/70"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>

                    {/* Award Card */}
                    <Card className="absolute bottom-8 left-8 max-w-md bg-white/95">
                        <CardHeader>
                            <CardTitle className="text-sm text-gray-500">Our Awards</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="mb-2 text-xl font-bold text-black">
                                MUTC has clinched its first medal at the 2XU Series 1 Elwood triathlon
                            </h3>
                            <p className="mb-2 text-sm text-gray-600">Ranking 1st place in the overall team relays out of 25 teams</p>
                            <p className="text-xs text-gray-400">24th Nov 2024</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

