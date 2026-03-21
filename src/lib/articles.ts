import { Article, Category } from '@/types/article';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import crypto from 'crypto';

const POSTS_DIR = path.join(process.cwd(), 'posts');

const CATEGORY_DATA: Record<string, { icon: string; description: string }> = {
  'AI': { icon: '🤖', description: '人工智能核心技术与应用' },
  'OpenClaw': { icon: '🦞', description: 'OpenClaw工作流自动化平台' },
  'OpenCode': { icon: '💻', description: 'AI智能编程环境' },
  'AI Agent': { icon: '🤖', description: 'AI Agent智能代理技术' },
  'LangChain': { icon: '⛓️', description: 'LangChain开发框架' },
  'GPT API': { icon: '🧠', description: 'GPT API集成与应用' },
  'Claude API': { icon: '🧠', description: 'Claude API深度应用' },
  '自动化': { icon: '⚡', description: '企业工作流自动化' },
  '机器学习': { icon: '🧠', description: '机器学习与深度学习' },
  'AI趋势': { icon: '📈', description: 'AI行业发展趋势' },
  '开源AI': { icon: '🌐', description: '开源大模型生态' },
  '教程': { icon: '📚', description: '入门指南和实战教学' },
  '技能集成': { icon: '🛠️', description: '工具与技能整合' },
  '趋势': { icon: '📈', description: '行业趋势与分析' },
  '开源': { icon: '🌐', description: '开源生态与项目' },
  '工具': { icon: '🔧', description: '开发工具推荐' },
};

/**
 * Creates a URL-safe ASCII-only slug from a filename using MD5 hash.
 * This ensures that articles with Chinese characters in filenames
 * still get unique, URL-safe slugs that work with Next.js static generation.
 */
function filenameToSlug(filename: string): string {
  const name = filename.replace(/\.md$/, '');
  return crypto.createHash('md5').update(name).digest('hex').substring(0, 8);
}

/**
 * Maps a slug back to the original filename for file lookup.
 */
function findFileBySlug(slug: string): string | null {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  // Find file whose slug matches
  const match = files.find(f => filenameToSlug(f) === slug);
  return match || null;
}

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  try {
    const files = fs.readdirSync(POSTS_DIR).filter(
      f => f.endsWith('.md')
    );

    files.forEach(file => {
      const filePath = path.join(POSTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: body } = matter(content);

      // Use hash-based URL-safe slug
      const slug = filenameToSlug(file);

      articles.push({
        id: slug,
        title: data.title || slug.replace(/-/g, ' '),
        description: data.description || '点击查看全文...',
        content: body.trim(),
        category: data.category || 'AI',
        date: data.date || '',
        slug,
      });
    });
  } catch (error) {
    console.error('Error reading articles:', error);
  }

  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | null {
  const filename = findFileBySlug(slug);
  if (!filename) return null;
  
  const filepath = path.join(POSTS_DIR, filename);

  try {
    if (fs.existsSync(filepath)) {
      const content = fs.readFileSync(filepath, 'utf8');
      const { data, content: body } = matter(content);

      return {
        id: slug,
        title: data.title || slug.replace(/-/g, ' '),
        description: data.description || '',
        content: body.trim(),
        category: data.category || 'AI',
        date: data.date || '',
        slug,
      };
    }
  } catch {
    return null;
  }
  return null;
}

export function getCategories(): Category[] {
  const articles = getAllArticles();
  const categoryMap: Record<string, number> = {};

  articles.forEach(article => {
    const cat = article.category;
    categoryMap[cat] = (categoryMap[cat] || 0) + 1;
  });

  return Object.entries(categoryMap)
    .map(([name, count]) => ({
      name,
      count,
      icon: CATEGORY_DATA[name]?.icon || '📄',
      description: CATEGORY_DATA[name]?.description || `${name}相关文章`,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.category === category);
}

export function getAllSlugs(): string[] {
  return getAllArticles().map(article => article.slug);
}
