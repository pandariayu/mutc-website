"use client";

import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBiking, faPersonRunning, faPersonSwimming} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const activities = [
        { text: "Swim", icon: faPersonSwimming },
        { text: "Bike", icon: faBiking },
        { text: "Run", icon: faPersonRunning }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % activities.length);
        }, 2000);

        return () => clearInterval(timer);

    }, []);

    return (
        <section
            id="hero"
            className="relative w-full"
        >
            {/* Hero Section */}
            <div className="relative h-screen min-h-[500px] w-full">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/video/intro.mp4" type="video/mp4" />
                    </video>
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(0deg, #151411 -21.38%, rgba(21, 20, 17, 0.00) 66.65%)'
                        }}
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end text-left text-white px-6 lg:px-[calc(8.333333333333334%+1.5rem)] pb-16 sm:pb-28 ">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl max-w-[90%] mb-4 sm:mb-6 break-words">
                        Melbourne University Triathlon Club
                    </h1>
                    <h3 className="max-w-[90%] text-xl sm:text-2xl lg:text-3xl opacity-80 break-words mb-6 sm:mb-8">
                        <div className="h-[2em]">
                            <motion.div
                                key={currentIndex}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-2"
                            >
                                {activities[currentIndex].text}{" "}
                                <FontAwesomeIcon
                                    icon={activities[currentIndex].icon}
                                    className="text-xl"
                                />
                            </motion.div>
                        </div>
                        Embrace the brilliant lifestyle of Triathlon with the friendliest club at Melbourne Uni
                    </h3>

                    <div className="flex gap-4">
                        <button
                            className="border-2 border-white bg-transparent hover:bg-white/10 text-white font-bold sm:px-10 sm:py-4 px-6 py-3 transition-colors duration-200"
                            onClick={() => {
                                const element = document.getElementById('membership');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Join MUTC
                        </button>

                        <button
                            className="border-2 border-white bg-transparent hover:bg-white/10 text-white font-bold sm:px-10 sm:py-4 px-6 py-3 transition-colors duration-200"
                            onClick={() => {
                                const element = document.getElementById('footer');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
