"use client";
import TrainingSessionCard from "./training-session-card"

export default function TrainingSessionsGrid() {
  const sessions = [
    {
      image: "/images/Swim.png",
      title: "Monday/Thursday Swim",
      level: "All level",
      location: "Beaureparies Center Swimming pool",
      time: "Monday: 2:00 pm - 3:30 pm",
      time2: "Thursday: 11:00 am - 12:30 pm",
      content: "Train with Coach Chris",
      weekday: [1,4] as [number, number],
    },
    {
      image: "/images/IntRun.png",
      title: "Wednesday Interval Running",
      level: "Intermediate level",
      location: "Rawlinson Track",
      time: "7:30 pm - 8:15 pm ",
      time2: "",
      content: "Train with coordinator Lan and Balthazar",
      weekday: 3,
    },
    {
      image: "/images/Bike&Run.jpg",
      title: "Friday Indoor Bike&Run",
      level: "All level",
      location: "Rawlinson Track",
      time: "3:00 pm - 4:00 pm ",
      time2: "",
      content: "Bike then Run, Two Running paces (5:15 min/km & 6:00 min/km)",
      weekday: 5,
    },
    {
      image:
          "/images/SocialRun.png",
      title: "Saturday Social Run",
      level: "Beginner level",
      location: "Rawlinson Track",
      time: "9:00 - 9:45 am",
      time2: "",
      content: "Parkville Easy Social Run at you pace, free coffee will be provided",
      weekday: 6,
    },
  ]

  return (
    <section className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] sm:py-16">

      <div className="py-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h5 className="mb-2 text-secondary">Training</h5>
          <h2 className="lg:text-5xl font-semibold mb-8">
            Our training sessions
          </h2>
        </div>
        <div className="lg:max-w-[50%] lg:px-6">
          <p className="text-gray-400 flex flex-col justify-center">Wanna get real-time updates about training sessions, last-minute changes, and connect with other members?</p>
          <button className="mt-2 text-primary underline text-center transition-colors hover:text-foreground-accent"
                  onClick={() => {
                    window.open('https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01', '_blank');
                  }}>Join our Whatsapp group</button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {sessions.map((session, index) => (
            <TrainingSessionCard key={index} {...session} />
        ))}
      </div>
    </section>
  )
}

