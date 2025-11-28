"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower volunteers to serve their communities, meet humanitarian needs, encourage peace and promote international understanding.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the global leader in community and humanitarian service, creating a world where everyone can thrive.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, compassion, respect, and service above self guide everything we do in our community.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building stronger communities through volunteer service and fostering connections that last a lifetime.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            About Lions Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a global network of volunteers working together to make a
            positive impact in our communities and around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-secondary">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Our Commitment
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              For over a century, Lions Clubs International has been serving
              communities worldwide. Our members are dedicated to improving
              lives through hands-on service and humanitarian projects. We
              believe that together, we can create lasting change and build a
              better future for all.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


