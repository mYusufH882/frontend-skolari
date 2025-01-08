'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Tingkatkan",
    subtitle: "Performa Lari Anda",
    description: "Program latihan terstruktur dengan coach profesional untuk semua level pelari",
    image: "/images/hero-1.jpg",
    cta: {
      primary: "Mulai Berlatih",
      secondary: "Pelajari Lebih Lanjut"
    }
  },
  {
    id: 2,
    title: "Persiapan",
    subtitle: "Event & Marathon",
    description: "Program khusus untuk persiapan lomba lari dengan strategi yang teruji",
    image: "/images/hero-2.jpg",
    cta: {
      primary: "Daftar Sekarang",
      secondary: "Lihat Program"
    }
  },
  {
    id: 3,
    title: "Bergabung",
    subtitle: "Dengan Komunitas Kami",
    description: "Dapatkan dukungan dan motivasi dari komunitas pelari yang bersemangat",
    image: "/images/hero-3.jpg",
    cta: {
      primary: "Gabung Sekarang",
      secondary: "Lihat Komunitas"
    }
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* Image Background */}

          <div className="relative w-full h-full">
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover object-right" // Ubah ke object-right untuk posisi gambar di kanan
            priority
          />
          {/* Dark overlay dengan gradient */}
          <div className="absolute inset-0 bg-[#1a1f2e]/80" /> {/* Background lebih gelap */}
          {/* Gradient dari kiri ke kanan untuk memisahkan teks */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#1a1f2e]/90 to-transparent" />
        </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}

      <div className="relative h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-xl pl-0 lg:pl-4" // Tambah padding left pada desktop
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">{slides[currentSlide].title}</span>
                    <div className="text-[#EE1C25] mt-2"> {/* Tambah margin top */}
                      {slides[currentSlide].subtitle}
                    </div>
                  </h1>
                  <p className="text-xl text-gray-300 mt-6 mb-8">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-lg bg-[#EE1C25] text-white font-medium flex items-center justify-center space-x-2"
                    >
                      <span>{slides[currentSlide].cta.primary}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10 transition-colors"
                    >
                      {slides[currentSlide].cta.secondary}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#EE1C25] w-6' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;