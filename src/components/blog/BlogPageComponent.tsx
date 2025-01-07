'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ChevronRight, Tag } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  Category: string;
  Content: string;
  CoverImage: {
    id: number;
    documentId: string;
    name: string;
  };
  Excerpt: string;
  Published: string;
  Slug: string;
  Title: string;
  createdAt: string;
  documentId: string;
  publishedAt: string;
  updatedAt: string;
}



interface BlogPageComponentProps {
  initialPosts: BlogPost[];
}

const categories = [
  'All',
  'Trends',
  'Technology',
  'Employee Engagement',
  'HR Management',
  'Leadership',
  'Recruitment'
];


const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  if (!post) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    switch (category.trim()) {
      case 'News':
        return 'bg-blue-500';
      case 'Tutorial':
        return 'bg-green-500';
      case 'Update':
        return 'bg-purple-500';
      default:
        return 'bg-primary-500';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
    >
      <div className="relative overflow-hidden">
        <img
          src="/api/placeholder/600/400"
          alt={post.Title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${getCategoryColor(post.Category.split(',')[0])} text-white text-sm font-medium rounded-full`}>
            {post.Category.split(',')[0].trim()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/api/placeholder/40/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Admin
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{new Date(post.Published).toLocaleDateString()}</span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                5 min read
              </span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {post.Title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.Excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.Category.split(',').map((category) => (
            <span
              key={category.trim()}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-full flex items-center"
            >
              <Tag className="w-3 h-3 mr-1" />
              {category.trim()}
            </span>
          ))}
        </div>
        
        <Link 
          href={`/blog/${post.Slug}`}
          className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600 transition-colors"
        >
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const BlogPageComponent: React.FC<BlogPageComponentProps> = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog-posts`
        );
        console.log('Response:', response.data);
        // Data sudah dalam format yang benar, tidak perlu .data
        setPosts(response.data.data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log('Current posts:', posts);
  console.log('Loading:', loading);


  const categories = ['All', 'News', 'Tutorial', 'Update'];

  const filteredPosts = posts.filter((post) => {
    if (!post) return false;

    const matchesSearch = (post.Title || '')
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      (post.Excerpt || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || 
      post.Category.split(',').some(cat => 
        cat.trim() === selectedCategory
      );

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // Show error state


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
              HR Insights & Updates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Stay informed about the latest trends, best practices, and innovations in HR management
            </motion.p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                />
                <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                No posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Get the latest HR insights and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              />
              <button className="px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageComponent;