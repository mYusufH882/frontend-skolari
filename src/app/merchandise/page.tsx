'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew?: boolean;
}

const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'apparel', name: 'Pakaian Lari' },
  { id: 'shoes', name: 'Sepatu' },
  { id: 'accessories', name: 'Aksesoris' },
  { id: 'nutrition', name: 'Nutrisi' },
];

const products: Product[] = [
  {
    id: 1,
    name: "Pro Runner Jersey 2024",
    price: 299000,
    category: "apparel",
    image: "/images/merchandise/merchan-2.jpg",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Speed Runner Shoes X1",
    price: 1299000,
    category: "shoes",
    image: "/images/merchandise/merchan-3.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Premium Running Bottle",
    price: 159000,
    category: "accessories",
    image: "/images/merchandise/merchan-4.jpg",
    rating: 4.7
  },
  {
    id: 4,
    name: "Energy Gel Pack (Box)",
    price: 199000,
    category: "nutrition",
    image: "/images/merchandise/merchan-5.jpg",
    rating: 4.6
  },
  // Tambahkan produk lainnya di sini
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{product.rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-red-500">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300">
            <ShoppingCart className="w-4 h-4" />
            <span>Beli</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MerchandisePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Skolari Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Lengkapi perjalanan lari Anda dengan koleksi merchandise premium dan perlengkapan berkualitas tinggi
          </motion.p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MerchandisePage;