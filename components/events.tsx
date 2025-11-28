"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Community Health Camp",
    date: "March 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Community Center",
    description: "Free health check-ups, blood pressure screening, and health awareness sessions.",
  },
  {
    title: "Blood Donation Drive",
    date: "March 22, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "City Hospital",
    description: "Join us in saving lives. All donors will receive a certificate and refreshments.",
  },
  {
    title: "Tree Planting Initiative",
    date: "April 5, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "City Park",
    description: "Help us plant 500 trees to make our city greener. All volunteers welcome!",
  },
];

const pastEvents = [
  { id: 1, title: "Eye Donation Awareness", image: "/api/placeholder/400/300" },
  { id: 2, title: "Food Distribution Drive", image: "/api/placeholder/400/300" },
  { id: 3, title: "Senior Care Program", image: "/api/placeholder/400/300" },
  { id: 4, title: "School Supplies Donation", image: "/api/placeholder/400/300" },
  { id: 5, title: "Clean Beach Campaign", image: "/api/placeholder/400/300" },
  { id: 6, title: "Medical Camp", image: "/api/placeholder/400/300" },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
            Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events and see what we've accomplished
            together.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 font-poppins">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-secondary">
                  <CardHeader>
                    <CardTitle className="text-primary text-xl">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-secondary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-secondary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-600 mb-4">
                      {event.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events Gallery */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 font-poppins">
            Past Events Gallery
          </h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <Card className="w-80 h-64 overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-secondary">
                    <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {event.title}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600">{event.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


