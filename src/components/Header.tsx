import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Header() {
    return (
        <header className="relative w-full">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center h-24 relative">
                        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
                            <Image src="/images/logo.png" alt="Triathlon MUTC Logo" width={120} height={120} className="h-90 w-90" />
                        </Link>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <div className="flex items-center space-x-12">
                                <Link href="/about" className="text-teal-600 hover:text-teal-700">
                                    About us
                                </Link>
                                <Link href="/team" className="text-gray-800 hover:text-gray-900">
                                    Our team
                                </Link>
                                <Link href="/training" className="text-gray-800 hover:text-gray-900">
                                    Training
                                </Link>
                                <Link href="/events" className="text-gray-800 hover:text-gray-900">
                                    Events
                                </Link>
                                <Link href="/membership" className="text-gray-800 hover:text-gray-900">
                                    Membership
                                </Link>
                                <Link href="/contact" className="text-gray-800 hover:text-gray-900">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-screen min-h-[600px] w-full">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(0deg, #151411 -21.38%, rgba(21, 20, 17, 0.00) 66.65%), url(https://otkpdstimtuwgqtr.public.blob.vercel-storage.com/carousel/carousel1-IKLKKeN2JhN5OH3oEBSlxgCYiPiLlG.webp) lightgray 50% / cover no-repeat`
                    }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white pb-40">
                    {/* Carousel Controls */}
                    <button className="absolute left-4 -translate-y-12 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button className="absolute right-4 -translate-y-12 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                    <h2 className="pl-[calc(8.333333333333334%+1.5rem)] mb-8">
                        Melbourne University Triathlon Club
                    </h2>
                    <h3 className="max-w-4xl pl-[calc(8.333333333333334%+1.5rem)] opacity-80">
                        Swim, Bike, Run - Embrace the brilliant lifestyle of Triathlon with the friendliest club at Melbourne Uni
                    </h3>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </header>
    )
}

