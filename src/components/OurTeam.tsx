import Image from "next/image"
export default function TeamSection() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-8 lg:px-16 py-16">
        <div className="max-w-6xl">
          {/* Header */}
          <h3 className="text-[#E58E27] text-lg font-medium mb-4">Our Team</h3>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-16 max-w-2xl">
            Meet our leading and strong team
          </h2>

          {/* Team Members */}
          <div className="space-y-24">
            {/* First Team Member */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/images/leo.webp"
                  alt="Club president Sihong Wu"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-primary text-lg mb-2">President</p>
                <h3 className="text-3xl font-semibold mb-4">Sihong Wu</h3>
                <p className="text-lg text-[#AFADB5] leading-relaxed">
                  Chris, a triathlon coach and founder of GoRun Australia, merges sports and health advocacy in his work,
                  coaching athletes from 5km beginners to 100km ultramarathoners and Ironman competitors. Over a decade,
                  he raised $20,000+ for chronic disease charities through endurance challenges like his 17-marathon
                  initiative. Passionate about mentoring motivated, humorous athletes, he also holds senior health
                  management roles and board positions in Australia/Europe. A Mizuno ambassador and Runners World
                  columnist, Chris combines elite coaching with public health leadership.
                </p>
              </div>
            </div>

            {/* Second Team Member */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:justify-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/images/chris.webp"
                  alt="Training coordinator Chris"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-primary text-lg mb-2">Coach</p>
                <h3 className="text-3xl font-semibold mb-4">Chris White</h3>
                <p className="text-lg text-[#AFADB5] leading-relaxed">
                  Chris, a triathlon coach and founder of GoRun Australia, merges sports and health advocacy in his work,
                  coaching athletes from 5km beginners to 100km ultramarathoners and Ironman competitors. Over a decade,
                  he raised $20,000+ for chronic disease charities through endurance challenges like his 17-marathon
                  initiative. Passionate about mentoring motivated, humorous athletes, he also holds senior health
                  management roles and board positions in Australia/Europe. A Mizuno ambassador and Runners World
                  columnist, Chris combines elite coaching with public health leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

