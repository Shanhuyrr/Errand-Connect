import GlassCard from '@/components/ui/GlassCard';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About ErrandConnect</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our mission is to give students their most valuable resource back: Time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We Solve</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hostel life is demanding. Between back-to-back classes, assignments, and exams, students often find themselves lacking the time to perform daily errands like printing documents or picking up laundry. 
            ErrandConnect bridges this gap by connecting students who need help with students who have spare time.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We provide a decentralized platform where tasks are outsourced locally on campus, bringing convenience at a minimal cost while giving other students an opportunity to earn.
          </p>
        </div>
        <GlassCard className="h-full min-h-[300px] flex items-center justify-center border-gray-200 shadow-2xl relative overflow-hidden group">
          <Image src="/built_by_students.png" alt="Built by students" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
          <div className="text-center relative z-10 bg-white/70 p-6 rounded-xl backdrop-blur-sm border border-white/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Built By Students</h3>
            <p className="text-blue-600 font-bold">For Students.</p>
          </div>
        </GlassCard>
      </div>

      <div className="text-center mb-16 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Muhammad Usman', title: 'Founder & CEO', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Usman&backgroundColor=b6e3f4' },
          { name: 'Ayesha Khan', title: 'Co-Founder & CTO', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha&backgroundColor=ffdfbf' },
          { name: 'Zainab Tariq', title: 'Head of Operations', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab&backgroundColor=c0aede' }
        ].map((member, idx) => (
          <GlassCard key={idx} className="text-center py-8 hover:scale-105 transition-transform">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-sm">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-blue-600 font-bold mb-4">{member.title}</p>
            <p className="text-gray-600 font-medium text-sm">Passionate about changing the campus dynamic.</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
