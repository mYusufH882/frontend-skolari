'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Code2, Clock, Award, Globe2 } from 'lucide-react';

interface ValueProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const companyValues: ValueProps[] = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We continuously innovate our solutions to stay ahead of evolving HR needs.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. Were committed to helping you achieve your HR goals.'
  },
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'We maintain the highest standards in our technology and development practices.'
  }
];

const achievements = [
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Industry Awards'
  },
  {
    icon: Globe2,
    value: '20+',
    label: 'Countries Served'
  }
];

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 backdrop-blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Transforming HR Management Through Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              We're on a mission to revolutionize how companies handle their human resources
              with cutting-edge digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Founded with a vision to simplify HR processes, we've grown from a small team
                of passionate innovators to a leading provider of HR management solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our journey began when we recognized the challenges faced by HR professionals
                in managing modern workforce dynamics. This led us to develop comprehensive
                solutions that combine powerful technology with user-friendly interfaces.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-r from-primary-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-6">
                  <img
                    src="/api/placeholder/600/600"
                    alt="Team collaboration"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;