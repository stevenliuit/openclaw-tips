---
title: Exec工具
date: 2026-03-13
categories:
  - 工具自动化
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 使用Exec工具执行shell命令，包括安全配置和最佳实践。
---

<h2>Exec工具概述</h2><p>Exec工具允许智能体执行shell命令，与系统进行交互。</p><h2>配置</h2><pre><code>tools: exec: enabled: true allow: - "*"</code></pre><h2>安全策略</h2><ul><li>deny - 拒绝所有执行</li><li>ask - 执行前询问</li><li>approved - 只允许已批准命令</li><li>allowlist - 白名单模式</li></ul><h2>沙箱执行</h2><p>Exec工具可以在沙箱中运行以提高安全性。</p><h2>批准管理</h2><p>配置exec.approvals来管理命令批准。</p>
