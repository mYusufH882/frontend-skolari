'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Lock, Tag, Clock, Star } from 'lucide-react';
import Link from 'next/link';

interface MerchandiseItem {
  id: number;
  title: string;
  brand: string;
  image: string;
  disc: string;
  price?: string;
  rating?: number;
  isLocked?: boolean;
  isBestSeller?: boolean;
}

const merchandiseItems: MerchandiseItem[] = [
  {
    id: 1,
    title: "Running Jersey Pro Series",
    brand: "Skolari Running",
    image: "/images/merchandise/merchan-2.jpg",
    disc: "Discount Up to 30%",
    price: "Rp 299.000",
    rating: 4.8,
    isBestSeller: true
  },
  {
    id: 2,
    title: "Performance Running Shoes",
    brand: "Skolari X Pro",
    image: "/images/merchandise/merchan-3.jpg",
    disc: "15% OFF",
    price: "Rp 1.299.000",
    rating: 4.9
  },
  {
    id: 3,
    title: "Compression Socks Elite",
    brand: "Skolari Premium",
    image: "/images/merchandise/merchan-4.jpg",
    disc: "10% OFF",
    price: "Rp 159.000",
    rating: 4.7
  },
  {
    id: 4,
    title: "Training Shorts Pro",
    brand: "Skolari Sport",
    image: "/images/merchandise/merchan-5.jpg",
    disc: "30% OFF",
    price: "Rp 249.000",
    rating: 4.6
  }
];

const MerchandiseCard: React.FC<{ item: MerchandiseItem }> = ({ item }) => {
  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {item.isLocked && (
        <div className="absolute top-4 left-4 z-10">
          <Lock className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="relative overflow-hidden rounded-t-xl">
        {item.isBestSeller && (
          <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-semibold rounded-full flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Best Seller
          </div>
        )}
        {item.disc && (
          <div className="absolute top-4 right-4 bg-gray-900/70 text-white px-3 py-1 text-sm rounded-full z-10 flex items-center">
            {item.disc.includes("OFF") || item.disc.includes("Discount") ? (
              <Tag className="w-4 h-4 mr-1" />
            ) : (
              <Clock className="w-4 h-4 mr-1" />
            )}
            {item.disc}
          </div>
        )}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.brand}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">{item.rating}</span>
          </div>
          <span className="text-lg font-bold text-red-500">{item.price}</span>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300 rounded-xl pointer-events-none" />
    </div>
  );
};

const Merchandise: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-8 mb-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium px-4 py-1 rounded-full">
                New Collection
              </span>
            </motion.div>
            
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
              Dapatkan koleksi merchandise terbaru dari Skolari. Desain eksklusif dan kualitas
              premium untuk para pelari sejati.
            </motion.p>
          </div>
          
          <Link 
            href="/merchandise" 
            className="group flex items-center text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            <span className="mr-2 font-medium">Lihat Semua</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchandiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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