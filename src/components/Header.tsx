"use client";
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, SVGProps } from 'react';
import { motion, MotionProps } from "framer-motion";

const Path = (props: SVGProps<SVGPathElement> & MotionProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

// 在组件顶部添加菜单动画变体
const menuVariants = {
    open: {
        opacity: 1,
        y: 0,
        display: "block",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        },
        transitionEnd: {
            display: "none"
        }
    }
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 处理导航点击
    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    // 移动端菜单链接组件
    const MobileNavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
        <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
        >
            <Link
                href={href}
                className={className}
                onClick={handleNavClick}
            >
                {children}
            </Link>
        </motion.div>
    );

    return (
        <header className="relative w-full">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center h-16 lg:h-24 relative">
                        <Link
                            href="/"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Triathlon MUTC Logo"
                                width={40}
                                height={40}
                                className="h-12 lg:h-14 w-12 lg:w-14"
                            />
                        </Link>
                        <button
                            className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <Path
                                    variants={{
                                        closed: { d: "M 4 6 L 20 6" },
                                        open: { d: "M 6 18 L 18 6" }
                                    }}
                                    animate={isMenuOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3 }}
                                />
                                <Path
                                    variants={{
                                        closed: { d: "M 4 12 L 20 12", opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    animate={isMenuOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3 }}
                                />
                                <Path
                                    variants={{
                                        closed: { d: "M 4 18 L 20 18" },
                                        open: { d: "M 6 6 L 18 18" }
                                    }}
                                    animate={isMenuOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3 }}
                                />
                            </svg>
                        </button>
                        <motion.div
                            className="lg:hidden absolute top-full left-0 right-0 w-screen -ml-[calc((100vw-100%)/2)] bg-white shadow-lg"
                            initial="closed"
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={menuVariants}
                        >
                            <div className="container mx-auto px-4">
                                <div className="px-4 py-6 space-y-8">
                                    <MobileNavLink href="/about" className="block text-teal-600 hover:text-teal-700">
                                        About us
                                    </MobileNavLink>
                                    <MobileNavLink href="/team" className="block text-gray-800 hover:text-gray-900">
                                        Our team
                                    </MobileNavLink>
                                    <MobileNavLink href="/training" className="block text-gray-800 hover:text-gray-900">
                                        Training
                                    </MobileNavLink>
                                    <MobileNavLink href="/events" className="block text-gray-800 hover:text-gray-900">
                                        Events
                                    </MobileNavLink>
                                    <MobileNavLink href="/membership" className="block text-gray-800 hover:text-gray-900">
                                        Membership
                                    </MobileNavLink>
                                    <MobileNavLink href="/contact" className="block text-gray-800 hover:text-gray-900">
                                        Contact us
                                    </MobileNavLink>
                                </div>
                            </div>
                        </motion.div>
                        <div className="hidden lg:flex flex-1 items-center justify-center w-full">
                            <div className="flex items-center space-x-12">
                                <Link href="/about" className="text-[#518581] hover:text-teal-700">
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
                    <button className="hidden md:block absolute left-4 -translate-y-12 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button className="hidden md:block absolute right-4 -translate-y-12 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                    <h2 className="max-w-[90%] text-4xl md:text-4xl lg:text-5xl pl-[calc(8.333333333333334%+1.5rem)] mb-8 break-words">
                        Melbourne University Triathlon Club
                    </h2>
                    <h3 className="max-w-[90%] text-2xl md:text-2xl lg:text-3xl pl-[calc(8.333333333333334%+1.5rem)] opacity-80 break-words">
                        Swim, Bike, Run<br />
                        Embrace the brilliant lifestyle of Triathlon with the friendliest club at Melbourne Uni
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

