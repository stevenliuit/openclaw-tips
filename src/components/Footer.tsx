import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1b2840]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group" aria-label="AI Insights 首页">
            <div className="relative flex items-center justify-center w-7 h-7">
              <div className="absolute inset-0 rounded-md bg-[#22d3ee]/10" />
              <svg className="relative" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', height: '15px' }}>
                <path d="M10 2L3 6.5V13.5L10 18L17 13.5V6.5L10 2Z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2V18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
                <path d="M3 6.5L10 11L17 6.5" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#7b90a8] group-hover:text-[#dce5f0] transition-colors duration-200">
              AI Insights
            </span>
          </Link>
          <p className="text-xs text-[#4c6070]">
            © 2026 Open AI 分享站 · 让AI触手可及
          </p>
        </div>
      </div>
    </footer>
  );
}
