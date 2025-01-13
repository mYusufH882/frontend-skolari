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
    question: 'Apakah saya harus memiliki pengalaman lari sebelumnya?',
    answer: 'Tidak, kami menerima semua level pelari dari pemula hingga yang berpengalaman. Program kami disesuaikan dengan kemampuan dan target masing-masing peserta. Untuk pemula, kami memiliki program khusus yang akan membantu Anda memulai dengan aman dan nyaman.'
  },
  {
    question: 'Bagaimana sistem latihan yang diterapkan?',
    answer: 'Kami menerapkan sistem latihan yang terstruktur dengan pertemuan 3-4 kali seminggu. Setiap sesi terdiri dari warm-up, latihan inti, dan cooling down. Program latihan disesuaikan dengan level dan target Anda, didampingi oleh coach profesional yang akan memantau perkembangan Anda.'
  },
  {
    question: 'Berapa biaya untuk bergabung dengan program ini?',
    answer: 'Kami memiliki beberapa paket membership yang bisa dipilih, mulai dari Rp 500.000/bulan untuk Basic Member hingga Rp 1.500.000/bulan untuk Premium Member. Setiap paket memiliki fasilitas berbeda termasuk jumlah sesi latihan, konsultasi pribadi dengan coach, dan akses ke komunitas.'
  },
  {
    question: 'Apakah ada program khusus untuk persiapan lomba?',
    answer: 'Ya, kami memiliki program khusus untuk persiapan berbagai jenis lomba lari (5K, 10K, Half Marathon, Full Marathon). Program ini mencakup training plan spesifik, strategi race, nutrisi, dan simulasi lomba untuk memastikan Anda siap menghadapi event yang ditargetkan.'
  },
  {
    question: 'Dimana lokasi latihan dilaksanakan?',
    answer: 'Latihan dilaksanakan di beberapa lokasi strategis di kota ini, termasuk GBK Senayan, Gelora Bung Karno, dan beberapa taman kota. Untuk program Premium, kami juga menyediakan opsi latihan di lokasi yang diinginkan member.'
  },
  {
    question: 'Bagaimana jika saya berhalangan hadir saat latihan?',
    answer: 'Kami memahami kesibukan member, karena itu kami menyediakan fleksibilitas untuk mengganti jadwal latihan yang terlewat di hari lain dalam minggu yang sama. Anda juga akan mendapatkan program latihan mandiri yang bisa dilakukan di waktu luang.'
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
            <Minus className="w-6 h-6 text-[#EE1C25]" />
          ) : (
            <Plus className="w-6 h-6 text-[#EE1C25]" />
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
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Pertanyaan yang Sering Diajukan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Temukan jawaban untuk pertanyaan umum seputar program latihan lari kami
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