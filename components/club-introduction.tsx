"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Award, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Heart,
    title: "Community Service",
    description: "Dedicated to serving the Agara community through various welfare initiatives and programs.",
  },
  {
    icon: Users,
    title: "Active Members",
    description: "A passionate team of volunteers committed to making a positive impact in our neighborhood.",
  },
  {
    icon: Target,
    title: "Focused Impact",
    description: "Addressing local needs with targeted programs in health, education, and social welfare.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Recognized for our outstanding contributions to community development and service.",
  },
];

export default function ClubIntroduction() {
  return (
    <section id="about-club" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
              About Lions Club Agara
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Lions Club Agara is a dedicated chapter of Lions Clubs International, committed to serving 
              the local community in Agara with passion, integrity, and unwavering dedication. We are 
              part of the world&apos;s largest service club organization, bringing together volunteers who 
              share a common goal: making a positive difference in our community.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Our club focuses on addressing the unique needs of the Agara community through various 
              service projects, including health camps, educational support, environmental initiatives, 
              and assistance to underprivileged families. We believe in the power of collective action 
              and the impact that dedicated volunteers can make when they come together.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our partnership with Lions International and our local Seva Trust, we work 
              tirelessly to create lasting change and build a stronger, more compassionate community 
              for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d7a?w=800&h=600&fit=crop"
              alt="Lions Club Agara Community Service"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-primary to-[#0d3a7a] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold font-poppins">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To empower volunteers to serve the Agara community, meet humanitarian needs, 
                encourage peace, and promote understanding. We strive to create lasting positive 
                change through hands-on service and community engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold font-poppins">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To be the leading force for positive change in Agara, creating a community where 
                everyone can thrive. We envision a future where compassion, service, and unity 
                drive our collective progress.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Club Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-primary text-lg">Location</h4>
            </div>
            <p className="text-gray-600">
              Agara, Bangalore, Karnataka, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-primary text-lg">Active Since</h4>
            </div>
            <p className="text-gray-600">
              Continuously serving the community with regular events and service projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-primary text-lg">Our Members</h4>
            </div>
            <p className="text-gray-600">
              A dedicated team of volunteers committed to making a difference in Agara
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
