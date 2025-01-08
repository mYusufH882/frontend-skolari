'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

interface ScheduleItem {
  id: number;
  day: string;
  time: string;
  program: string;
  location: string;
  coach: string;
  maxParticipants: number;
  availableSlots: number;
  level: string;
  color: string;
}

const scheduleData: ScheduleItem[] = [
  {
    id: 1,
    day: "Senin",
    time: "05:30 - 07:00",
    program: "Morning Run - Beginner",
    location: "GBK Senayan - Track",
    coach: "Coach Andi",
    maxParticipants: 15,
    availableSlots: 8,
    level: "Pemula",
    color: "bg-emerald-500"
  },
  {
    id: 2,
    day: "Senin",
    time: "17:30 - 19:00",
    program: "Evening Run - Advanced",
    location: "GBK Senayan - Track",
    coach: "Coach Sarah",
    maxParticipants: 12,
    availableSlots: 5,
    level: "Lanjutan",
    color: "bg-[#EE1C25]"
  },
  {
    id: 3,
    day: "Selasa",
    time: "05:30 - 07:00",
    program: "Interval Training",
    location: "Gelora Bung Karno",
    coach: "Coach Budi",
    maxParticipants: 10,
    availableSlots: 4,
    level: "Menengah",
    color: "bg-blue-500"
  },
  {
    id: 4,
    day: "Rabu",
    time: "05:30 - 07:00",
    program: "Marathon Prep",
    location: "GBK Senayan - Track",
    coach: "Coach Diana",
    maxParticipants: 15,
    availableSlots: 7,
    level: "Lanjutan",
    color: "bg-[#EE1C25]"
  },
  {
    id: 5,
    day: "Kamis",
    time: "17:30 - 19:00",
    program: "Recovery Run",
    location: "Gelora Bung Karno",
    coach: "Coach Andi",
    maxParticipants: 15,
    availableSlots: 10,
    level: "Semua Level",
    color: "bg-purple-500"
  },
  {
    id: 6,
    day: "Jumat",
    time: "05:30 - 07:00",
    program: "Speed Work",
    location: "GBK Senayan - Track",
    coach: "Coach Sarah",
    maxParticipants: 12,
    availableSlots: 6,
    level: "Menengah",
    color: "bg-blue-500"
  },
  {
    id: 7,
    day: "Sabtu",
    time: "05:30 - 07:30",
    program: "Long Run",
    location: "GBK Senayan",
    coach: "Coach Budi",
    maxParticipants: 20,
    availableSlots: 12,
    level: "Semua Level",
    color: "bg-purple-500"
  }
];

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

const ScheduleCard: React.FC<{ schedule: ScheduleItem }> = ({ schedule }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {schedule.program}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mt-2 ${schedule.color}`}>
            {schedule.level}
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 dark:text-gray-400">Slots</div>
          <div className="text-lg font-semibold text-[#EE1C25]">
            {schedule.availableSlots}/{schedule.maxParticipants}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Clock className="w-5 h-5 text-[#EE1C25]" />
          {schedule.time}
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <MapPin className="w-5 h-5 text-[#EE1C25]" />
          {schedule.location}
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Users className="w-5 h-5 text-[#EE1C25]" />
          {schedule.coach}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2 mt-4 bg-[#EE1C25] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
      >
        Booking Slot
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Senin");

  const filteredSchedules = scheduleData.filter(
    schedule => schedule.day === selectedDay
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[#EE1C25]/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Jadwal <span className="text-[#EE1C25]">Latihan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Pilih jadwal yang sesuai dengan rutinitas Anda
            </motion.p>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Day Selection */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedDay === day
                  ? 'bg-[#EE1C25] text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((schedule) => (
            <ScheduleCard key={schedule.id} schedule={schedule} />
          ))}
        </div>

        {filteredSchedules.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            Tidak ada jadwal latihan untuk hari {selectedDay}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;