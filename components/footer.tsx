"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Events", href: "#events" },
  { name: "Membership", href: "#membership" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@lionsclub.org", label: "Email" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold text-xl font-poppins">
                Lions Club
              </span>
            </div>
            <p className="text-white/80 mb-4">
              Serving our community with dedication, compassion, and commitment
              to making a positive impact.
            </p>
            <p className="text-white/80 font-semibold">We Serve</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-white/80 hover:text-secondary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>123 Community Street</li>
              <li>City, State 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@lionsclub.org</li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">
              Follow Us
            </h3>
            <p className="text-white/80 mb-4">
              Stay connected with us on social media
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/80">
            © {new Date().getFullYear()} Lions Club. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Part of Lions Clubs International
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


