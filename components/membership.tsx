"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Heart, Award, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Join a Global Network",
    description: "Connect with 1.4 million members worldwide",
  },
  {
    icon: Heart,
    title: "Make a Difference",
    description: "Serve your community and help those in need",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description: "Build skills and grow as a leader",
  },
  {
    icon: Handshake,
    title: "Build Relationships",
    description: "Form lasting friendships and professional connections",
  },
];

export default function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="membership" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Become a Member
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our community of dedicated volunteers and make a lasting impact
            in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 font-poppins">
              Why Join Lions Club?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Membership Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-poppins">
                  Membership Application
                </CardTitle>
                <CardDescription className="text-white/80">
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us why you'd like to join (optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


