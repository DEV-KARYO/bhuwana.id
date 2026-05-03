import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Badge from './Badge';

export default function NewsCard({ news, layout = 'grid', compact = false }) {
  if (layout === 'list') {
    return (
      <Link href={`/news/${news.id}`}>
        <div className="card-hover group flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-2/5 relative overflow-hidden h-56 md:h-auto">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute top-6 left-6">
              <Badge variant="primary">{news.category}</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {news.date}
                </span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <User size={14} /> {news.author}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors tracking-tight">
                {news.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {news.excerpt}
              </p>
            </div>
            <button className="text-indigo-950 font-bold text-sm flex items-center group-hover:gap-3 transition-all">
              Selengkapnya <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Grid Layout
  return (
    <Link href={`/news/${news.id}`}>
      <div className={`${compact ? 'card-compact' : 'card-hover'} group flex flex-col h-full`}> 
        {/* Image */}
        <div className={`${compact ? 'h-40 md:h-48' : 'h-48 md:h-60'} relative overflow-hidden`}>
          <Image
            src={news.image}
            alt={news.title}
            fill
            className={`object-cover ${compact ? 'group-hover:scale-105 duration-700' : 'group-hover:scale-110 transition-transform duration-1000'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-6 left-6">
            <Badge variant="primary">{news.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className={`${compact ? 'p-4 md:p-6' : 'p-6 md:p-8'} flex-grow flex flex-col`}>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            {news.date}
          </p>
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors line-clamp-2`}>
            {news.title}
          </h3>
          <p className={`${compact ? 'text-sm' : 'text-slate-500 text-sm'} line-clamp-2 leading-snug flex-grow`}>
            {news.excerpt}
          </p>
          <div className={`${compact ? 'mt-4 pt-4' : 'mt-6 pt-6'} border-t border-slate-100`}> 
            <button className="text-indigo-950 font-bold text-sm flex items-center group-hover:gap-2 transition-all">
              Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
