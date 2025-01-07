'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, FileText, BarChart2, Clock, Shield, Brain,
  CheckCircle, ChevronRight, ArrowRight
} from 'lucide-react';

interface Product {
  id: string;
  icon: React.ElementType;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 'recruitment',
    icon: Users,
    name: 'Recruitment System',
    description: 'Streamline your hiring process with our advanced applicant tracking and recruitment management system.',
    features: [
      'AI-powered candidate screening',
      'Customizable application forms',
      'Interview scheduling',
      'Automated email communications',
      'Analytics and reporting',
      'Integration with job boards'
    ],
    popular: true
  },
  {
    id: 'hris',
    icon: FileText,
    name: 'HRIS Core',
    description: 'Comprehensive HR management system for employee data, documents, and core HR processes.',
    features: [
      'Employee database management',
      'Document management',
      'Organization structure',
      'Asset management',
      'Employee self-service portal',
      'Custom workflow builder'
    ]
  },
  {
    id: 'performance',
    icon: BarChart2,
    name: 'Performance Management',
    description: 'Track and improve employee performance with our advanced performance management tools.',
    features: [
      'KPI tracking',
      'Performance reviews',
      'Goal management',
      '360° feedback',
      'Skills assessment',
      'Development planning'
    ]
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
    >
      {product.popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-sm font-medium text-white bg-primary-500 rounded-full">
            Popular
          </span>
        </div>
      )}
      
      <div className="p-6">
        <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
          <product.icon className="w-6 h-6 text-primary-500" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {product.description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProductComparison: React.FC = () => {
  const features = [
    'Employee Database',
    'Document Management',
    'Mobile App Access',
    'API Integration',
    'Custom Reports',
    'Multi-language Support'
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-4 px-6 text-gray-600 dark:text-gray-300">Features</th>
            <th className="text-center py-4 px-6 text-gray-900 dark:text-white">Basic</th>
            <th className="text-center py-4 px-6 text-gray-900 dark:text-white">Professional</th>
            <th className="text-center py-4 px-6 text-gray-900 dark:text-white">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{feature}</td>
              <td className="text-center py-4 px-6">
                <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
              </td>
              <td className="text-center py-4 px-6">
                <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
              </td>
              <td className="text-center py-4 px-6">
                <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Comprehensive HR solutions designed to streamline your operations
              and enhance productivity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your organization's needs
            </p>
          </div>
          <ProductComparison />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Contact our team for a personalized demo and discover how our solutions
              can transform your HR operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium inline-flex items-center space-x-2"
            >
              <span>Contact Sales</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;