"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Heart, Award, Calendar } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
          alt="Lions Club Agara Community Service"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
        {/* Pattern Overlay for Texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight"
          >
            About Lions Club Agara
          </motion.h1>
          
          {/* Subtitle with Animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 font-medium mb-12 max-w-2xl mx-auto"
          >
            Serving the Agara Community with Pride Since 2010
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">41</div>
              <div className="text-sm md:text-base text-white/80">Active Members</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">150+</div>
              <div className="text-sm md:text-base text-white/80">Projects</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15</div>
              <div className="text-sm md:text-base text-white/80">Years of Service</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2010</div>
              <div className="text-sm md:text-base text-white/80">Established</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
