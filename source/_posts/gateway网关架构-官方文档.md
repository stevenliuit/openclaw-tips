---
title: Gateway网关架构 - 官方文档
date: 2026-03-13
categories:
  - 核心概念
tags:
  - OpenClaw
source: docs.openclaw.ai
description: 深入理解OpenClaw的核心架构。
---

<h2>Gateway网关架构</h2><h2>概述</h2><p>单个长期运行的Gateway网关拥有所有消息平台（WhatsApp、Telegram、Slack等）</p><h2>组件</h2><h3>Gateway网关</h3><ul><li>维护提供商连接</li><li>暴露类型化WS API</li><li>发出事件</li></ul><h3>客户端</h3><p>每个客户端一个WS连接</p><h3>节点</h3><p>以role: node连接</p><h2>协议</h2><p>WebSocket + JSON。第一帧必须是connect。</p><h2>远程访问</h2><p>Tailscale/VPN或SSH隧道</p>
