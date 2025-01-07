'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    'Digital Recruitment System',
    'Modern HRIS Solution',
    'Employee Management',
    'Performance Analytics'
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-200 dark:bg-primary-800/50 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-300 dark:bg-primary-700/50 blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                HR Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Streamline your recruitment process and HR operations with our comprehensive digital solution.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - Floating illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Abstract shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-100 dark:bg-primary-800 rounded-lg rotate-12 animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary-200 dark:bg-primary-700 rounded-full animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary-400 to-primary-500 dark:from-primary-600 dark:to-primary-700 rounded-xl rotate-45 animate-pulse" />
              </div>
              
              {/* Dashboard mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-primary-50 dark:bg-primary-900/30 rounded-lg" />
                    <div className="h-20 bg-primary-50 dark:bg-primary-900/30 rounded-lg" />
                    <div className="h-20 bg-primary-50 dark:bg-primary-900/30 rounded-lg" />
                    <div className="h-20 bg-primary-50 dark:bg-primary-900/30 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;