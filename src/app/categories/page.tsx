import { getCategories } from '@/lib/articles';
import CategoryCard from '@/components/CategoryCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '分类',
  description: '按主题浏览AI技术文章',
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-[#dce5f0]">
          浏览分类
        </h1>
        <p className="text-sm text-[#7b90a8]">
          按主题探索 AI 技术文章 · 共 {categories.length} 个分类
        </p>
      </section>

      {/* Categories Grid */}
      <section className="pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
