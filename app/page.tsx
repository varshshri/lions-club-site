"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Events from "@/components/events";
import Membership from "@/components/membership";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Events />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}


