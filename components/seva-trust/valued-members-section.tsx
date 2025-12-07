"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const valuedMembers = [
  { name: "L. Ramesh", role: "Member", imageId: "1507003211169" },
  { name: "K. Suresh", role: "Member", imageId: "1494790108377" },
  { name: "M. Priya", role: "Member", imageId: "1500648767791" },
  { name: "R. Anil", role: "Member", imageId: "1438761681033" },
  { name: "S. Kavitha", role: "Member", imageId: "1472099645785" },
  { name: "N. Rajesh", role: "Member", imageId: "1534528741775" },
];

export default function ValuedMembersSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1f29] mb-8">
            Our Valued Members
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {valuedMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-3 bg-gray-200">
                <Image
                  src={`https://images.unsplash.com/photo-${member.imageId}?w=200&h=200&fit=crop&auto=format`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-[#1b1f29]">{member.name}</p>
              <p className="text-xs text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm"
        >
          + 25 more dedicated members
        </motion.p>
      </div>
    </section>
  );
}
