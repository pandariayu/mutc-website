"use client";
import {ArrowRight} from "lucide-react"

export default function WhatsApp() {
    return (
        <section id="CTA" className="relative w-full">
            <div className="px-6 lg:px-[calc(8.333333333333334%+1.5rem)] bg-primary py-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                    <h5 className="text-xl lg:text-2xl max-w-2xl text-white text-center">
                        Interested in joining our team?
                    </h5>
                    <button
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#518581] lg:text-xl text-white underline"
                        onClick={() => window.open("https://qualtricsxmj2qmmp8vh.qualtrics.com/jfe/form/SV_02EdDmjnrbqSqpg", '_blank')}
                    >
                        Apply Now
                        <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    </button>
                </div>
            </div>
        </section>
    )
}
