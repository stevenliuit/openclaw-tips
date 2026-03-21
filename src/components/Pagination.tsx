'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({ currentPage, totalPages, basePath = '/' }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath === '/' ? '/' : basePath;
    if (basePath === '/') return `/page/${page}`;
    return `${basePath}/${page}`;
  };

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  const baseBtn = 'inline-flex items-center justify-center min-w-[34px] h-[34px] px-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer';

  return (
    <div className="flex justify-center items-center gap-1.5 flex-wrap py-8">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className={`${baseBtn} bg-[#0d1421] border border-[#1b2840] text-[#7b90a8] hover:border-[#22d3ee] hover:text-[#22d3ee]`}
          aria-label="上一页"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      )}

      {getPageNumbers().map((page, index) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="text-[#4c6070] text-xs px-1">…</span>
        ) : (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`${baseBtn} ${
              page === currentPage
                ? 'bg-[#22d3ee] border border-[#22d3ee] text-[#05070c] font-semibold'
                : 'bg-[#0d1421] border border-[#1b2840] text-[#7b90a8] hover:border-[#22d3ee] hover:text-[#22d3ee]'
            }`}
            aria-label={`第 ${page} 页`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className={`${baseBtn} bg-[#0d1421] border border-[#1b2840] text-[#7b90a8] hover:border-[#22d3ee] hover:text-[#22d3ee]`}
          aria-label="下一页"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
