'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';

interface MerchandiseItem {
  id: number;
  title: string;
  brand: string;
  image: string;
  date: string;
  isLocked?: boolean;
}

const merchandiseItems: MerchandiseItem[] = [
  {
    id: 1,
    title: "Running Jersey Pro Series",
    brand: "Skolari Running",
    image: "/images/merchandise/merchan-2.jpg",
    date: "19 JAN 02:00",
  },
  {
    id: 2,
    title: "Performance Running Shoes",
    brand: "Skolari X Pro",
    image: "/images/merchandise/merchan-3.jpg",
    date: "26 JAN 02:00",
  },
  {
    id: 3,
    title: "Compression Socks Elite",
    brand: "Skolari Premium",
    image: "/images/merchandise/merchan-4.jpg",
    date: "28 JAN 07:00",
  },
  {
    id: 4,
    title: "Training Shorts Pro",
    brand: "Skolari Sport",
    image: "/images/merchandise/merchan-5.jpg",
    date: "28 JAN 08:00",
  }
];

const MerchandiseCard: React.FC<{ item: MerchandiseItem }> = ({ item }) => {
  return (
    <div className="relative group">
      {item.isLocked && (
        <div className="absolute top-4 left-4 z-10">
          <Lock className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute top-4 right-4 bg-gray-900/50 dark:bg-black/50 text-white px-3 py-1 text-sm rounded-full z-10">
          {item.date}
        </div>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-200">{item.brand}</p>
        </div>
      </div>
    </div>
  );
};

const Merchandise: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Merchandise Eksklusif
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl"
            >
              Dapatkan koleksi merchandise terbaru dari Skolari. Desain eksklusif dan kualitas premium untuk para pelari sejati.
            </motion.p>
          </div>
          
          <Link 
            href="/merchandise" 
            className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            <span className="mr-2">Lihat Semua</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchandiseItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MerchandiseCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;