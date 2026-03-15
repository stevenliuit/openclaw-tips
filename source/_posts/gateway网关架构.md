---
title: Gateway网关架构
date: 2026-03-13
categories:
  - 核心概念
tags:
  - OpenClaw
source: docs.openclaw.ai
description: 深入理解OpenClaw的核心架构，包括Gateway网关、客户端、节点的通信机制和协议
---

<h2>Gateway网关架构</h2><h2>概述</h2><p>单个长期运行的Gateway网关拥有所有消息平台（通过Baileys的WhatsApp、通过grammY的Telegram、Slack、Discord、Signal、iMessage、WebChat）。</p><p>控制平面客户端（macOS应用、CLI、Web界面、自动化）通过配置的绑定主机（默认127.0.0.1:18789）上的WebSocket连接到Gateway网关。</p><p>节点（macOS/iOS/Android/无头设备）也通过WebSocket连接，但声明role: node并带有明确的能力/命令。</p><h2>组件和流程</h2><h3>Gateway网关（守护进程）</h3><ul><li>维护提供商连接</li><li>暴露类型化的WS API（请求、响应、服务器推送事件）</li><li>根据JSON Schema验证入站帧</li><li>发出事件如agent、chat、presence、health、heartbeat、cron</li></ul><h3>客户端（mac应用/CLI/web管理）</h3><ul><li>每个客户端一个WS连接</li><li>发送请求（health、status、send、agent、system-presence）</li><li>订阅事件（tick、agent、presence、shutdown）</li></ul><h3>节点（macOS/iOS/Android/无头设备）</h3><ul><li>以role: node连接到同一个WS服务器</li><li>在connect中提供设备身份；配对是基于设备的</li><li>暴露命令如canvas.*、camera.*、screen.record、location.get</li></ul><h2>连接生命周期（单个客户端）</h2><p>Client发送req:connect → Gateway回复res (ok)（payload=hello-ok carries snapshot）→ 开始事件循环</p><h2>线路协议（摘要）</h2><ul><li>传输：WebSocket，带JSON载荷的文本帧</li><li>第一帧必须是connect</li><li>握手后：请求格式：{type:req, id, method, params} → {type:res, id, ok, payload|error}</li><li>事件格式：{type:event, event, payload, seq?, stateVersion?}</li></ul><h2>配对+本地信任</h2><p>所有WS客户端在connect时包含设备身份。新设备ID需要配对批准；Gateway网关为后续连接颁发设备令牌。本地连接（loopback或Gateway网关主机自身的tailnet地址）可以自动批准。非本地连接必须签名connect.challenge nonce并需要明确批准。</p><h2>远程访问</h2><p>推荐：Tailscale或VPN。替代方案：SSH隧道ssh -N -L 18789:127.0.0.1:18789 user@host</p><h2>不变量</h2><ul><li>每台主机恰好一个Gateway网关控制单个Baileys会话</li><li>握手是强制的；任何非JSON或非connect的第一帧都会导致硬关闭</li><li>事件不会重放；客户端必须在出现间隙时刷新</li></ul>
