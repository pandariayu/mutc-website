export interface IFAQ {
    question: string;
    answer: string;
}

export interface IAwards {
    title: string;
    achievement: string;
    details: string;
    date: string;
    url: string;
}

export interface ISessions {
    image: string;
    title: string;
    level: string;
    location: string;
    time: string;
    time2: string;
    content: string;
    weekday: [number, number] | number;
}
