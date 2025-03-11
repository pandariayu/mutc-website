// in training-session-card.tsx
"use client";
import { useEffect, useRef } from "react";
import {Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

interface TrainingSessionProps {
  image: string
  title: string
  level: string
  location: string
  time: string
  time2: string
  content: string
  weekday: number | [number, number]
}

export default function TrainingSessionCard({
  image, title, level, location, time, time2, weekday, content
}: TrainingSessionProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const image = entry.target.querySelector('img');
            if (image) {
              if (entry.isIntersecting) {
                image.style.transform = 'scale(1.05)';
              } else {
                image.style.transform = 'scale(1)';
              }
            }
          });
        },
        {
          threshold: 0.5,
        }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getNextWeekdayDate = (targetDay: number | [number, number]) => {
    const today = new Date();
    const currentDay = today.getDay();

    if (typeof targetDay === 'number') {
      const diff = (targetDay + 7 - currentDay) % 7;
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + diff);
      return nextDate;
    }

    const [day1, day2] = targetDay;
    let diff1 = (day1 + 7 - currentDay) % 7;
    let diff2 = (day2 + 7 - currentDay) % 7;

    if (diff1 === 0 && today.getHours() >= 12) diff1 = 7;
    if (diff2 === 0 && today.getHours() >= 12) diff2 = 7;

    const nextDate = new Date(today);
    const closestDiff = diff1 <= diff2 ? diff1 : diff2;
    nextDate.setDate(today.getDate() + closestDiff);

    return nextDate;
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${day} ${month}`;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
  };

  return (
    <div className="overflow-hidden border-0 ref={cardRef}" ref={cardRef}>
      <div className="relative h-48 w-full overflow-hidden sm:h-64">
        <Image
          src={image}
          alt={title + `training session`}
          fill
          className="w-full h-full object-cover transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

        <div className="absolute bottom-4 right-4 w-auto p">
          <div className="bg-white/90 p-3 text-center">
            <h3 className="lg:text-4xl text-3xl font-bold">{formatDate(getNextWeekdayDate(weekday)).split(" ")[0]}</h3>
            <p className="text-sm font-medium">{formatDate(getNextWeekdayDate(weekday)).split(" ")[1]}</p>
          </div>
          <div className="bg-primary pl-3 pr-3 pt-2 pb-2 text-center lg:text-sm text-xs text-white">
            {isToday(getNextWeekdayDate(weekday)) ? "Today" : "Upcoming"}
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] grid gap-2 p-5">
        <div className="space-y-1">
          <h3 className="lg:text-3xl mb-1 md:mb-2">{title}</h3>
        </div>

        <div className="flex items-start gap-2 text-gray-500">
          <Clock className="mt-1 h-4 w-4 flex-shrink-0" />
          <p className="whitespace-pre-line">{time + " " + time2}</p>
        </div>

        <div className="flex items-start gap-2 text-gray-500">
          <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
          <p>Meet at {location}</p>
        </div>

        <div className="flex items-start gap-2 text-gray-500">
          <Users className="mt-1 h-4 w-4 flex-shrink-0" />
          <p>{content}</p>
        </div>
      </div>

      <div className="border-t bg-gray-50 px-5 py-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <p>{level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

