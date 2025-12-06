"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Heart, DollarSign } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { events } from "@/lib/services-data";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] mt-20">
        <div className="absolute inset-0">
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-8">
          <div>
            <Link
              href="/services"
              className="inline-flex items-center text-white hover:text-secondary mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins">
              {event.title}
            </h1>
            <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none mb-12">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {event.description.split('\n\n')[0]}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {event.description.split('\n\n')[1]}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {event.description.split('\n\n')[2]}
                </p>
                {event.description.split('\n\n')[3] && (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {event.description.split('\n\n')[3]}
                  </p>
                )}
              </div>

              {/* Highlights */}
              <div className="bg-gray-50 rounded-lg p-6 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {event.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${event.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6 font-poppins">
                  Event Details
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Date</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-primary">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-6 mb-6">
                  <h4 className="font-bold text-primary mb-4">Impact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-semibold text-primary">{event.impact.peopleHelped}</p>
                        <p className="text-sm text-gray-600">People Helped</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-semibold text-primary">{event.impact.volunteers}</p>
                        <p className="text-sm text-gray-600">Volunteers</p>
                      </div>
                    </div>
                    {event.impact.itemsDonated && (
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="font-semibold text-primary">{event.impact.itemsDonated}</p>
                          <p className="text-sm text-gray-600">Items Donated</p>
                        </div>
                      </div>
                    )}
                    {event.impact.treesPlanted && (
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="font-semibold text-primary">{event.impact.treesPlanted}</p>
                          <p className="text-sm text-gray-600">Trees Planted</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Volunteer
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
