---
title: Windows (WSL2) - 官方文档
date: 2026-03-13
categories:
  - 平台
tags:
  - OpenClaw
source: docs.openclaw.ai
description: OpenClaw Windows平台安装指南。
---

<h2>Windows (WSL2)</h2><p>推荐通过WSL2运行OpenClaw。</p><h2>安装WSL2</h2><p>PowerShell: wsl --install</p><h2>启用systemd</h2><p>编辑 /etc/wsl.conf 设置 systemd=true</p><h2>安装OpenClaw</h2><p>git clone + pnpm install + pnpm build + openclaw onboard</p><h2>服务</h2><p>openclaw onboard --install-daemon</p>
