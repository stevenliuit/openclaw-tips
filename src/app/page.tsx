import { getAllArticles, getCategories } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import type { Metadata } from 'next';

const ITEMS_PER_PAGE = 24;

export const metadata: Metadata = {
  title: 'Open AI 分享站 - 首页',
  description: 'AI技术前沿-专注AI、自动化、开发技巧与行业趋势',
};

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allArticles = getAllArticles();
  const categories = getCategories();

  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const articles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">

        {/* Hero */}
        <section className="flex items-center" style={{ height: '270px' }}>
          <div className="max-w-5xl mx-auto px-6 w-full text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #dce5f0 0%, #22d3ee 55%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Open AI 分享站
            </h1>
            <p className="text-sm text-[#7b90a8] text-center">
              专注 AI、自动化、开发技巧与行业趋势
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#22d3ee]">{totalArticles}</div>
                <div className="text-xs text-[#4c6070] mt-0.5">篇文章</div>
              </div>
              <div className="w-px h-10 bg-[#1b2840]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#818cf8]">{categories.length}</div>
                <div className="text-xs text-[#4c6070] mt-0.5">个分类</div>
              </div>
              <div className="w-px h-10 bg-[#1b2840]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#34d399]">{totalPages}</div>
                <div className="text-xs text-[#4c6070] mt-0.5">页内容</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-5xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#22d3ee] text-[#05070c] transition-all duration-200 cursor-pointer"
            >
              全部
            </Link>
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${encodeURIComponent(cat.name)}`}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#7b90a8] bg-[#0d1421] border border-[#1b2840] transition-all duration-200 hover:border-[#22d3ee]/50 hover:text-[#22d3ee] cursor-pointer"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="max-w-5xl mx-auto px-6">
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/" />
        </div>

        {/* Page info */}
        <div className="text-center pb-14 text-xs text-[#4c6070]">
          第 {currentPage} / {totalPages} 页 · 共 {totalArticles} 篇
        </div>

      </div>
    </div>
  );
}
