---
title: Docker安装
date: 2026-03-13
categories:
  - 安装配置
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 使用Docker安装OpenClaw的完整指南，包括Docker Compose配置。
---

<h2>Docker安装概述</h2><p>OpenClaw可以通过Docker安装，提供隔离的运行环境。</p><h2>前置条件</h2><ul><li>Docker 20.10+</li><li>Docker Compose（可选）</li></ul><h2>快速开始</h2><pre><code>docker run -d --name openclaw -p 18789:18789 -v openclaw-data:/root/.openclaw openclaw/openclaw:latest</code></pre><h2>Docker Compose</h2><pre><code>version: 3.8 services: openclaw: image: openclaw/openclaw:latest ports: - 18789:18789 volumes: - openclaw-data:/root/.openclaw</code></pre><h2>数据持久化</h2><p>将~/.openclaw目录映射到容器以持久化配置和凭证。</p><h2>注意事项</h2><ul><li>WhatsApp需要持久化凭证</li><li>某些功能可能需要额外配置</li></ul>
