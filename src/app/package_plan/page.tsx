'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PlanFeature {
  feature: string;
}

interface WebsitePlan {
  id: number;
  name: string;
  price: string;
  description: string;
  frontendFeatures: PlanFeature[];
  backendFeatures: PlanFeature[];
  technology: PlanFeature[];
  benefits: PlanFeature[];
  timeline: string;
  support: string;
  popular?: boolean;
  color: string;
}

const plans: WebsitePlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "8.500.000",
    description: "Solusi digital dasar untuk sekolah lari yang baru memulai.",
    frontendFeatures: [
      { feature: "Home page dengan informasi dasar sekolah lari" },
      { feature: "Halaman Program dengan daftar program latihan" },
      { feature: "Halaman Coach/Personal Trainee (profil dasar)" },
      { feature: "Blog sederhana untuk artikel seputar lari" },
      { feature: "Halaman Event/Jadwal simple" }
    ],
    backendFeatures: [
      { feature: "Manajemen konten edukasi dasar" },
      { feature: "Dashboard analytics sederhana" },
      { feature: "Manajemen keanggotaan basic" },
      { feature: "Admin chat bot sederhana" },
      { feature: "Sistem reservasi kelas basic" }
    ],
    technology: [
      { feature: "Next.js untuk frontend" },
      { feature: "JavaScript & Admin.js untuk backend" },
      { feature: "Database MySQL" },
      { feature: "Hosting 1 tahun" },
      { feature: "Domain .com 1 tahun" }
    ],
    benefits: [
      { feature: "Setup cepat (1 bulan)" },
      { feature: "Mudah dikelola" },
      { feature: "Biaya maintenance rendah" },
      { feature: "Cocok untuk skala startup" }
    ],
    timeline: "3-4 minggu",
    support: "2 bulan",
    color: "border-emerald-500"
  },
  {
    id: 2,
    name: "Pro",
    price: "15.000.000",
    description: "Solusi lengkap yang optimal untuk startup sekolah lari yang ingin berkembang.",
    frontendFeatures: [
      { feature: "Sistem Membership dengan level akses" },
      { feature: "Halaman Event/Jadwal lengkap" },
      { feature: "Merchandise shop simple" },
      { feature: "Blog dengan kategorisasi" },
      { feature: "Integrasi media sosial" }
    ],
    backendFeatures: [
      { feature: "Manajemen jadwal coaching" },
      { feature: "Sistem payroll basic" },
      { feature: "Pelacakan kemajuan atlet" },
      { feature: "Payment gateway (Midtrans)" },
      { feature: "Enhanced dashboard analytics" }
    ],
    technology: [
      { feature: "Next.js dengan optimasi performa" },
      { feature: "JavaScript & Admin.js dengan custom modules" },
      { feature: "Database PostgreSQL" },
      { feature: "Hosting premium 1 tahun" },
      { feature: "SSL Certificate" }
    ],
    benefits: [
      { feature: "Fitur bisnis lengkap" },
      { feature: "Skalabilitas menengah" },
      { feature: "Support teknis prioritas" },
      { feature: "Training staff 2x" }
    ],
    timeline: "6-8 minggu",
    support: "4 bulan",
    popular: true,
    color: "border-[#EE1C25]"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "35.000.000",
    description: "Solusi premium untuk sekolah lari yang menginginkan sistem ter-advance.",
    frontendFeatures: [
      { feature: "Sistem membership premium dengan rewards" },
      { feature: "Virtual event platform" },
      { feature: "Integrasi marketplace" },
      { feature: "Live streaming capability" },
      { feature: "Progressive Web App (PWA)" }
    ],
    backendFeatures: [
      { feature: "Sistem payroll advance dengan slip gaji" },
      { feature: "Advanced analytics & reporting" },
      { feature: "Multi-payment gateway" },
      { feature: "CRM system" },
      { feature: "Automated marketing tools" }
    ],
    technology: [
      { feature: "Next.js dengan arsitektur mikroservis" },
      { feature: "JavaScript & Admin.js enterprise version" },
      { feature: "Database PostgreSQL dengan clustering" },
      { feature: "Cloud hosting premium" },
      { feature: "Extended SSL Certificate" }
    ],
    benefits: [
      { feature: "Solusi end-to-end" },
      { feature: "24/7 technical support" },
      { feature: "Training staff unlimited" },
      { feature: "SLA guarantee" }
    ],
    timeline: "12-16 minggu",
    support: "12 bulan",
    color: "border-purple-500"
  }
];

const FeatureSection: React.FC<{ title: string; features: PlanFeature[] }> = ({ title, features }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
    <div className="space-y-2">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-gray-700 dark:text-gray-300">{feature.feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const PlanCard: React.FC<{ plan: WebsitePlan; index: number }> = ({ plan, index }) => {
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Paket {plan.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">Rp {plan.price}</span>
        </div>
      </div>

      <FeatureSection title="Fitur Frontend" features={plan.frontendFeatures} />
      <FeatureSection title="Fitur Backend" features={plan.backendFeatures} />
      <FeatureSection title="Teknologi" features={plan.technology} />
      <FeatureSection title="Keuntungan" features={plan.benefits} />

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Waktu Pengembangan:</span>
          <span className="font-medium text-gray-900 dark:text-white">{plan.timeline}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">After-Sales Support:</span>
          <span className="font-medium text-gray-900 dark:text-white">{plan.support}</span>
        </div>
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

const WebsitePackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#EE1C25]/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Perbandingan <span className="text-[#EE1C25]">Paket Website</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Pilih paket pengembangan website yang sesuai dengan kebutuhan sekolah lari Anda
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Informasi Pembayaran & Garansi
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">DP 30%</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Cicilan 3x dengan progress milestone</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Garansi bug 3 bulan</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Harga sudah termasuk deployment dan training</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Konsultasi teknis gratis selama masa pengembangan</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#EE1C25] text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Hubungi Kami untuk Konsultasi
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WebsitePackagesPage;