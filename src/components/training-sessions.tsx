import { EventCard } from "./event-card"


export default function TrainingSessions() {
  const events = [
    {
      image:
        "/images/SocialRun.png",
      title: "Saturday Social Run",
      level: "Beginner level",
      location: "Rawlinson Track",
      time: "Saturday: 9:00 - 9:45 am",
      content: "Parkville Easy Social Run at you pace, free coffee will be provided",
      weekday: 6,
    },
    {
      image: "/images/Swim.png",
      title: "Monday/Thursday Swim",
      level: "All level",
      location: "Beaureparies Center Swimming pool",
      time: "Monday session: 2:00 pm - 3:30 pm",
      time2: "Thursday session: 11:00 am - 12:30 pm",
      content: "Train with Coach Chris",
      weekday: [1,4],
    },
    {
      image: "/images/IntRun.png",
      title: "Wednesday Interval Running",
      level: "Intermediate level",
      location: "Rawlinson Track",
      time: "Wednesday 7:30 pm - 8:15 pm ",
      content: "Train with coordinator Lan and Balthazar",
      weekday: 3,
    },
    {
      image: "/images/Bike&Run.jpg",
      title: "Friday Indoor Bike/Run",
      level: "All level",
      location: "Rawlinson Track",
      time: "Friday 3:00pm -4:00pm ",
      content: "Bike with music then Run, Two Running pace (5:15 min/km & 6:00 min/km)",
      weekday: 5,
    }
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
          {/* Right Column - Other Sessions */}
          <div className="space-y-6">
            {/* Swim Sessions Card */}
            <div className="aspect-[16/9]">
              <EventCard {...events[0]} />
            </div>

            {/* Interval Running Card */}
            <div className="aspect-[16/9]">
              <EventCard {...events[3]} />
            </div>
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

