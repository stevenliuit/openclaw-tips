---
title: Discord渠道
date: 2026-03-13
categories:
  - 渠道
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 配置和使用Discord渠道的详细指南，包括机器人权限和事件处理。
---

<h2>Discord概述</h2><p>OpenClaw通过Discord API支持Discord机器人，允许在Discord服务器上运行智能体。</p><h2>配置</h2><h3>创建Discord应用</h3><ol><li>访问Discord开发者门户</li><li>创建新应用</li><li>创建机器人用户</li><li>获取机器人Token</li></ol><h3>邀请机器人</h3><p>使用OAuth2 URL生成器创建邀请链接。</p><h3>配置文件</h3><pre><code>{ "channels": { "discord": { "enabled": true, "botToken": "YOUR_BOT_TOKEN", "guildId": "YOUR_GUILD_ID" } } }</code></pre><h2>权限要求</h2><ul><li>发送消息</li><li>读取消息历史</li><li>嵌入链接</li><li>附加文件</li><li>使用外部表情</li></ul><h2>事件处理</h2><p>配置要响应的事件：</p><ul><li>直接消息</li><li>@提及</li><li>特定频道消息</li></ul><h2>斜杠命令</h2><p>注册自定义斜杠命令以触发智能体。</p>
