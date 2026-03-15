---
title: macOS应用
date: 2026-03-13
categories:
  - 平台
tags:
  - OpenClaw
source: OpenClaw官方文档
description: OpenClaw macOS菜单栏应用的完整指南，包括功能、配置和节点功能。
---

<h2>概述</h2><p>macOS应用是OpenClaw的菜单栏配套应用。它拥有权限，在本地管理/附加到Gateway网关，并作为节点向智能体暴露macOS功能。</p><h2>功能</h2><ul><li>在菜单栏中显示原生通知和状态</li><li>拥有TCC提示（通知、辅助功能、屏幕录制、麦克风、语音识别、自动化/AppleScript）</li><li>运行或连接到Gateway网关（本地或远程）</li><li>暴露macOS专用工具（Canvas、相机、屏幕录制、system.run）</li></ul><h2>本地vs远程模式</h2><p><strong>本地</strong>（默认）：如果存在运行中的本地Gateway网关，应用附加到它；否则启用launchd服务。</p><p><strong>远程</strong>：应用通过SSH/Tailscale连接到Gateway网关，从不启动本地进程。</p><h2>Launchd控制</h2><p>应用管理一个标记为bot.molt.gateway的每用户LaunchAgent。</p><h2>节点功能</h2><ul><li>Canvas：canvas.present, canvas.navigate, canvas.eval, canvas.snapshot</li><li>相机：camera.snap, camera.clip</li><li>屏幕：screen.record</li><li>系统：system.run, system.notify</li></ul><h2>Exec审批</h2><p>system.run由macOS应用中的Exec审批控制（设置→Exec approvals）。</p><p>安全设置：deny/ask/allowlist</p>
