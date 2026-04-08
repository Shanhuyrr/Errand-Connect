'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

export default function RequestServicePage() {
  const [formData, setFormData] = useState({
    taskType: 'printing',
    instructions: '',
    time: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Your request has been successfully submitted! We will notify you once it is accepted.');
      setFormData({ taskType: 'printing', instructions: '', time: '' });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="p-8 md:p-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Request a Service</h1>
          <p className="text-gray-600 font-medium mb-8">Fill out the details below and we will get on it.</p>

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 font-medium">
              {success}
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-800 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
              <select
                name="taskType"
                value={formData.taskType}
                onChange={handleChange}
                className="w-full bg-white/60 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="printing">Printing</option>
                <option value="groceries">Groceries</option>
                <option value="delivery">Document Delivery</option>
                <option value="laundry">Laundry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Specific Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                required
                rows={4}
                placeholder="E.g., Print double-sided in black and white"
                className="w-full bg-white/60 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Expected Time / Deadline</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="E.g., Today by 5:00 PM"
                className="w-full bg-white/60 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
                loading ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
}
