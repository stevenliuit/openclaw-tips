---
title: 如何使用Ollama安装OpenClaw（分步教程）
date: 2026-03-13
categories:
  - 教程
tags:
  - OpenClaw
source: HackerNoon @proflead
description: 
---

## 如何使用Ollama安装OpenClaw（分步教程）

想象一下，有一个个人AI代理在你的电脑上运行。它可以读取文件、运行命令、自动化任务，并记住你的工作流程。在本指南中，你将学习如何在本地运行OpenClaw并选择最佳本地LLM模型。

此设置允许你：在本地运行AI代理、保持数据隐私、避免云API成本、构建强大的自动化工作流。

在本教程结束时，你将拥有一个使用Ollama运行本地模型的OpenClaw。

## 什么是OpenClaw？

OpenClaw是一个开源AI代理框架。与普通聊天机器人不同，OpenClaw可以在你的电脑上执行实际操作。例如，它可以：运行终端命令、读取和编辑文件、自动化工作流程、控制浏览器、使用本地内存记住任务。OpenClaw充当LLM推理模型与操作系统之间的桥梁。

## 为什么使用Ollama运行OpenClaw？

使用Ollama运行OpenClaw可以获得完全本地的AI代理。

1. 完全隐私。所有数据都保存在你的电脑上。
2. 无API成本。你不需要OpenAI或云提供商。
3. 性能更快。本地模型消除网络延迟。
4. 持久内存。OpenClaw将对话存储在本地Markdown文件中，实现长期记忆。
5. 消息界面。你可以通过Telegram、Slack、WhatsApp控制OpenClaw。这允许你从手机触发工作流。

## 适合OpenClaw的最佳本地模型

选择正确的本地模型对于可靠的代理行为非常重要。为了可靠的工具使用，请使用14B或更大的模型。小模型在执行多步骤命令时经常会失败。

## 如何使用Ollama安装OpenClaw

### 步骤1 — 安装Ollama

安装Ollama：
```
curl -fsSL https://ollama.com/install.sh | sh
```

验证安装：
```
curl http://localhost:11434/api/tags
```

然后从ollama.com网站下载以下模型之一：qwen3-coder（专为编码任务优化）、glm-4.7（强大的通用模型）、gpt-oss:20b（平衡性能和速度）、gpt-oss:120b（改进的能力）。

命令示例：
```
ollama run qwen3-coder
```

### 步骤2 — 安装OpenClaw

安装OpenClaw：
```
curl -fsSL https://openclaw.ai/install.sh | bash
```

使用以下命令通过Ollama运行OpenClaw：
```
ollama launch openclaw
```

## 安全警告：关于"内核模块"

截至2026年3月的安全更新，OpenClaw的广泛权限是一把双刃剑。因为它在内核/操作系统级别运行：

禁用网络搜索：对于完全本地化的工作流，请将搜索切换为false。在配置中，确保没有数据片段发送到搜索引擎。

审计日志：OpenClaw将每个操作保存在本地日志中。定期检查这些日志，确保你的代理没有执行"幽灵操作"。

人工介入：对于敏感命令（如rm -rf或发送外部电子邮件），始终将工具权限设置为"询问"。

## 结论

如果你按照本指南的步骤操作，现在应该拥有一个使用本地模型运行的OpenClaw。尝试一下，尝试不同的模型，看看你可以自动化哪些类型的工作流。

