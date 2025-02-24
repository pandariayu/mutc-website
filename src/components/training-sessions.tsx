import { EventCard } from "./event-card"

export default function TrainingSessions() {
  const events = [
    {
      image:
        "/images/SocialRun.png",
      title: "Social Run session",
      level: "Beginner level",
      location: "Beaureparies Center Swimming pool",
      time: "10:30AM",
      content: "Parkville Easy Social Run at you pace",
      date: "15 March",
    },
    {
      image: "/images/Swim.png",
      title: "Swim sessions",
      level: "Intermediate level",
      location: "Beaureparies Center Swimming pool",
      time: "10:30AM - 11:15AM (45min)",
      content: "Open water technique",
      date: "13 March",
    },
    {
      image: "/images/IntRun.png",
      title: "Interval Running Sessions",
      level: "Intermediate level",
      location: "Rawlinson Track",
      time: "10:30AM",
      content: "Parkville Easy Social Run at you pace",
      date: "19 March",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section id="training" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] py-16">
        <h5 className="mb-2 text-secondary">Training</h5>
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl">
          Our training sessions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Social Run */}
          <div className="aspect-[16/9] lg:aspect-auto lg:h-full">
            <EventCard {...events[0]} />
          </div>

          {/* Right Column - Other Sessions */}
          <div className="space-y-6">
            {/* Swim Sessions Card */}
            <div className="aspect-[16/9]">
              <EventCard {...events[1]} />
            </div>

            {/* Interval Running Card */}
            <div className="aspect-[16/9]">
              <EventCard {...events[2]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

