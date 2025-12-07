"use client";

import Navbar from "@/components/navbar";
import HeroHome from "@/components/hero-home";
import FocusAreas from "@/components/focus-areas";
import LocalClubSection from "@/components/local-club-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroHome />
      <FocusAreas />
      <LocalClubSection />
      <Footer />
    </main>
  );
}


