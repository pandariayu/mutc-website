import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import {getPlatformIconByName} from "@/utils";

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                    <div className="flex flex-col md:flex-row gap-6">
                        <Link href="/" className="flex flex-col md:flex-row gap-6">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="MUTC Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center md:text-left flex flex-col justify-center">
                                <h4 className="text-lg font-semibold mb-2">
                                    {siteDetails.siteName}
                                </h4>
                                <p className="text-foreground-accent">
                                    {footerDetails.subheading}
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>

                        {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}

                        {footerDetails.socials && (
                            <div className="mt-2 flex gap-5 flex-wrap justify-center md:justify-start">
                                {Object.keys(footerDetails.socials).map((platformName) => {
                                    const socialKey = platformName as keyof typeof footerDetails.socials
                                    return (
                                        <Link
                                            href={footerDetails.socials[socialKey]}
                                            key={socialKey}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
