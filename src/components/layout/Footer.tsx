'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" className="w-full h-full text-primary-500" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">HRSystem</span>
            </div>
            <p className="text-sm">
              Transforming HR management with innovative digital solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 text-primary-500" />
                <span>contact@hrsystem.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 text-primary-500" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-primary-500" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates and insights about HR management.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} HRSystem. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;