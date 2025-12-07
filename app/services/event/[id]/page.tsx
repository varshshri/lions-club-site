"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Heart, Package, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { events } from "@/lib/services-data";
import type { Event } from "@/lib/services-data";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event: Event | undefined = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  // Split description into paragraphs (handle single-line descriptions)
  const descriptionParagraphs = event.description
    .split(/\n\n+/)
    .filter((para) => para.trim().length > 0);

  // If no paragraphs found, use the full description as one paragraph
  const paragraphs = descriptionParagraphs.length > 0 
    ? descriptionParagraphs 
    : [event.description];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-6">
        <Link href="/services">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] mb-12">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <span className="inline-block px-4 py-2 bg-[#2563eb] rounded-full text-sm font-semibold mb-4">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1b1f29] mb-6">About This Event</h2>
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1b1f29] mb-6">Key Highlights</h2>
              <ul className="space-y-3">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#2563eb] mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Image Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1b1f29] mb-6">Event Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${event.title} - Image ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Event Details Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-[#1b1f29] mb-6">Event Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-[#2563eb] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-gray-900 font-medium">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#2563eb] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-[#2563eb] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Volunteers</p>
                      <p className="text-gray-900 font-medium">{event.impact.volunteers} volunteers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-lg shadow-lg p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-6">Our Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-sm text-blue-100">People Helped</p>
                      <p className="text-2xl font-bold">{event.impact.peopleHelped.toLocaleString()}</p>
                    </div>
                  </div>

                  {event.impact.itemsDonated && (
                    <div className="flex items-center">
                      <Package className="w-5 h-5 mr-3" />
                      <div>
                        <p className="text-sm text-blue-100">Items Donated</p>
                        <p className="text-2xl font-bold">{event.impact.itemsDonated.toLocaleString()}</p>
                      </div>
                    </div>
                  )}

                  {event.impact.treesPlanted && (
                    <div className="flex items-center">
                      <TreePine className="w-5 h-5 mr-3" />
                      <div>
                        <p className="text-sm text-blue-100">Trees Planted</p>
                        <p className="text-2xl font-bold">{event.impact.treesPlanted.toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                  size="lg"
                >
                  Volunteer Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                  size="lg"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
