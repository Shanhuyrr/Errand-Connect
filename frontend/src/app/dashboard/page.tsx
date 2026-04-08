'use client';
import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';

const dummyTasks = [
  { _id: '1', taskType: 'printing', status: 'pending', instructions: 'Print 10 pages b/w', time: '2:00 PM', student: { name: 'Ali Raza', hostel: 'H1-102' } },
  { _id: '2', taskType: 'groceries', status: 'accepted', instructions: 'Get 2 packets of chips', time: '3:00 PM', student: { name: 'Fatima Tariq', hostel: 'H2-205' } },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(dummyTasks);
  const [role] = useState('admin'); 

  const updateStatus = (id: string, newStatus: string) => {
    setTasks(tasks.map(t => t._id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
        <div className="bg-white/60 border border-gray-300 px-4 py-2 rounded-lg text-sm font-bold text-gray-800 shadow-sm">
          Role: <span className="text-blue-600 capitalize">{role}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <GlassCard className="text-center">
          <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Total Requests</p>
          <p className="text-4xl font-extrabold text-gray-900 mt-2">{tasks.length}</p>
        </GlassCard>
        <GlassCard className="text-center">
          <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Pending Tasks</p>
          <p className="text-4xl font-extrabold text-yellow-600 mt-2">{tasks.filter(t => t.status === 'pending').length}</p>
        </GlassCard>
        <GlassCard className="text-center">
          <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Completed Today</p>
          <p className="text-4xl font-extrabold text-green-600 mt-2">{tasks.filter(t => t.status === 'completed').length}</p>
        </GlassCard>
      </div>

      <GlassCard className="overflow-hidden p-0">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="text-xs uppercase bg-gray-100/50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-bold">Student</th>
                <th className="px-6 py-4 font-bold">Task</th>
                <th className="px-6 py-4 font-bold">Location</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className="border-b border-gray-100/50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{task.student.name}</td>
                  <td className="px-6 py-4 capitalize font-medium">{task.taskType}</td>
                  <td className="px-6 py-4 font-medium">{task.student.hostel}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      task.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      task.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {role === 'admin' && task.status !== 'completed' && (
                      <select 
                        className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm outline-none font-medium shadow-sm"
                        value={task.status}
                        onChange={(e) => updateStatus(task._id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="accepted">Accept</option>
                        <option value="completed">Complete</option>
                      </select>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
