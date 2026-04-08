'use client';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div 
      className="relative min-h-[100vh] flex flex-col justify-center pb-20 -mt-20 pt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-gray-900 mb-2">Campus Errands,</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 pb-2">
              Sorted in Minutes.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-700 font-medium mx-auto mb-10">
            Printing, groceries, delivery, or laundry. We handle the small tasks so you can focus on what matters most — your studies.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors shadow-lg shadow-blue-500/30"
              >
                Request a Service
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl glass font-bold text-lg text-gray-900 hover:bg-white/50 transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Request",
                desc: "Choose a service and provide details along with your hostel room number."
              },
              {
                title: "2. Track",
                desc: "Get real-time updates as our student runners pick up and complete your task."
              },
              {
                title: "3. Complete",
                desc: "Pay seamlessly and receive your items right at your doorstep."
              }
            ].map((step, idx) => (
              <GlassCard key={idx} className="text-center py-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
