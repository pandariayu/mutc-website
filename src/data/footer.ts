export const footerDetails = {
    subheading: "Tin Alley, Melbourne University, Parkville VIC 3052, Australia",
    quickLinks: [
        {
            text: "Mini-triathlon",
            url: "#minitriathlon"
        },
        {
            text: "Events",
            url: "#events"
        },
        {
            text: "Blogs",
            url: "#blogs"
        }
    ],
    email: 'team@melbunitriathlon.club',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://www.instagram.com',
        whatsapp: 'https://wa.me/1234567890',
    } as {
        [key: string]: string;
        facebook: string;
        instagram: string;
        whatsapp: string;
    }
}
