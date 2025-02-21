import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Figtree } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam"
import TrainingSessions from "@/components/training-sessions"
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <AboutUs />
        <OurTeam />
        <TrainingSessions />
        {/*<main>*/}
        {/*  {children}*/}
        {/*</main>*/}
        <Footer />
      </body>
    </html>
  );
}
