'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface MembershipPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  color: string;
}

const plans: MembershipPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "500K",
    period: "per bulan",
    description: "Cocok untuk pemula yang ingin memulai journey lari",
    features: [
      { feature: "2x sesi latihan per minggu", included: true },
      { feature: "Akses ke komunitas Skolari", included: true },
      { feature: "Program latihan dasar", included: true },
      { feature: "Konsultasi coach (1x/bulan)", included: true },
      { feature: "Tracking progress", included: true },
      { feature: "Video analisis teknik lari", included: false },
      { feature: "Nutrisi plan", included: false },
      { feature: "Personal coaching", included: false }
    ],
    color: "border-emerald-500"
  },
  {
    id: 2,
    name: "Pro",
    price: "750K",
    period: "per bulan",
    description: "Untuk runner yang ingin meningkatkan performa",
    features: [
      { feature: "3x sesi latihan per minggu", included: true },
      { feature: "Akses ke komunitas Skolari", included: true },
      { feature: "Program latihan menengah", included: true },
      { feature: "Konsultasi coach (2x/bulan)", included: true },
      { feature: "Tracking progress", included: true },
      { feature: "Video analisis teknik lari", included: true },
      { feature: "Nutrisi plan", included: true },
      { feature: "Personal coaching", included: false }
    ],
    popular: true,
    color: "border-[#EE1C25]"
  },
  {
    id: 3,
    name: "Elite",
    price: "1.2M",
    period: "per bulan",
    description: "Program khusus untuk atlet dan advanced runner",
    features: [
      { feature: "Unlimited sesi latihan", included: true },
      { feature: "Akses ke komunitas Skolari", included: true },
      { feature: "Program latihan advanced", included: true },
      { feature: "Konsultasi coach (unlimited)", included: true },
      { feature: "Tracking progress", included: true },
      { feature: "Video analisis teknik lari", included: true },
      { feature: "Nutrisi plan", included: true },
      { feature: "Personal coaching", included: true }
    ],
    color: "border-purple-500"
  }
];

const PlanCard: React.FC<{ plan: MembershipPlan; index: number }> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 ${plan.color}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-[#EE1C25] text-white text-sm font-medium rounded-full">
            Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">Rp {plan.price}</span>
          <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
        </div>
      </div>

      <div className="space-y-4">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <X className="w-5 h-5 text-gray-400" />
            )}
            <span className={`${
              feature.included 
                ? 'text-gray-700 dark:text-gray-300' 
                : 'text-gray-400 dark:text-gray-500'
            }`}>
              {feature.feature}
            </span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-8 px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-medium transition-colors ${
          plan.popular ? 'bg-[#EE1C25] hover:bg-red-600' : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
      >
        Pilih Paket
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Paket <span className="text-[#EE1C25]">Membership</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Pilih paket yang sesuai dengan tujuan lari Anda
            </motion.p>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Butuh Informasi Lebih Lanjut?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Konsultasikan kebutuhan Anda dengan tim kami
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#EE1C25] text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Hubungi Kami
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;