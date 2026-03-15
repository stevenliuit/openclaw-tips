---
title: Gateway网关配对 - 官方文档
date: 2026-03-13
categories:
  - 参考
tags:
  - OpenClaw
source: docs.openclaw.ai
description: OpenClaw Gateway网关配对系统说明。
---

<h2>Gateway网关拥有的配对</h2><h2>概念</h2><p><strong>待处理请求：</strong>需要审批</p><p><strong>已配对节点：</strong>带认证令牌</p><h2>工作原理</h2><ol><li>节点请求配对</li><li>存储待处理请求</li><li>审批或拒绝</li><li>颁发令牌</li><li>重新连接</li></ol><p>5分钟后自动过期</p><h2>CLI</h2><p>openclaw nodes pending</p><p>openclaw nodes approve</p><p>openclaw nodes reject</p>
