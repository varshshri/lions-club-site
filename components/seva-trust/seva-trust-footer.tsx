"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Activities", href: "/seva-trust#activities" },
  { name: "Our Team", href: "/seva-trust#team" },
  { name: "Donate", href: "/seva-trust#donate" },
];

export default function SevaTrustFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Seva Trust Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#2563eb] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-[#2563eb] font-bold text-xl">Seva Trust</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Seva Trust by Lions Club Agara is committed to serving the community through various humanitarian initiatives and programs.
            </p>
            <p className="text-xs text-gray-500">
              Registration No: TRUST/AGARA/2024
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#1b1f29] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#1b1f29] mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2563eb] mt-0.5" />
                <p className="text-sm text-gray-600">
                  Lions Club, Agara, Bengaluru, Karnataka
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2563eb]" />
                <a
                  href="mailto:contact@sevatrust.org"
                  className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  contact@sevatrust.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2563eb]" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors"
                >
                  +91 1234567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#2563eb] hover:text-white flex items-center justify-center transition-colors text-gray-600"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#2563eb] hover:text-white flex items-center justify-center transition-colors text-gray-600"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#2563eb] hover:text-white flex items-center justify-center transition-colors text-gray-600"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border-t border-gray-200 pt-6"
        >
          <p className="text-sm text-gray-500">
            ©2024 Seva Trust - Lions Club Agara. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
