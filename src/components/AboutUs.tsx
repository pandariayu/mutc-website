export default function Page() {
    return (
        <div className="min-h-screen bg-white text-black">
            <section id="about" className="container mx-auto px-8 lg:px-16 py-16">
                <h3 className="mb-6 text-secondary">About us</h3>
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-16 max-w-2xl">Why MUTC?</h2>
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
        </div>
    )
}

