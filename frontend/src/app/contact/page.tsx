'use client';
import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Map3D from '@/components/3d/Map3D';

export default function ContactPage() {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question or feedback? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <GlassCard className="p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full bg-white/40 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full bg-white/40 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="w-full bg-white/40 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus-within:ring-2 focus-within:ring-blue-500 outline-none">
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  className="w-full text-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-white/40 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 rounded-xl font-bold text-white transition-all bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30">
              Send Message
            </button>
          </form>
        </GlassCard>

        <div className="space-y-8">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-600 font-medium">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📧</span>
                support@errandconnect.com
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📞</span>
                +1 (555) 123-4567
              </p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-0 overflow-hidden h-72">
            <Map3D />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
