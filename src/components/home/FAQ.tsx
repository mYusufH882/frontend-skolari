'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How quickly can we implement the HR system?',
    answer: 'Our implementation process typically takes 2-4 weeks, depending on your organizations size and specific requirements. We provide dedicated support throughout the implementation to ensure a smooth transition.'
  },
  {
    question: 'Is the system customizable to our specific needs?',
    answer: 'Yes, our HR system is highly customizable. You can configure workflows, forms, approval processes, and reports to match your organizations specific requirements and processes.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, regular training sessions, and dedicated account managers. Our support team is available via email, phone, and live chat to assist you with any questions or issues.'
  },
  {
    question: 'How secure is the data in your system?',
    answer: 'We implement enterprise-grade security measures including encryption, regular backups, and compliance with international data protection standards. Your data is stored in secure, ISO-certified data centers.'
  },
  {
    question: 'Can the system integrate with our existing software?',
    answer: 'Yes, our system offers API integration capabilities with many popular business software including payroll systems, time tracking tools, and other HR-related applications.'
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
  item,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-primary-500" />
          ) : (
            <Plus className="w-6 h-6 text-primary-500" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-300">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Everything you need to know about our HR management system
            </motion.p>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                item={faq}
                isOpen={index === openIndex}
                onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;