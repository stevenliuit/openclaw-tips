---
title: Gateway网关运行手册
date: 2026-03-13
categories:
  - Gateway运维
tags:
  - OpenClaw
source: docs.openclaw.ai
description: 全面的Gateway网关运维指南，包含运行、配置、远程访问、多实例和服务管理
---

<h2>Gateway网关运行手册</h2><h2>是什么</h2><p>拥有单一Baileys/Telegram连接和控制/事件平面的常驻进程。CLI入口点：openclaw gateway。运行直到停止；出现致命错误时以非零退出码退出，以便supervisor重启它。</p><h2>如何运行（本地）</h2><p>openclaw gateway --port 18789</p><p>在stdio中获取完整的调试/追踪日志：openclaw gateway --port 18789 --verbose</p><p>如果端口被占用，终止监听器然后启动：openclaw gateway --force</p><p>开发循环（TS更改时自动重载）：pnpm gateway:watch</p><h2>配置热重载</h2><p>默认模式：gateway.reload.mode=hybrid（热应用安全更改，关键更改时重启）。将WebSocket控制平面绑定到127.0.0.1:port（默认18789）。同一端口也提供HTTP服务（控制界面、hooks、A2UI）。</p><h2>远程访问</h2><p>首选Tailscale/VPN；否则使用SSH隧道：ssh -N -L 18789:127.0.0.1:18789 user@host</p><h2>多个Gateway网关（同一主机）</h2><p>通常不需要：一个Gateway网关可以服务多个消息渠道和智能体。仅在需要冗余或严格隔离时使用多个。</p><p>macOS：bot.molt.&lt;profile&gt;</p><p>Linux：openclaw-gateway-&lt;profile&gt;.service</p><p>Windows：OpenClaw Gateway (&lt;profile&gt;)</p><h2>协议</h2><p>客户端必须发送的第一帧：req {type:req, id, method:connect, params:{...}}</p><p>Gateway网关回复res {type:res, id, ok:true, payload:hello-ok}</p><h2>方法</h2><ul><li>health — 完整健康快照</li><li>status — 简短摘要</li><li>system-presence — 当前presence列表</li><li>send — 通过活跃渠道发送消息</li><li>agent — 运行智能体轮次</li><li>node.list — 列出已配对+当前连接的节点</li><li>node.describe — 描述节点</li><li>node.invoke — 在节点上调用命令</li><li>node.pair.* — 配对生命周期</li></ul><h2>事件</h2><ul><li>agent — 来自智能体运行的流式工具/输出事件</li><li>presence — presence更新</li><li>tick — 定期保活/无操作</li><li>shutdown — Gateway网关正在退出</li></ul><h2>服务管理（CLI）</h2><ul><li>openclaw gateway status</li><li>openclaw gateway install</li><li>openclaw gateway stop</li><li>openclaw gateway restart</li><li>openclaw logs --follow</li></ul><h2>监管（macOS）</h2><p>使用launchd保持服务存活：Program：openclaw的路径、Arguments：gateway、KeepAlive：true</p><h2>监管（systemd用户单元）</h2><p>OpenClaw在Linux/WSL2上默认安装systemd用户服务。</p><p>启用lingering：sudo loginctl enable-linger youruser</p><p>然后启用服务：systemctl --user enable --now openclaw-gateway[-&lt;profile&gt;].service</p><h2>Windows（WSL2）</h2><p>Windows安装应使用WSL2并遵循上面的Linux systemd部分。</p><h2>运维检查</h2><ul><li>存活检查：打开WS并发送req:connect → 期望收到payload.type=hello-ok</li><li>就绪检查：调用health → 期望ok: true并在linkChannel中有已关联的渠道</li><li>调试：订阅tick和presence事件</li></ul>
