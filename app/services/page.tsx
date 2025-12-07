"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import ServicesHero from "@/components/services/services-hero";
import EventFilter from "@/components/services/event-filter";
import EventList from "@/components/services/event-list";
import CTASection from "@/components/services/cta-section";
import Footer from "@/components/footer";
import { events } from "@/lib/services-data";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <EventFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <EventList events={filteredEvents} />
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
