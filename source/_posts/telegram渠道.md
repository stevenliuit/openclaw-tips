---
title: Telegram渠道
date: 2026-03-13
categories:
  - 渠道
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 配置和使用Telegram渠道的详细指南，包括机器人设置和命令配置。
---

<h2>Telegram概述</h2><p>OpenClaw通过grammY库支持Telegram机器人，提供可靠的消息传递。</p><h2>配置</h2><h3>创建机器人</h3><ol><li>在Telegram中与@BotFather对话</li><li>发送/newbot创建新机器人</li><li>获取API Token</li></ol><h3>配置文件</h3><pre><code>{ "channels": { "telegram": { "enabled": true, "botToken": "YOUR_BOT_TOKEN" } } }</code></pre><h2>私信设置</h2><p>默认情况下，Telegram私信需要配对。用户在第一次发送消息时会收到配对码。</p><p>使用openclaw pairing approve telegram code批准连接。</p><h2>群组配置</h2><p>将机器人添加到群组：</p><ul><li>在群组设置中启用机器人</li><li>配置channels.telegram.groupMode来控制群组行为</li></ul><h2>命令</h2><p>可以配置自定义命令。</p><h2>注意事项</h2><ul><li>不要使用Bun运行时——存在已知问题</li><li>使用Node运行时以获得最佳兼容性</li></ul>
