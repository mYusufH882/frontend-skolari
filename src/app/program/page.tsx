'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Timer, Award, Calendar } from 'lucide-react';
import Image from 'next/image';

interface Program {
  id: number;
  title: string;
  level: string;
  description: string;
  duration: string;
  sessions: string;
  features: string[];
  price: string;
  image: string;
  color: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Program Pemula",
    level: "Beginner",
    description: "Program khusus untuk Anda yang baru memulai perjalanan lari. Fokus pada pembentukan dasar dan teknik yang benar.",
    duration: "3 Bulan",
    sessions: "2-3x per minggu",
    features: [
      "Fundamental teknik lari",
      "Program latihan dasar",
      "Pemahaman pace & breathing",
      "Komunitas supportif",
      "Konsultasi dengan coach",
      "Video tutorial"
    ],
    price: "Rp 500.000/bulan",
    image: "/images/program/program-1.jpg",
    color: "bg-emerald-500"
  },
  {
    id: 2,
    title: "Program Menengah",
    level: "Intermediate",
    description: "Tingkatkan performa lari Anda dengan program yang lebih intensif dan teknik lanjutan.",
    duration: "4 Bulan",
    sessions: "3-4x per minggu",
    features: [
      "Latihan interval & tempo",
      "Penguatan otot runner",
      "Program nutrisi khusus",
      "Race simulation",
      "Group running session",
      "Progress tracking"
    ],
    price: "Rp 750.000/bulan",
    image: "/images/program/program-2.jpg",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Program Lanjutan",
    level: "Advanced",
    description: "Program intensif untuk pelari berpengalaman yang ingin mencapai level kompetitif.",
    duration: "6 Bulan",
    sessions: "4-5x per minggu",
    features: [
      "Advanced running techniques",
      "Personal training plan",
      "Race strategy development",
      "Recovery management",
      "Performance analysis",
      "Elite runner community"
    ],
    price: "Rp 1.000.000/bulan",
    image: "/images/program/program-3.jpg",
    color: "bg-[#EE1C25]"
  },
  {
    id: 4,
    title: "Persiapan Marathon",
    level: "Race Prep",
    description: "Program spesifik untuk persiapan event marathon dengan strategi race yang teruji.",
    duration: "16 Minggu",
    sessions: "4-6x per minggu",
    features: [
      "Marathon-specific training",
      "Pacing strategies",
      "Nutrition planning",
      "Race day preparation",
      "Recovery techniques",
      "Mental conditioning"
    ],
    price: "Rp 1.500.000/bulan",
    image: "/images/program/program-4.jpg",
    color: "bg-purple-500"
  }
];

const ProgramCard: React.FC<{ program: Program; index: number }> = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
        <div className={`absolute top-4 right-4 ${program.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {program.level}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {program.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {program.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {program.duration}
          </div>
          <div className="flex items-center gap-1">
            <Timer className="w-4 h-4" />
            {program.sessions}
          </div>
        </div>

        <div className="space-y-3">
          {program.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Award className="w-5 h-5 text-[#EE1C25] flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#EE1C25]">
            {program.price}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-[#EE1C25] text-white font-medium flex items-center gap-2"
          >
            Daftar
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#EE1C25]/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Program Latihan <span className="text-[#EE1C25]">Skolari</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Pilih program yang sesuai dengan level dan target Anda
            </motion.p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;