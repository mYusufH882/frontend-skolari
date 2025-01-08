'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const benefits = [
  {
    id: 1,
    title: "Bebas Akses ke Semua Club Skolari",
    description: "Nikmati kebebasan berolahraga di seluruh club Skolari di Indonesia. Akses tidak terbatas ke semua fasilitas dan kelas.",
    image: "/images/gym-1.jpg",
    highlight: true
  },
  {
    id: 2,
    title: "Lebih dari 4000+ Kelas Per Bulan",
    description: "Pilihan kelas yang beragam dengan jadwal fleksibel. Dari yoga hingga HIIT, temukan kelas yang sesuai dengan gaya hidupmu.",
    image: "/images/gym-2.jpg",
    highlight: false
  },
  {
    id: 3,
    title: "Fasilitas Terlengkap",
    description: "Peralatan gym modern, area kardio, studio kelas, kolam renang, dan berbagai fasilitas premium lainnya untuk mendukung latihan Anda.",
    image: "/images/gym-3.png",
    highlight: false
  },
  {
    id: 4,
    title: "Akses 24 Jam Setiap Hari",
    description: "Latihan kapanpun Anda mau. Club Skolari buka 24 jam setiap hari untuk mengakomodasi jadwal sibuk Anda.",
    image: "/images/gym-4.jpg",
    highlight: false
  },
  {
    id: 5,
    title: "Kelas Grup Pilates+ Terbesar & Terlengkap di Indonesia",
    description: "Program Pilates+ eksklusif dengan instruktur bersertifikasi dan peralatan premium untuk hasil maksimal.",
    image: "/images/gym-5.png",
    highlight: false
  },
  {
    id: 6,
    title: "Tersedia Peminjaman Handuk Gratis",
    description: "Handuk bersih tersedia gratis setiap kali Anda berlatih. Fokus pada latihan tanpa perlu repot membawa handuk.",
    image: "/images/gym-6.jpg",
    highlight: false
  }
];

const GymBenefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait for mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleBenefitClick = (benefit) => {
    if (!isAnimating && benefit.id !== selectedBenefit.id) {
      setIsAnimating(true);
      setSelectedBenefit(benefit);
    }
  };

  return (
    <section className="bg-white dark:bg-[#111111] min-h-screen py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Berbagai Keuntungan Lari di Skolari
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Alasan Kenapa Kamu Harus Lari di Skolari
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleBenefitClick(benefit)}
                className={`p-4 rounded-lg border ${
                  benefit.id === selectedBenefit.id 
                    ? 'border-blue-500 bg-blue-600 text-white' 
                    : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50'
                } 
                transition-all duration-300 cursor-pointer`}
              >
                <p className="text-lg font-medium">{benefit.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={selectedBenefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={selectedBenefit.image}
                    alt={selectedBenefit.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedBenefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedBenefit.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymBenefits;