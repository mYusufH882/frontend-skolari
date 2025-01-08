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

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    }
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
    <div className="relative h-screen overflow-hidden">
      {/* Background Slides Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 1 }
            }}
            className="relative w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-white drop-shadow-lg">{slides[currentSlide].title}</span>
                  <div className="text-[#EE1C25] mt-2 drop-shadow-lg">
                    {slides[currentSlide].subtitle}
                  </div>
                </h1>
                <p className="text-xl text-white mt-6 mb-8 leading-relaxed drop-shadow">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg bg-[#EE1C25] text-white font-medium flex items-center justify-center space-x-2 hover:bg-[#ff2c36] transition-colors shadow-lg"
                  >
                    <span>{slides[currentSlide].cta.primary}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors shadow-lg backdrop-blur-sm"
                  >
                    {slides[currentSlide].cta.secondary}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
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
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
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