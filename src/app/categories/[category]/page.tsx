import { getArticlesByCategory, getCategories } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const ITEMS_PER_PAGE = 24;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  return {
    title: `${decodedCategory} - 分类`,
    description: `浏览${decodedCategory}分类下的所有文章`,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const search = await searchParams;
  const decodedCategory = decodeURIComponent(categoryParam);
  const currentPage = Number(search.page) || 1;

  const allArticles = getArticlesByCategory(decodedCategory);
  const categories = getCategories();

  if (allArticles.length === 0) {
    notFound();
  }

  const totalArticles = allArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const articles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero — fixed height to match home page, prevents layout shift on tab switch */}
      <section className="flex flex-col items-center justify-center" style={{ height: '270px' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded-full text-xs text-[#22d3ee] font-medium mb-4">
          分类
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-[#dce5f0] text-center">
          {decodedCategory}
        </h1>
        <p className="text-sm text-[#7b90a8]">
          共 {totalArticles} 篇相关文章
        </p>
      </section>

      {/* Category Filters */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#7b90a8] bg-[#0d1421] border border-[#1b2840] transition-all duration-200 hover:border-[#22d3ee]/50 hover:text-[#22d3ee] cursor-pointer"
          >
            全部
          </Link>
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                cat.name === decodedCategory
                  ? 'bg-[#22d3ee] text-[#05070c] font-semibold'
                  : 'text-[#7b90a8] bg-[#0d1421] border border-[#1b2840] hover:border-[#22d3ee]/50 hover:text-[#22d3ee]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/categories/${categoryParam}`}
      />

      {/* Stats */}
      <div className="text-center pb-10 text-xs text-[#4c6070]">
        第 {currentPage} / {totalPages} 页 · 共 {totalArticles} 篇
      </div>
    </div>
  );
}
