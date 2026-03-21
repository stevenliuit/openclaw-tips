import { getAllArticles, getCategories } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import type { Metadata } from 'next';

const ITEMS_PER_PAGE = 24;

export const metadata: Metadata = {
  title: 'Open AI 分享站 - 第X页',
};

interface PagePageProps {
  params: Promise<{ page: string }>;
}

export default async function PagePage({ params }: PagePageProps) {
  const { page: pageParam } = await params;
  const currentPage = Number(pageParam);
  const allArticles = getAllArticles();
  const categories = getCategories();

  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const articles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (currentPage < 1 || currentPage > totalPages) {
    return (
      <div className="w-full px-4 py-20 text-center">
        <h1 className="text-xl font-bold mb-4 text-[#e8edf5]">页面不存在</h1>
        <Link href="/" className="text-[#00d4ff] hover:text-[#00b8e6] transition-colors">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-2xl font-bold tracking-tight mb-2 text-[#e8edf5]">
          Open AI 分享站
        </h1>
        <p className="text-[#8899b0] text-sm">
          专注AI、自动化、开发技巧与行业趋势
        </p>
      </section>

      {/* Category Filters */}
      <section className="mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/"
            className="px-3 py-1.5 bg-[#00d4ff] border border-[#00d4ff] rounded-md text-xs font-medium text-[#06080d]"
          >
            全部
          </Link>
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="px-3 py-1.5 bg-[#111822] border border-[#1e2a3a] rounded-md text-xs font-medium text-[#8899b0] transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pb-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/" />

      {/* Stats */}
      <div className="text-center pb-8 text-xs text-[#556677]">
        共 {totalPages} 页 · {totalArticles} 篇文章
      </div>
    </div>
  );
}
