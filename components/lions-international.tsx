"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Globe, Users, Heart, Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LionsInternational() {
  return (
    <section id="lions-international" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Lions International Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Part of the world's largest service club organization, serving communities globally since 1917
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow border-2 hover:border-secondary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-primary">1.4 Million+ Members</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A global network of volunteers working together to make a positive impact
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow border-2 hover:border-secondary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-primary">200+ Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Serving communities worldwide with compassion and dedication
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow border-2 hover:border-secondary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-primary">100+ Years</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Over a century of service, making a lasting difference in communities
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4 font-poppins">
            Join the Global Movement
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Lions Clubs International is the world's largest service club organization. 
            We empower volunteers to serve their communities, meet humanitarian needs, 
            encourage peace, and promote international understanding.
          </p>
          <a 
            href="https://www.lionsclubs.org/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "text-lg px-8 py-6 group inline-flex items-center"
            )}
          >
            Visit Lions International
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
