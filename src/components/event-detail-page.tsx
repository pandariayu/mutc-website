"use client"

import { ArrowLeft, Calendar, Clock, MapPin, Timer, Ruler, Hourglass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 w-full min-h-[400px] sm:h-80 md:h-96">
        <Image
          src="/images/IntRun.png?height=600&width=1200"
          alt="Track running session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-[calc(8.333333333333334%+1.5rem)] pb-16 sm:pb-28">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="h-5 w-5" />
            <span>Wednesday, 12 Mar</span>
          </div>
          <h1 className="mt-2 font-bold text-white">Interval Training</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="#training" className="flex items-center gap-2 text-[#4d8076] hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all training sessions</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Session Details</h2>
              <p className="text-gray-600">
                Join us for an intensive interval training session designed to improve your speed, endurance, and VO₂
                max. This workout is suitable for intermediate to advanced runners looking to enhance their performance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-bold">Workout Structure</h3>
              <div className="grid gap-4 border-l-4 border-[#4d8076] pl-4">
                <div className="flex items-start gap-2">
                  <Ruler className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <span className="font-bold">Distance:</span> 800m x 5 sets
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Timer className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <span className="font-bold">Target pace:</span> 4:20–4:30/km
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Hourglass className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <span className="font-bold">Rest:</span> 90 seconds between reps
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-bold">Why 800m Intervals?</h3>
              <p className="mb-4 text-gray-600">
                This distance is ideal for improving VO₂ max—your body ability to use oxygen efficiently during
                intense effort. By repeating 800m at a challenging but controlled pace, you stimulate aerobic and
                anaerobic systems together.
              </p>

              <h4 className="mb-2 font-bold">It trains you to:</h4>
              <ul className="mb-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">✓</span>
                  <span>Run faster for longer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">✓</span>
                  <span>Recover better between hard efforts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">✓</span>
                  <span>Improve race-day pacing and mental grit</span>
                </li>
              </ul>

              <p className="text-gray-600">Perfect for runners targeting 5K–10K races or building strong base speed!</p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-bold">What to Bring</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">•</span>
                  <span>Running shoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">•</span>
                  <span>Water bottle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">•</span>
                  <span>Comfortable running attire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4d8076]">•</span>
                  <span>Watch or timing device (optional)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="mb-6 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Session Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <div className="font-bold">Date</div>
                    <div className="text-gray-600">Wednesday, 12 Mar</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <div className="font-bold">Time</div>
                    <div className="text-gray-600">Start: 7:30 PM</div>
                    <div className="text-gray-600">End: 8:15 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4d8076]" />
                  <div>
                    <div className="font-bold">Location</div>
                    <div className="text-gray-600">Rawlinson Track</div>
                    <a
                      href="https://maps.app.goo.gl/5xmuZzo2ECMsPPW7A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#4d8076] hover:underline"
                    >
                      View on map
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]">
                  Add to Calendar
                </button>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Coordinators</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200">
                  <Image
                    src="/images/people/LuoYu.png?height=48&width=48"
                    alt="Coordinator Lan"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Lan</div>
                  <div className="text-sm text-gray-600">Running Coach</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200">
                  <Image
                    src="/images/people/Balthazar.png?height=48&width=48"
                    alt="Coordinator Balthazar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Balthazar</div>
                  <div className="text-sm text-gray-600">Assistant Coach</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Stay Connected</h3>
              <p className="mb-4 text-gray-600">
                <button onClick={() => window.open("https://chat.whatsapp.com/FSzyNQHKYKb09zT3CLqz01", '_blank')} className="underline">
                  <span>Join our WhatsApp group</span>
                </button> to receive updates about this and other training sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

