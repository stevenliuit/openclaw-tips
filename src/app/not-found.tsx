import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - 页面未找到',
};

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <div
        className="text-7xl font-bold tracking-tight mb-4 leading-none"
        style={{
          background: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </div>
      <h2 className="text-xl font-semibold mb-3 text-[#dce5f0]">页面未找到</h2>
      <p className="text-sm text-[#7b90a8] mb-10">
        抱歉，您访问的页面不存在或已被移除
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22d3ee] rounded-xl text-[#05070c] text-sm font-semibold hover:bg-[#06b6d4] transition-colors duration-200 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l6-6m-6 6l6 6" />
        </svg>
        返回首页
      </Link>
    </div>
  );
}
