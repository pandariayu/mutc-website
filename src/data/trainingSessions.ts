import {ISessions} from "@/types";

export const sessions : ISessions[] = [
    {
        image: "/images/Swim.jpg",
        title: "Monday/Thursday Swim",
        level: "All level",
        location: "Beaureparies Center Swimming pool",
        time: "Monday: 2:00 pm - 3:30 pm",
        time2: "Thursday: 11:00 am - 12:30 pm",
        content: "Train with Coach Chris",
        weekday: [1,4],
    },
    {
        image: "/images/IntRun.png",
        title: "Wednesday Interval Running",
        level: "Intermediate level",
        location: "Rawlinson Track",
        time: "7:30 pm - 8:15 pm ",
        time2: "",
        content: "Train with coordinator Lan and Balthazar",
        weekday: 3,
    },
    {
        image: "/images/Bike&Run.jpg",
        title: "Friday Indoor Bike&Run",
        level: "All level",
        location: "Rawlinson Track",
        time: "3:00 pm - 4:00 pm ",
        time2: "",
        content: "Bike then Run, Two Running paces (5:15 min/km & 6:00 min/km)",
        weekday: 5,
    },
    {
        image:
            "/images/SocialRun.png",
        title: "Saturday Social Run",
        level: "Beginner level",
        location: "Rawlinson Track",
        time: "9:00 - 9:45 am",
        time2: "",
        content: "Parkville Easy Social Run at you pace, free coffee will be provided",
        weekday: 6,
    },
]
