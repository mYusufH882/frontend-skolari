'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Jakarta Marathon 2025",
    date: "20 April 2025",
    time: "05:00 WIB",
    location: "Jakarta",
    image: "/images/home/home-1.jpg",
    category: "Marathon"
  },
  {
    id: 2,
    title: "Borobudur 10K Run",
    date: "15 Mei 2025",
    time: "06:00 WIB",
    location: "Magelang",
    image: "/images/home/home-2.jpg",
    category: "10K"
  },
  {
    id: 3,
    title: "Bali Beach Run",
    date: "1 Juni 2025",
    time: "05:30 WIB",
    location: "Bali",
    image: "/images/home/home-3.jpg",
    category: "Half Marathon"
  }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {event.category}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-5 h-5 mr-2" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
          Daftar Sekarang
        </button>
      </div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Event Lari Mendatang
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Ikuti berbagai event lari menarik dan tingkatkan pencapaian Anda bersama komunitas pelari
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;