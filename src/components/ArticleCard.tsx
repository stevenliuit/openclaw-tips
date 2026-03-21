'use client';

import Link from 'next/link';
import { Article } from '@/types/article';

function getCategoryColor(name: string): string {
  const colors = ['#22d3ee', '#818cf8', '#34d399', '#fb923c', '#f472b6', '#60a5fa'];
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  }
  return colors[Math.abs(h) % colors.length];
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const accent = getCategoryColor(article.category);

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block bg-[#0d1421] rounded-xl p-5 cursor-pointer transition-all duration-200 hover:bg-[#111d2e]"
      style={{ border: `1px solid #1b2840`, borderLeft: `3px solid ${accent}` }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${accent}66`; (e.currentTarget as HTMLElement).style.borderLeftColor = accent; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1b2840'; (e.currentTarget as HTMLElement).style.borderLeftColor = accent; }}
    >
      {/* Category + Date */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded"
          style={{ color: accent, background: `${accent}18` }}
        >
          {article.category}
        </span>
        <time className="text-[11px] text-[#4c6070] whitespace-nowrap flex-shrink-0">
          {article.date}
        </time>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-[#dce5f0] leading-relaxed line-clamp-2 mb-2 group-hover:text-[#22d3ee] transition-colors duration-200">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-[#7b90a8] line-clamp-2 leading-relaxed">
        {article.description}
      </p>
    </Link>
  );
}
