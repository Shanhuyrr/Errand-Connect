'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const linkClass = (path: string) => 
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
      pathname === path ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
    }`;

  return (
    <nav className="fixed w-full z-50 glass border-b border-gray-200 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-extrabold text-2xl tracking-tight cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">
                Errand<span className="text-gray-900">Connect</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/services" className={linkClass('/services')}>Services</Link>
              <Link href="/about" className={linkClass('/about')}>About</Link>
              <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
              <Link href="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/login" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
