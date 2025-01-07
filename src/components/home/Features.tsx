'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileSearch, 
  BarChart3, 
  Calendar, 
  Clock, 
  ShieldCheck,
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
    icon: Users,
    title: 'Digital Recruitment',
    description: 'Streamline your hiring process with our advanced applicant tracking system and automated screening tools.',
    color: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: FileSearch,
    title: 'HRIS Management',
    description: 'Centralize employee data, documents, and HR processes in one secure, easily accessible platform.',
    color: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track and analyze employee performance with customizable KPIs and real-time reporting dashboards.',
    color: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Effortlessly manage employee leave requests, approvals, and balance tracking.',
    color: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Monitor attendance, overtime, and work schedules with our comprehensive time management system.',
    color: 'bg-rose-50 dark:bg-rose-900/20'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    description: 'Stay compliant with labor laws and protect sensitive HR data with advanced security features.',
    color: 'bg-orange-50 dark:bg-orange-900/20'
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
      className="relative p-6 rounded-2xl"
    >
      <div className={`absolute inset-0 rounded-2xl ${feature.color} transform transition-transform duration-300 group-hover:scale-105`} />
      <div className="relative space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center">
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
            Comprehensive HR Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Everything you need to manage your workforce effectively in one integrated platform
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