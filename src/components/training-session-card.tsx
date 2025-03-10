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

  return (
    <div className="overflow-hidden border-0">
      <div className="relative h-48 w-full overflow-hidden sm:h-64 group">
        <Image
          src={image}
          alt={title + `training session`}
          fill
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

        <div className="absolute bottom-4 right-4">
          <div className="bg-white/90 p-3 text-center">
            <p className="text-3xl font-bold">{formatDate(getNextWeekdayDate(weekday)).split(" ")[0]}</p>
            <p className="text-sm font-medium">{formatDate(getNextWeekdayDate(weekday)).split(" ")[1]}</p>
          </div>
          <div className="bg-primary p-1 text-center text-xs text-white">Upcoming Session</div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] grid gap-2 p-5">
        <div className="space-y-1">
          <h4 className="mb-1 md:mb-2">{title}</h4>
        </div>

        <div className="flex items-start gap-2 text-gray-500">
          <Clock className="mt-1 h-4 w-4 flex-shrink-0" />
          <span className="whitespace-pre-line">{time + " " + time2}</span>
        </div>

        <div className="flex items-start gap-2 text-gray-500">
          <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
          <span>Meet at {location}</span>
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

