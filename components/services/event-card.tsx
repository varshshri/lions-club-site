"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Event } from "@/lib/services-data";

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
      <Link href={`/services/event/${event.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              {event.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2 font-poppins line-clamp-2">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {event.shortDescription}
          </p>
          <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
            <span>Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
