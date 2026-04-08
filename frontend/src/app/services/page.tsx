'use client';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 'printing',
    title: 'Printing Services',
    image: '/3d_printing.png',
    description: 'Upload your notes or assignments. We will print them and deliver to your room.',
    price: 'Starting from $0.10/page',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'groceries',
    title: 'Grocery Pickup',
    image: '/3d_grocery.png',
    description: 'Need snacks or essentials? Send us your list and we will get it from the mart.',
    price: 'Delivery fee: $2.00',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'delivery',
    title: 'Document Delivery',
    image: '/3d_delivery.png',
    description: 'Need to submit a document to the admin block? We will deliver it on time.',
    price: 'Flat fee: $1.50',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'laundry',
    title: 'Laundry Pickup',
    image: '/3d_laundry.png',
    description: 'Drop off and pick up your clothes from the campus laundry service.',
    price: 'Per load: $3.00',
    color: 'from-orange-500/20 to-red-500/20',
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a variety of services tailored to make hostel life easier and more productive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-105 transition-transform relative overflow-hidden`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover opacity-90" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-medium mb-6">{service.description}</p>
                </div>
                <div>
                  <p className="inline-block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-bold mb-6">
                    {service.price}
                  </p>
                  <Link href={`/request-service?type=${service.id}`} className="block w-full text-center py-3 bg-white/60 hover:bg-white border border-gray-200 text-gray-900 font-bold rounded-xl transition-all shadow-sm">
                    Request This Service
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
