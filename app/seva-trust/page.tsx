"use client";

import Navbar from "@/components/navbar";
import SevaTrustHero from "@/components/seva-trust/seva-trust-hero";
import ActivitiesSection from "@/components/seva-trust/activities-section";
import BoardMembersSection from "@/components/seva-trust/board-members-section";
import ValuedMembersSection from "@/components/seva-trust/valued-members-section";
import ContributionsSection from "@/components/seva-trust/contributions-section";
import SevaTrustFooter from "@/components/seva-trust/seva-trust-footer";

export default function SevaTrustPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Navbar />
      <SevaTrustHero />
      <ActivitiesSection />
      <BoardMembersSection />
      <ValuedMembersSection />
      <ContributionsSection />
      <SevaTrustFooter />
    </main>
  );
}
