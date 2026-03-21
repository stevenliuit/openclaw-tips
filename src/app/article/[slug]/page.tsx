import { getAllSlugs, getArticleBySlug } from '@/lib/articles';
import Link from 'next/link';
import CategoryBadge from '@/components/CategoryBadge';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: '文章未找到' };
  }
  return {
    title: article.title,
    description: article.description,
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 mb-8 text-xs text-[#4c6070] hover:text-[#22d3ee] transition-colors duration-200 group"
      >
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        返回首页
      </Link>

      {/* Article */}
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge category={article.category} size="md" />
            <time className="text-xs text-[#4c6070]">{article.date}</time>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#dce5f0] leading-snug">
            {article.title}
          </h1>
          {article.description && (
            <p className="mt-3 text-sm text-[#7b90a8] leading-relaxed">
              {article.description}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="bg-[#0d1421] border border-[#1b2840] rounded-2xl p-6 sm:p-8">
          <div className="prose-article">
            {article.content.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Footer nav */}
      <div className="mt-10 pt-6 border-t border-[#1b2840]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#4c6070] hover:text-[#22d3ee] transition-colors duration-200 group"
        >
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>
      </div>
    </div>
  );
}
