import { Article, ArticleFile, Category } from '@/types/article';
import fs from 'fs';
import path from 'path';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

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

function parseArticleFile(filename: string, content: string): ArticleFile | null {
  try {
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : filename.replace('.html', '').replace(/-/g, ' ');

    const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const description = descMatch ? descMatch[1] : '';

    const dateMatch = content.match(/<span class='date'>([^<]+)<\/span>/);
    const date = dateMatch ? dateMatch[1] : '';

    const catMatch = content.match(/<span class='cat'>([^<]+)<\/span>/);
    const category = catMatch ? catMatch[1] : 'AI';

    const contentMatch = content.match(/<div class="content">([\s\S]*?)<\/div>\s*<\/article>/);
    let articleContent = '';
    if (contentMatch) {
      articleContent = contentMatch[1]
        .trim()
        .replace(/<p>/g, '\n\n')
        .replace(/<\/p>/g, '')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/<[^>]+>/g, '')
        .trim();
    }

    return {
      filename,
      title,
      description,
      category,
      date,
      content: articleContent,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  try {
    const files = fs.readdirSync(ARTICLES_DIR).filter(
      f => f.endsWith('.html') &&
        !['index.html', 'categories.html', 'tags.html', 'style.css', 'generate.js', 'generate-backup.js', 'robots.txt', 'sitemap.xml', 'CNAME'].includes(f)
    );

    files.forEach(file => {
      const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
      const parsed = parseArticleFile(file, content);
      if (parsed) {
        const slug = file.replace('.html', '');
        articles.push({
          id: slug,
          title: parsed.title,
          description: parsed.description || '点击查看全文...',
          content: parsed.content,
          category: parsed.category,
          date: parsed.date,
          slug,
        });
      }
    });
  } catch (error) {
    console.error('Error reading articles:', error);
  }

  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | null {
  const filename = `${slug}.html`;
  const filepath = path.join(ARTICLES_DIR, filename);

  try {
    if (fs.existsSync(filepath)) {
      const content = fs.readFileSync(filepath, 'utf8');
      const parsed = parseArticleFile(filename, content);
      if (parsed) {
        return {
          id: slug,
          title: parsed.title,
          description: parsed.description,
          content: parsed.content,
          category: parsed.category,
          date: parsed.date,
          slug,
        };
      }
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
