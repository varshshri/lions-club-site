"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Eye,
  Droplet,
  UtensilsCrossed,
  Leaf,
  HandHeart,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Health Camps",
    description: "Organizing free health check-up camps and medical awareness programs for underserved communities.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Eye,
    title: "Eye Donation",
    description: "Promoting eye donation awareness and facilitating corneal transplants to restore vision.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Droplet,
    title: "Blood Donation",
    description: "Conducting regular blood donation drives to support local hospitals and save lives.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Hunger Relief",
    description: "Providing meals and food assistance to families in need and organizing community kitchens.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "Tree planting initiatives, clean-up drives, and environmental conservation awareness programs.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    description: "Supporting local schools, senior centers, and organizing various community welfare activities.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Our Services & Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of programs and services to make a positive
            impact in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-primary text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


