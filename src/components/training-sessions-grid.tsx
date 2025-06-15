"use client";
import TrainingSessionCard from "./training-session-card"
import { sessions } from '@/data/trainingSessions';

export default function TrainingSessionsGrid() {
  return (
    <section id="training" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] sm:py-10">

      <div className="py-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h5 className="lg:mb-2 mb-1 text-secondary">Training</h5>
          <h2 className="lg:text-4xl font-semibold mb-8">
            Our training sessions
          </h2>
        </div>
        <div className="lg:max-w-[50%] lg:px-6">
          <p className="text-gray-400 flex flex-col justify-center">Wanna get real-time updates about training sessions, last-minute changes, and connect with other members?</p>
          <button className="mt-2 text-primary underline text-center transition-colors hover:text-foreground-accent"
                  onClick={() => {
                    window.open('https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01', '_blank');
                  }}>Join our WhatsApp group</button>
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

