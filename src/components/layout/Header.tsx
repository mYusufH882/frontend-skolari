'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Program', href: '/program' },
    { name: 'Jadwal', href: '/jadwal' },
    { name: 'Coach', href: '/coach' },
    { name: 'Merchandise', href: '/merchandise' },
    { name: 'Membership', href: '/membership' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const headerClass = `fixed w-full z-30 transition-all duration-300 ${
    scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'
  }`;

  return (
    <header className={headerClass}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <Image 
              src="/images/skolari-logo.png" // atau .png
              alt="Skolari Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:block">
              SKOLARI
            </span>
          </motion.div>
        </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#EE1C25] dark:text-gray-300 dark:hover:text-[#EE1C25] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md text-gray-700 hover:text-[#EE1C25] dark:text-gray-300 dark:hover:text-[#EE1C25] transition-colors"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#EE1C25] dark:text-gray-300 dark:hover:text-[#EE1C25]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#EE1C25] dark:text-gray-300 dark:hover:text-[#EE1C25]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#EE1C25] dark:text-gray-300 dark:hover:text-[#EE1C25]"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;