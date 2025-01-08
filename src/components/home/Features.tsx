'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Timer, 
  Trophy,
  Calendar, 
  Heart,
  Target,
  LucideIcon 
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: Feature[] = [
  {
    icon: Timer,
    title: 'Program Terstruktur',
    description: 'Program latihan yang disesuaikan dengan level dan target Anda, dari pemula hingga atlet.',
    color: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: Users,
    title: 'Coach Profesional',
    description: 'Tim pelatih berpengalaman dan bersertifikasi yang akan membimbing Anda mencapai tujuan.',
    color: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: Trophy,
    title: 'Race Preparation',
    description: 'Persiapan khusus untuk menghadapi berbagai jenis perlombaan lari dengan strategi yang tepat.',
    color: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: Calendar,
    title: 'Jadwal Fleksibel',
    description: 'Pilih jadwal latihan yang sesuai dengan kesibukan Anda, tersedia berbagai sesi setiap hari.',
    color: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: Heart,
    title: 'Komunitas Supportif',
    description: 'Bergabung dengan komunitas pelari yang saling mendukung dan memotivasi dalam mencapai goals.',
    color: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: Target,
    title: 'Performance Tracking',
    description: 'Pantau dan analisa perkembangan performa lari Anda dengan teknologi tracking modern.',
    color: 'bg-rose-50 dark:bg-rose-900/20'
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
    >
      <div className={`absolute inset-0 rounded-2xl ${feature.color}`} />
      <div className="relative space-y-4">
        <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Program Unggulan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Kembangkan potensi lari Anda dengan program komprehensif yang didukung oleh tim profesional
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;