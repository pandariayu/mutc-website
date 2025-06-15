# Melbourne University Triathlon Club Website

A modern, responsive website for the Melbourne University Triathlon Club (MUTC) built with Next.js and React. 
[http://www.melbunitriathlon.club](www.melbunitriathlon.club)

## Features

- Interactive hero section with dynamic activity animations
- Training session management with detailed event cards
- Event registration system for mini-triathlon races
- Responsive design for all devices
- Membership payment with Stripe integration
- FAQ section with expandable answers

## Tech Stack

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons, Font Awesome
- **Payment Processing**: Stripe
- **Maps**: Google Maps API
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd mutc-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── components/         # React components
├── data/              # Static data and configurations
├── pages/             # Next.js pages
├── public/            # Static assets
│   ├── images/       # Image files
│   └── video/        # Video files
└── utils/            # Utility functions
```

## Contact

For any queries, please contact the MUTC team at team@melbunitriathlon.club
