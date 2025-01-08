'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users2, Timer, Star } from 'lucide-react';

interface Stat {
  icon: typeof Trophy;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Users2,
    value: '1000+',
    label: 'Alumni Runners'
  },
  {
    icon: Trophy,
    value: '50+',
    label: 'Race Winners'
  },
  {
    icon: Timer,
    value: '300+',
    label: 'Training Sessions'
  },
  {
    icon: Star,
    value: '95%',
    label: 'Member Satisfaction'
  }
];

const StatsAndCTA: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 dark:opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply blur-xl animate-blob" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-50 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl bg-gradient-to-r from-red-600 to-rose-600 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Siap Memulai Perjalanan Lari Anda?
                </h2>
                <p className="text-lg text-white/80">
                  Bergabunglah dengan komunitas pelari kami dan raih target lari Anda dengan program latihan profesional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg bg-white text-red-600 font-medium flex items-center space-x-2 hover:bg-gray-50 transition-colors"
                  >
                    <span>Mulai Berlatih</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Konsultasi Gratis
                  </motion.button>
                </div>
              </div>
              <div className="hidden lg:block">
                {/* Running-themed decoration */}
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-xl backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndCTA;