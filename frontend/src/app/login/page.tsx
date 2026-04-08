'use client';
import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <GlassCard className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600 font-medium">Log in to manage your campus tasks</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/60 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="student@university.edu" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-white/60 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="••••••••" 
            />
          </div>
          
          <button type="submit" className="w-full py-4 rounded-xl font-bold text-white transition-all bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 mt-4">
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 font-medium mt-6">
          Don&apos;t have an account? <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold">Sign up</Link>
        </p>
      </GlassCard>
    </div>
  );
}
