'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav 
      className="bg-slate-50 border-b border-slate-100 py-3 md:py-4"
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto section-spacing px-4">
        <ol className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-base">
          {/* Home Link */}
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-950 font-semibold transition-colors group"
            >
              <Home size={16} className="group-hover:scale-110 transition-transform" />
              <span>Beranda</span>
            </Link>
          </li>

          {/* Breadcrumb Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={`breadcrumb-${index}`} className="flex items-center gap-2 md:gap-3">
                <ChevronRight
                  size={16}
                  className="text-slate-400"
                  aria-hidden="true"
                />
                {isLast ? (
                  <span className="text-slate-700 font-semibold line-clamp-1">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-indigo-600 hover:text-indigo-950 font-semibold transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
