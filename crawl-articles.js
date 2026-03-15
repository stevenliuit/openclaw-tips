// 定时任务脚本 - Hexo版本
const fs = require('fs');
const path = require('path');

// 新文章模板
const articleTemplates = [
  { title_en: "OpenClaw Complete Setup Guide", title_cn: "OpenClaw完整安装指南", category: "安装配置", tags: ["OpenClaw", "安装"] },
  { title_en: "OpenClaw Skills Development", title_cn: "OpenClaw技能开发教程", category: "Skills开发", tags: ["Skills", "开发"] },
  { title_en: "OpenClaw Automation with Cron", title_cn: "OpenClaw定时任务自动化", category: "自动化", tags: ["自动化", "Cron"] },
  { title_en: "OpenClaw Security Best Practices", title_cn: "OpenClaw安全最佳实践", category: "安全配置", tags: ["安全", "配置"] },
  { title_en: "OpenClaw vs Claude Code", title_cn: "OpenClaw对比Claude Code", category: "对比", tags: ["对比", "Claude"] },
  { title_en: "AI Agent Tutorial 2024", title_cn: "AI代理教程2024", category: "AI集成", tags: ["AI", "教程"] },
  { title_en: "Building Custom Skills", title_cn: "构建自定义技能", category: "技能集成", tags: ["Skills", "自定义"] },
  { title_en: "Self-Hosting OpenClaw", title_cn: "自托管OpenClaw", category: "安装配置", tags: ["自托管", "教程"] },
  { title_en: "OpenClaw Memory Management", title_cn: "OpenClaw内存管理", category: "基础操作", tags: ["内存", "管理"] },
  { title_en: "Multi-Channel Deployment", title_cn: "多渠道部署", category: "运维监控", tags: ["部署", "多渠道"] }
];

function generateContent(title, category) {
  return `---
title: ${title}
date: ${new Date().toISOString().split('T')[0]}
categories:
  - ${category}
tags:
  - OpenClaw
  - 教程
---

# ${title}

本文介绍关于${title}的相关内容。

## 概述

${title}是OpenClaw使用中的重要主题。随着AI技术的快速发展，掌握这些技能变得越来越重要。

## 主要内容

### 1. 基础知识

了解${title}的基本概念和原理。

### 2. 实践操作

通过实际案例学习如何应用。

### 3. 最佳实践

分享一些实用的技巧和经验。

## 代码示例

\`\`\`bash
# 安装 OpenClaw
npm install -g openclaw

# 启动服务
openclaw gateway start

# 查看状态
openclaw status
\`\`\`

## 总结

${title}是一个值得关注和学习的主题。希望本文对你有所帮助。

## 参考资料

- [OpenClaw官方文档](https://docs.openclaw.ai)
- [GitHub仓库](https://github.com/openclaw/openclaw)
`;
}

function isDuplicate(title, postsDir) {
  if (!fs.existsSync(postsDir)) return false;
  const files = fs.readdirSync(postsDir);
  return files.some(f => {
    const content = fs.readFileSync(path.join(postsDir, f), 'utf8');
    return content.includes('title: ' + title);
  });
}

console.log('=== Hexo Article Crawl Task ===');
console.log(`Time: ${new Date().toISOString()}`);

const postsDir = './source/_posts';
if (!fs.existsSync(postsDir)) {
  console.log('Creating posts directory...');
  fs.mkdirSync(postsDir, { recursive: true });
}

const newArticles = [];
for (const tpl of articleTemplates) {
  const slug = tpl.title_cn.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '');
  const filename = path.join(postsDir, `${slug}.md`);
  
  if (!fs.existsSync(filename)) {
    const content = generateContent(tpl.title_cn, tpl.category);
    fs.writeFileSync(filename, content);
    newArticles.push(tpl.title_cn);
    console.log(`Created: ${tpl.title_cn}`);
  }
}

console.log(`\n📰 文章抓取完成！`);
console.log(`- 新文章: ${newArticles.length} 篇`);
console.log(`- 路径: ${postsDir}`);
console.log(`- 时间: ${new Date().toLocaleString('zh-CN')}`);

// 统计
const totalFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md')).length;
console.log(`- 总文章: ${totalFiles} 篇`);

console.log('\n=== Task Complete ===');
