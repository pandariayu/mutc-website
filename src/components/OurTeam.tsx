import Image from "next/image"
export default function TeamSection() {
  return (
    <div className="bg-white">
      <section id="team" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
        {/* Header */}
        <h5 className="lg:mb-2 mb-1 text-secondary">Our Team</h5>
        <h2 className="lg:text-5xl font-semibold mb-8 max-w-2xl">
          Meet our strong team
        </h2>

        {/* Team Members */}
        <div className="space-y-10">
          {/* First Team Member */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/4">
              <Image
                  src="/images/Leo.jpg"
                  alt="Club president Sihong Wu"
                  width={400}
                  height={300}
                  className="w-full h-[250px] sm:h-[300px] object-cover"
              />
            </div>
            <div className="w-full lg:w-3/4 flex flex-col justify-center">
              <p className="text-primary text-lg mb-2">Founder & President</p>
              <h3 className="lg:text-3xl font-semibold mb-4">Sihong Wu</h3>
              <p className="text-lg text-[#AFADB5] leading-relaxed">
                Sihong(Leo) is an amateur triathlete and, professionally, a Marketer. In 2023, he founded the Melbourne
                University Triathlon Club (MUTC) with friends to create a supportive and professional environment for
                triathlon training. When he first arrived in Melbourne, he had difficulty finding an affordable and
                accessible triathlon community for young adults like him. Recognizing this gap,
                MUTC was established with the core values of affordability, accessibility, and inclusivity.
                He envisions a community where every member becomes a better triathlete while
                building meaningful connections along the way.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/4">
              <Image
                  src="/images/Chris.png"
                  alt="Training coordinator Chris"
                  width={400}
                  height={300}
                  className="w-full h-[250px] sm:h-[300px] object-cover"
              />
            </div>
            <div className="w-full lg:w-3/4 flex flex-col justify-center">
              <p className="text-primary text-lg mb-2">Training coordinator</p>
              <h3 className="lg:text-3xl font-semibold mb-4">Chris White</h3>
              <p className="text-[#AFADB5] leading-relaxed">
                Chris, a triathlon coach and co-founder of Momentum Triathlon Academy, merges sports and health advocacy in his work.  He coaches athletes of all ages, with his adult athletes taking on challenges such as marathons, ultramarathons and Ironman triathlons.  His work with young athletes focuses on getting them active and keeping them active during adolescence, as well as creating a pathway to performance triathlon.  He has raised $20,000+ for public health charities through endurance challenges like his 17-marathon initiative. Chris is passionate about partnerships that can help his athletes excel and has previously held Senior Management roles and board positions in health services in Australia, UK and Belgium. Chris combines his coaching with public health leadership and his own love for being active.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

