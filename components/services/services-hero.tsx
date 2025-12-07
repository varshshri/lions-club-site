"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] mt-20 overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop"
              alt="Community Service"
              fill
              className="object-cover rounded-tl-2xl"
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
              alt="Volunteer Work"
              fill
              className="object-cover rounded-tr-2xl"
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
              alt="Health Camp"
              fill
              className="object-cover rounded-bl-2xl"
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
              alt="Community Support"
              fill
              className="object-cover rounded-br-2xl"
            />
          </div>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
            Our Services: Making a Difference in Agara
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            Dedicated to serving our community through impactful initiatives in health, 
            environment, youth, and community support.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 font-semibold"
          >
            Get Involved
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}



