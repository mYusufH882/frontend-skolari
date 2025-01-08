'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock,
  CreditCard
} from 'lucide-react';

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
  products: number;
}

// Sample Data
const featuredCollections: Collection[] = [
  {
    id: 1,
    name: "Marathon Collection",
    description: "Perlengkapan premium untuk persiapan marathon Anda",
    image: "/images/merchandise/m-hero-3.jpg",
    products: 12
  },
  {
    id: 2,
    name: "Training Essentials",
    description: "Kebutuhan dasar untuk latihan rutin",
    image: "/images/merchandise/m-hero-4.jpg",
    products: 8
  },
  {
    id: 3,
    name: "Performance Series",
    description: "Koleksi khusus untuk performa maksimal",
    image: "/images/merchandise/m-hero-5.jpg",
    products: 15
  }
];

const bestSellers: Product[] = [
  {
    id: 1,
    name: "Pro Runner Jersey 2024",
    price: 299000,
    category: "apparel",
    image: "/images/merchandise/merchan-2.jpg",
    rating: 4.8,
    isBestSeller: true
  },
  // Add more products...
];

// Components
const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-gray-900">
      <div className="absolute inset-0 bg-black/50">
        <img 
          src="/images/merchandise/m-hero-2.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            New Collection <br/>
            <span className="text-red-500">Summer 2024</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Tingkatkan performa lari Anda dengan koleksi merchandise premium terbaru
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 flex items-center gap-2"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const ValuePropositions = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Gratis ongkir untuk pembelian di atas Rp 500.000"
    },
    {
      icon: ShieldCheck,
      title: "Product Guarantee",
      description: "Garansi produk 30 hari untuk semua item"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Pengiriman cepat ke seluruh Indonesia"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pembayaran aman dengan berbagai metode"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-400">
            Discover our curated collections for every running need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-gray-200 mb-4">{collection.description}</p>
                  <p className="text-sm">{collection.products} Products</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellers = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Best Sellers
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our most popular products loved by runners
            </p>
          </div>
          <button className="text-red-500 hover:text-red-600 flex items-center gap-2">
            View All <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Best Seller
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {product.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StorePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <ValuePropositions />
      <FeaturedCollections />
      <BestSellers />
      {/* Add more sections as needed */}
    </div>
  );
};

export default StorePage;