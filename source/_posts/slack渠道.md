---
title: Slack渠道
date: 2026-03-13
categories:
  - 渠道
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 配置和使用Slack渠道的详细指南，包括应用设置和工作区集成。
---

<h2>Slack概述</h2><p>OpenClaw支持Slack应用，允许在Slack工作区中运行智能体。</p><h2>配置</h2><h3>创建Slack应用</h3><ol><li>访问Slack API门户</li><li>创建新应用</li><li>配置OAuth权限</li><li>安装到工作区</li></ol><h3>所需权限</h3><ul><li>channels:history</li><li>channels:read</li><li>chat:write</li><li>users:read</li><li>im:history</li></ul><h3>配置文件</h3><pre><code>{ "channels": { "slack": { "enabled": true, "botToken": "xoxb-...", "signingSecret": "..." } } }</code></pre><h2>事件订阅</h2><p>配置要订阅的事件：</p><ul><li>message.channels</li><li>message.im</li><li>app_mention</li></ul><h2>交互式组件</h2><p>支持按钮、选择菜单等交互式元素。</p>
