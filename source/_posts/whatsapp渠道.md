---
title: WhatsApp渠道
date: 2026-03-13
categories:
  - 渠道
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 配置和使用WhatsApp渠道的详细指南，包括登录、配对和消息处理。
---

<h2>WhatsApp概述</h2><p>OpenClaw通过Baileys库支持WhatsApp，允许你通过WhatsApp与智能体交互。</p><h2>配置</h2><h3>QR码登录</h3><p>运行以下命令启动WhatsApp登录流程：</p><p>openclaw channels login</p><p>然后在WhatsApp上：设置→链接设备→扫描显示的QR码</p><h3>配置文件</h3><p>在openclaw.json中配置：</p><pre><code>{ "channels": { "whatsapp": { "enabled": true } } }</code></pre><h2>安全设置</h2><h3>允许的消息来源</h3><p>配置channels.whatsapp.allowFrom来限制可以发送消息的用户。</p><p>allowFrom: ["+1234567890"] // 只允许特定号码</p><p>allowFrom: ["*"] // 允许所有人</p><h3>配对模式</h3><p>默认启用配对模式，新联系人需要批准才能与智能体对话。</p><p>openclaw pairing approve whatsapp code</p><h2>已知限制</h2><ul><li>不支持频道</li><li>不支持状态消息</li><li>需要保持设备在线</li></ul><h2>故障排除</h2><p>如果连接断开，运行openclaw channels login重新连接。</p>
