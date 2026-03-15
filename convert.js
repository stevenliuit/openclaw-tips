const fs = require('fs');
const path = require('path');

// 读取现有文章
const data = JSON.parse(fs.readFileSync('../openclaw-tips/articles.json', 'utf8'));
const articles = data.articles;

console.log(`Converting ${articles.length} articles to Hexo format...`);

// 创建文章目录
const postsDir = './source/_posts';
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// 转换每篇文章
let count = 0;
for (const article of articles) {
  // Hexo Front Matter 格式
  const frontMatter = `---
title: ${article.title || article.title_en || 'Untitled'}
date: ${article.date || new Date().toISOString().split('T')[0]}
categories:
  - ${article.categoryName || article.category || '教程'}
tags:
  - ${(article.tags || []).join('\n  - ') || 'OpenClaw'}
source: ${article.source || article.source_en || 'Unknown'}
description: ${article.desc || article.description_en || ''}
---

${article.content || ''}
`;

  // 生成文件名
  const slug = (article.title || article.title_en || 'untitled')
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '');
  
  const filename = path.join(postsDir, `${slug}.md`);
  fs.writeFileSync(filename, frontMatter);
  count++;
  
  if (count % 100 === 0) {
    console.log(`Converted ${count} articles...`);
  }
}

console.log(`✅ Done! Converted ${count} articles to ${postsDir}`);
