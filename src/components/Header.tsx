"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, SVGProps} from 'react';
import { motion, MotionProps } from "framer-motion";
import { useRouter } from "next/navigation";

const Path = (props: SVGProps<SVGPathElement> & MotionProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

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

    const router = useRouter();
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const isMainPage = window.location.pathname === "/" ||
            window.location.pathname === "";
        if (isMainPage) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${targetId}`);
        }

        // Close the mobile menu
        setIsMenuOpen(false);
    };

    const MobileNavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
        <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
        >
            <a
                href={href}
                className={className}
                onClick={(e) => handleScroll(e, href.replace('#', ''))}
            >
                {children}
            </a>
        </motion.div>
    );

    return (
        <header className="relative w-full">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-white">
                <div className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)]">
                    <div className="flex items-center h-20 lg:h-24 relative">
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
                                    <MobileNavLink href="#about" className="block text-teal-600 hover:text-teal-700">
                                        About us
                                    </MobileNavLink>
                                    <MobileNavLink href="#training" className="block text-gray-800 hover:text-gray-900">
                                        Training
                                    </MobileNavLink>
                                    <MobileNavLink href="#events" className="block text-gray-800 hover:text-gray-900">
                                        Events
                                    </MobileNavLink>
                                    <MobileNavLink href="#membership" className="block text-gray-800 hover:text-gray-900">
                                        Membership
                                    </MobileNavLink>
                                    <MobileNavLink href="#team" className="block text-gray-800 hover:text-gray-900">
                                        Our team
                                    </MobileNavLink>
                                    <MobileNavLink href="#faq" className="block text-gray-800 hover:text-gray-900">
                                        FAQs
                                    </MobileNavLink>
                                </div>
                            </div>
                        </motion.div>
                        <div className="hidden lg:flex flex-1 items-center justify-center w-full">
                            <div className="flex items-center space-x-12">
                                <a
                                    href="#about"
                                    className="text-[#518581] hover:text-teal-700"
                                    onClick={(e) => handleScroll(e, 'about')}
                                >
                                    About us
                                </a>
                                <a
                                    href="#training"
                                    className="text-gray-800 hover:text-gray-900"
                                    onClick={(e) => handleScroll(e, 'training')}
                                >
                                    Training
                                </a>
                                <a
                                    href="#events"
                                    className="text-gray-800 hover:text-gray-900"
                                    onClick={(e) => handleScroll(e, 'events')}
                                >
                                    Events
                                </a>
                                <a
                                    href="#membership"
                                    className="text-gray-800 hover:text-gray-900"
                                    onClick={(e) => handleScroll(e, 'membership')}
                                >
                                    Membership
                                </a>
                                <a
                                    href="#team"
                                    className="text-gray-800 hover:text-gray-900"
                                    onClick={(e) => handleScroll(e, 'team')}
                                >
                                    Our team
                                </a>
                                <a
                                    href="#faq"
                                    className="text-gray-800 hover:text-gray-900"
                                    onClick={(e) => handleScroll(e, 'faq')}
                                >
                                    FAQs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

