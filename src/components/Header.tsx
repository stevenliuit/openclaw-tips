'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' || pathname.startsWith('/page');
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className="border-b border-[#1b2840]"
        style={{ background: 'rgba(5, 7, 12, 0.88)', backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="AI Insights 首页"
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-[#22d3ee]/10 group-hover:bg-[#22d3ee]/15 transition-colors duration-200" />
              <svg className="w-4.5 h-4.5 relative" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }}>
                <path d="M10 2L3 6.5V13.5L10 18L17 13.5V6.5L10 2Z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2V18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                <path d="M3 6.5L10 11L17 6.5" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <span
              className="text-[15px] font-semibold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #e2e8f0 0%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Insights
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className={`relative px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'text-[#22d3ee] bg-[#22d3ee]/10'
                  : 'text-[#7b90a8] hover:text-[#dce5f0] hover:bg-white/5'
              }`}
            >
              首页
            </Link>
            <Link
              href="/categories"
              className={`relative px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/categories')
                  ? 'text-[#22d3ee] bg-[#22d3ee]/10'
                  : 'text-[#7b90a8] hover:text-[#dce5f0] hover:bg-white/5'
              }`}
            >
              分类
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
