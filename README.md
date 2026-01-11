# Next Move Global LLC

A modern, professional truck dispatch management system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home**: Landing page with hero section, features, and call-to-action
- **About**: Company story, values, statistics, and why choose us section
- **Carrier Setup**: Comprehensive registration form for new carriers to join the platform
- **Contact Us**: Contact form with company information and business hours
- **Modern UI**: Beautiful, responsive design with intuitive navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following environment variables:
```bash
# Resend API Key (required for email sending)
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your-email@example.com
CARRIER_SETUP_EMAIL=your-email@example.com
```

   To get a Resend API key:
   1. Sign up at [https://resend.com](https://resend.com)
   2. Create an API key in the dashboard
   3. Copy the API key to your `.env.local` file
   4. Replace `your-email@example.com` with your actual email address

   **Note for Vercel deployment:** Add these environment variables in your Vercel project settings under Settings → Environment Variables.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
next-move/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── carrier-setup/    # Carrier registration page
│   ├── contact/          # Contact us page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   └── Navbar.tsx        # Navigation component
└── public/               # Static assets
```

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT

