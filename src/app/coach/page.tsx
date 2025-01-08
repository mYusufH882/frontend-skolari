'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Trophy, Calendar, Users, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

interface Achievement {
  icon: React.ReactNode;
  title: string;
}

interface Coach {
  id: number;
  name: string;
  role: string;
  image: string;
  specialization: string[];
  experience: string;
  achievements: Achievement[];
  description: string;
  instagram: string;
  email: string;
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Coach Andi",
    role: "Head Coach",
    image: "/images/coach/coach-1.jpg",
    specialization: ["Marathon Training", "Speed Work", "Recovery"],
    experience: "10+ tahun",
    achievements: [
      { icon: <Medal className="w-5 h-5" />, title: "Boston Marathon Finisher" },
      { icon: <Trophy className="w-5 h-5" />, title: "Jakarta Marathon Winner 2019" },
      { icon: <Users className="w-5 h-5" />, title: "500+ Runners Trained" }
    ],
    description: "Coach Andi adalah pelari berpengalaman dengan fokus pada marathon training. Telah melatih ratusan pelari dari berbagai level untuk mencapai tujuan mereka.",
    instagram: "@coach.andi",
    email: "andi@skolari.id"
  },
  {
    id: 2,
    name: "Coach Sarah",
    role: "Sprint & Speed Coach",
    image: "/images/coach/coach-2.jpg",
    specialization: ["Sprint Training", "Interval Training", "Strength & Conditioning"],
    experience: "8+ tahun",
    achievements: [
      { icon: <Medal className="w-5 h-5" />, title: "SEA Games Gold Medalist" },
      { icon: <Trophy className="w-5 h-5" />, title: "National Sprint Champion" },
      { icon: <Calendar className="w-5 h-5" />, title: "Certified Sprint Coach" }
    ],
    description: "Spesialis dalam sprint dan interval training, Coach Sarah fokus pada peningkatan kecepatan dan teknik lari yang efisien.",
    instagram: "@coach.sarah",
    email: "sarah@skolari.id"
  },
  {
    id: 3,
    name: "Coach Budi",
    role: "Endurance Coach",
    image: "/images/coach/coach-3.jpg",
    specialization: ["Ultra Marathon", "Trail Running", "Endurance Building"],
    experience: "12+ tahun",
    achievements: [
      { icon: <Medal className="w-5 h-5" />, title: "Ultra Trail Mount Fuji Finisher" },
      { icon: <Trophy className="w-5 h-5" />, title: "100K Ultra Runner" },
      { icon: <Users className="w-5 h-5" />, title: "Lead Coach for Trail Runners" }
    ],
    description: "Expert dalam ultra marathon dan trail running, Coach Budi membantu pelari mengembangkan endurance dan mental strength.",
    instagram: "@coach.budi",
    email: "budi@skolari.id"
  },
  {
    id: 4,
    name: "Coach Diana",
    role: "Beginner Specialist",
    image: "/images/coach/coach-4.jpg",
    specialization: ["Beginner Running", "Form & Technique", "Injury Prevention"],
    experience: "6+ tahun",
    achievements: [
      { icon: <Medal className="w-5 h-5" />, title: "Running Form Specialist" },
      { icon: <Trophy className="w-5 h-5" />, title: "Running Technique Expert" },
      { icon: <Calendar className="w-5 h-5" />, title: "Certified Running Coach" }
    ],
    description: "Coach Diana memiliki passion dalam membantu pemula memulai perjalanan lari mereka dengan teknik yang benar dan aman.",
    instagram: "@coach.diana",
    email: "diana@skolari.id"
  }
];

const CoachCard: React.FC<{ coach: Coach; index: number }> = ({ coach, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-72">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">{coach.name}</h3>
          <p className="text-[#EE1C25] font-medium">{coach.role}</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {coach.specialization.map((spec, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="text-gray-600 dark:text-gray-300">
          {coach.description}
        </div>

        <div className="space-y-2">
          {coach.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span className="text-[#EE1C25]">{achievement.icon}</span>
              {achievement.title}
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Instagram className="w-5 h-5 text-[#EE1C25]" />
            {coach.instagram}
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Mail className="w-5 h-5 text-[#EE1C25]" />
            {coach.email}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoachPage = () => {
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
              Tim <span className="text-[#EE1C25]">Coach</span> Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Dipimpin oleh para coach profesional dan berpengalaman
            </motion.p>
          </div>
        </div>
      </div>

      {/* Coaches Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.id} coach={coach} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachPage;