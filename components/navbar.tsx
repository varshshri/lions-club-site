"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Projects", href: "/services" },
  { name: "SEVA TRUST", href: "/seva-trust" },
  { name: "Events", href: "#events" },
  { name: "Join Us", href: "#join" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/")) {
      // Let Next.js Link handle routing
      return;
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Links to Home */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <Image
                src="https://www.lionsclubs.org/static/media/logo.6b5c5c5e.svg"
                alt="Lions International Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
                priority
              />
            </motion.div>
            <span className="text-[#1a1a1a] font-semibold text-lg tracking-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Lions Club Agara
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "transition-colors font-medium text-sm text-[#1a1a1a] hover:text-[#0066cc]",
                      pathname === item.href
                        ? "text-[#0066cc]"
                        : ""
                    )}
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[#1a1a1a] hover:text-[#0066cc] transition-colors font-medium text-sm"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {item.name}
                </button>
              );
            })}
            <Button
              variant="default"
              size="sm"
              className="bg-[#0066cc] hover:bg-[#0052a3] text-white"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.href.startsWith("/")) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[#1a1a1a] hover:text-[#0066cc] transition-colors text-left font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-[#1a1a1a] hover:text-[#0066cc] transition-colors text-left font-medium"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button
                variant="default"
                size="sm"
                className="w-full bg-[#0066cc] text-white"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Donate
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


