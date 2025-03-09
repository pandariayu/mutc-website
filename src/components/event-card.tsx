"use client"

import {useState} from "react"
import Image from "next/image"

interface EventCardProps {
  image: string
  title: string
  level: string
  location: string
  time: string
  time2: string
  content: string
  weekday: number | [number, number]
}


export function EventCard({ image, title, level, location, time, time2, weekday, content }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const getNextWeekdayDate = (targetDay: number | [number, number]) => {
    const today = new Date();
    const currentDay = today.getDay();

    // If single weekday is provided
    if (typeof targetDay === 'number') {
      const diff = (targetDay + 7 - currentDay) % 7;
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + diff);
      return nextDate;
    }

    // If two weekdays are provided
    const [day1, day2] = targetDay;
    let diff1 = (day1 + 7 - currentDay) % 7;
    let diff2 = (day2 + 7 - currentDay) % 7;

    // If first day has passed this week, use next week's date
    if (diff1 === 0 && today.getHours() >= 12) diff1 = 7;
    if (diff2 === 0 && today.getHours() >= 12) diff2 = 7;

    // Get the closest upcoming date
    const nextDate = new Date(today);
    const closestDiff = diff1 <= diff2 ? diff1 : diff2;
    nextDate.setDate(today.getDate() + closestDiff);

    return nextDate;
  };
  // 格式化为 "13 March" 样式
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${day} ${month}`;
  };

  return (
    <div className="relative w-full h-full [perspective:1000px]">
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden group">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 p-4 md:p-6 text-white">
                <h4 className="font-semibold mb-1 md:mb-2">{title}</h4>
                <p className="text-gray-200 mb-2 md:mb-4">{level}</p>
                <button className="text-lg text-white hover:underline">
                  Click to see more detail
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative h-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60">
              <div className="relative p-4 md:p-6 text-white h-full flex md:block">
                {/* 内容部分 - 在移动端垂直居中 */}
                <div className="flex flex-col justify-center md:block space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Location</h4>
                    <p className="text-sm md:text-base text-gray-200">{location}</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Time</h4>
                    <p className="text-sm md:text-base text-gray-200">{time}</p>
                    <p className="text-sm md:text-base text-gray-200">{time2}</p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Content</h4>
                    <p className="text-sm md:text-base text-gray-200">{content}</p>
                  </div>
                </div>

                {/* 日期部分 */}
                <div className="absolute right-4 md:right-6 md:bottom-6 top-1/2 md:top-auto transform -translate-y-1/2 md:transform-none text-right">
                  <h3 className="text-2xl md:text-4xl font-bold mb-1">{formatDate(getNextWeekdayDate(weekday))}</h3>
                  <p className="text-sm md:text-base text-gray-200">Upcoming session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

