"use client";

import { motion } from "framer-motion";
import { Globe2, HeartHandshake, Users, ArrowRight } from "lucide-react";

const focusCards = [
  {
    icon: Globe2,
    title: "Lions International",
    description: "Learn about the global mission of Lions Clubs International and our core service areas.",
    links: [
      { text: "About LCI", href: "https://www.lionsclubs.org/en" },
      { text: "Global Causes", href: "https://www.lionsclubs.org/en/discover-our-clubs/global-causes" },
      { text: "Mission & History", href: "https://www.lionsclubs.org/en/discover-our-clubs/mission-and-history" },
    ],
  },
  {
    icon: HeartHandshake,
    title: "Lions Seva Trust",
    description: "Explore the purpose, projects, and impact of our local trust dedicated to service.",
    links: [
      { text: "Our Trust", href: "#trust" },
      { text: "Projects & Financials", href: "#projects" },
      { text: "How to Donate", href: "#donate" },
    ],
  },
  {
    icon: Users,
    title: "More about Lions Agara",
    description: "Get to know our local club, our leadership, and see how we're making a difference.",
    links: [
      { text: "Our Team", href: "/about#leadership" },
      { text: "Upcoming Events", href: "#events" },
      { text: "Photo Gallery", href: "#gallery" },
    ],
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Our Focus Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover more about our local initiatives, our connection to Lions International, and the work of our Seva Trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-poppins">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-center text-sm text-primary hover:text-secondary transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
