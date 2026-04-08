import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]",
        onClick ? "cursor-pointer" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
