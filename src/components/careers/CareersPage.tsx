'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  ChevronRight,
  Code,
  PieChart,
  Users,
  HeartHandshake,
  GraduationCap,
  Wallet
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$60,000 - $80,000',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build the next generation of HR management tools.',
    requirements: [
      'Strong experience with React, TypeScript, and modern frontend tooling',
      'Experience with responsive design and web accessibility',
      'Knowledge of state management solutions (Redux, Context API)',
      'Understanding of CI/CD practices'
    ],
    benefits: [
      'Competitive salary package',
      'Remote work options',
      'Health insurance',
      'Annual learning budget'
    ]
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$50,000 - $70,000',
    description: 'Join our product team to help shape the future of our HR management solutions.',
    requirements: [
      'Experience in B2B SaaS product management',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management',
      'Knowledge of HR/recruitment domain is a plus'
    ],
    benefits: [
      'Performance bonuses',
      'Flexible working hours',
      'Professional development',
      'Stock options'
    ]
  }
];

const perks = [
  {
    icon: Wallet,
    title: 'Competitive Salary',
    description: 'We offer above-market compensation packages'
  },
  {
    icon: HeartHandshake,
    title: 'Work-Life Balance',
    description: 'Flexible hours and remote work options'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Dedicated budget for professional development'
  }
];

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium">
            {job.department}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {job.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {job.title}
        </h3>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <MapPin className="w-4 h-4 mr-1" /> {job.location}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
            Experience: {job.experience}
          </div>
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
            Salary: {job.salary}
          </div>
        </div>

        <button className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2">
          <span>View Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Product', 'Sales', 'Marketing', 'HR'];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
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
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Help us shape the future of HR management and build amazing products
              that make a difference.
            </motion.p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                />
                <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedDepartment === dept
                        ? 'bg-primary-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                No positions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;