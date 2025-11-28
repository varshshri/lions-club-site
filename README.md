# Lions Club Website

A modern, fully responsive single-page website for Lions Club built with Next.js 15, React, TypeScript, TailwindCSS, ShadCN UI, and Framer Motion.

## 🎨 Features

- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Modern UI**: Built with ShadCN UI components and TailwindCSS
- **Single Page**: All sections on one page with smooth scrolling navigation
- **Premium Design**: Royal Blue (#0A2A66) and Gold (#E5B100) color scheme
- **Sticky Navbar**: Easy navigation with smooth scroll to sections

## 📋 Sections

1. **Hero Section** - Eye-catching landing with call-to-action buttons
2. **About Section** - Mission, vision, values, and community information
3. **Services/Programs** - Health camps, eye donation, blood donation, hunger relief, environment activities
4. **Events** - Upcoming events and past events gallery
5. **Membership** - Why join, benefits, and membership application form
6. **Gallery** - Image grid with lightbox popup view
7. **Contact** - Contact form, address, phone, email, and map placeholder
8. **Footer** - Copyright, social icons, and quick links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **ShadCN UI** - Beautiful component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page combining all sections
│   └── globals.css      # Global styles and Tailwind directives
├── components/
│   ├── ui/              # ShadCN UI components
│   ├── navbar.tsx       # Sticky navigation bar
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── services.tsx     # Services section
│   ├── events.tsx       # Events section
│   ├── membership.tsx   # Membership section
│   ├── gallery.tsx      # Gallery section
│   ├── contact.tsx      # Contact section
│   └── footer.tsx       # Footer component
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- Primary (Royal Blue): `#0A2A66`
- Secondary (Gold): `#E5B100`

### Fonts

The project uses Inter and Poppins fonts, configured in `app/layout.tsx`.

## 📝 Notes

- Forms are currently set up with basic validation and console logging. You'll need to integrate with your backend API.
- Gallery images use placeholder gradients. Replace with actual images.
- Map placeholder in contact section can be replaced with Google Maps or similar service.

## 📄 License

This project is created for Lions Club use.

---

**Made with ❤️ for Lions Club**


