'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
          <div className="flex items-center space-x-2">
          <Image 
            src="/images/skolari-logo.png" // atau .png
            alt="Skolari Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-white">SKOLARI</span>
        </div>
            <p className="text-sm">
              Komunitas pelari terbaik dengan program latihan terstruktur dan didampingi coach profesional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Program Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/program/beginner" className="hover:text-red-500 transition-colors">
                  Program Pemula
                </Link>
              </li>
              <li>
                <Link href="/program/intermediate" className="hover:text-red-500 transition-colors">
                  Program Menengah
                </Link>
              </li>
              <li>
                <Link href="/program/advanced" className="hover:text-red-500 transition-colors">
                  Program Lanjutan
                </Link>
              </li>
              <li>
                <Link href="/program/race" className="hover:text-red-500 transition-colors">
                  Persiapan Lomba
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 text-red-500" />
                <span>info@Skolari.id</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 text-red-500" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-red-500" />
                <span>Gelora Bung Karno, Jakarta</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Dapatkan info terbaru seputar program latihan dan event lari.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Skolari. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-red-500 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;