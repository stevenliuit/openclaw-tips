---
title: Webhooks
date: 2026-03-13
categories:
  - 工具自动化
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 使用Webhooks实现OpenClaw与外部服务的集成。
---

<h2>Webhook概述</h2><p>Webhooks允许OpenClaw与外部服务进行集成。</p><h2>配置</h2><pre><code>hooks: enabled: true token: your-token</code></pre><h2>事件类型</h2><ul><li>message.received - 收到消息</li><li>message.sent - 发送消息</li><li>agent.run - 智能体运行</li><li>health.status - 健康状态</li></ul><h2>发送数据</h2><p>Webhook POST请求包含事件数据。</p><h2>安全</h2><p>使用令牌验证webhook请求。</p>
