"use client";

import Navbar from "@/components/navbar";
import AboutHero from "@/components/about/about-hero";
import CommitmentSection from "@/components/about/commitment-section";
import InfoCards from "@/components/about/info-cards";
import LeadershipSection from "@/components/about/leadership-section";
import MembersSection from "@/components/about/members-section";
import JoinCTA from "@/components/about/join-cta";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <CommitmentSection />
      <InfoCards />
      <LeadershipSection />
      <MembersSection />
      <JoinCTA />
      <Footer />
    </main>
  );
}
