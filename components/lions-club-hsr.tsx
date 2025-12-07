"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Target } from "lucide-react";

export default function LionsClubHSR() {
  return (
    <section id="lions-club-hsr" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Lions Club HSR Layout
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the HSR Layout community with dedication, compassion, and commitment to making a positive impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <CardTitle className="text-primary text-2xl font-poppins mb-4">
                  About Our Club
                </CardTitle>
                <CardDescription className="text-base">
                  Lions Club HSR Layout is a dedicated chapter of Lions Clubs International, 
                  committed to serving the local community in HSR Layout, Bangalore. We work 
                  tirelessly to address the needs of our community through various service 
                  projects and initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Our Mission</h4>
                    <p className="text-gray-600 text-sm">
                      To empower volunteers to serve the HSR Layout community, meet humanitarian 
                      needs, and create lasting positive change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Community Focus</h4>
                    <p className="text-gray-600 text-sm">
                      We focus on health camps, education support, environmental initiatives, 
                      and supporting underprivileged families in our area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-primary">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  HSR Layout, Bangalore, Karnataka, India
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-primary">Active Since</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Continuously serving the community with regular events and service projects
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-primary">Our Members</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A dedicated team of volunteers committed to making a difference in HSR Layout
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
          className="bg-gradient-to-r from-primary to-[#0d3a7a] rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Making a Difference in HSR Layout
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Lions Club HSR Layout is your local chapter of Lions Clubs International. 
              We organize health camps, blood donation drives, eye donation awareness programs, 
              environmental initiatives, and support educational and community welfare activities. 
              Together, we&apos;re building a stronger, more compassionate community in HSR Layout.
            </p>
            <p className="text-lg text-white/90 font-semibold">
              Join us in our mission to serve and make a lasting impact!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



