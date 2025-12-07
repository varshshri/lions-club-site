"use client";

import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Stethoscope,
    title: "Health Camps & Screenings",
    description: "Organizing regular health check-ups, eye screenings, and blood donation drives to support the well-being of our community members.",
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    description: "Providing scholarships, school supplies, and support for local educational institutions to empower the next generation.",
  },
  {
    icon: Leaf,
    title: "Environmental Initiatives",
    description: "Leading tree plantation drives, cleanliness campaigns, and awareness programs to create a greener, healthier Agara.",
  },
];

export default function LocalClubSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              Your Local Lions Club in Agara
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lions Club Agara is committed to serving our local community through dedicated 
              service projects and initiatives. We work closely with community members, local 
              organizations, and our partners to address the most pressing needs in Agara and 
              create lasting positive change.
            </p>

            <div className="space-y-6 mb-8">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2 font-poppins">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold group"
              >
                Learn About Our Impact
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d7a?w=600&h=800&fit=crop"
                alt="Lions Club Agara Community Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=800&fit=crop"
                alt="Lions Club Agara Environmental Initiative"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
