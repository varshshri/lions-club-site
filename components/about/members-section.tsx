"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  { name: "Nirmal D", role: "Member" },
  { name: "Shama Reddy DB", role: "Member" },
  { name: "Gopinathan N", role: "Member" },
  { name: "Padma Ashok", role: "Member" },
  { name: "Rathnamma", role: "Member" },
  { name: "Ramaswamy Reddy G", role: "Member" },
  { name: "Chenna Reddy Aswath", role: "Member" },
  { name: "Additional Member", role: "Member" },
];

// Generate unique image URLs for each member
const getMemberImage = (index: number) => {
  const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
  ];
  return images[index % images.length];
};

export default function MembersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Our 37 Dedicated Members
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 rounded-full overflow-hidden border-3 border-gray-300 bg-gray-200">
                <Image
                  src={getMemberImage(index)}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
              <h3 className="font-semibold text-primary text-xs md:text-sm mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 text-xs">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
