---
title: Skills
date: 2026-03-13
categories:
  - Skills
tags:
  - OpenClaw
source: OpenClaw官方文档
description: 了解OpenClaw的Skills系统，包括安装、配置、安全注意事项和格式规范。
---

<h2>概述</h2><p>OpenClaw使用兼容AgentSkills的Skills文件夹来教智能体如何使用工具。每个Skills是一个包含SKILL.md的目录。</p><h2>位置和优先级</h2><p>Skills从三个位置加载：</p><ul><li>内置Skills：随安装包一起发布</li><li>托管/本地Skills：~/.openclaw/skills</li><li>工作区Skills：workspace/skills</li></ul><p>优先级：workspace/skills（最高）→ ~/.openclaw/skills → 内置Skills（最低）</p><h2>单智能体vs共享Skills</h2><p>在多智能体设置中，每个智能体有自己的工作区。工作区Skills仅供该智能体使用，托管/本地Skills对所有智能体可见。</p><h2>插件+Skills</h2><p>插件可以通过openclaw.plugin.json中列出skills目录来发布自己的Skills。</p><h2>ClawHub（安装+同步）</h2><p>ClawHub是OpenClaw的公共Skills注册表。浏览https://clawhub.com。</p><p>常见流程：</p><ul><li>将Skills安装到你的工作区：clawhub install skill-slug</li><li>更新所有已安装的Skills：clawhub update --all</li></ul><h2>安全注意事项</h2><p>将第三方Skills视为不受信任的代码。启用前请阅读它们。</p><p>对于不受信任的输入和高风险工具，优先使用沙箱隔离运行。</p><h2>格式（AgentSkills+Pi兼容）</h2><p>SKILL.md必须至少包含：</p><pre><code>--- name: skill-name description: Skill description ---</code></pre><h2>门控（加载时过滤）</h2><p>OpenClaw使用metadata在加载时过滤Skills。</p><h2>配置覆盖</h2><p>内置/托管Skills可以被切换并提供环境变量值。</p><h2>环境变量注入</h2><p>当智能体运行开始时，OpenClaw将任何skills.entries.key.env或apiKey应用到process.env。</p><h2>会话快照（性能）</h2><p>OpenClaw在会话开始时对有资格的Skills进行快照，并在同一会话的后续轮次中重用该列表。</p><h2>Skills监视器（自动刷新）</h2><p>默认情况下，OpenClaw监视Skills文件夹，并在SKILL.md文件更改时更新Skills快照。</p>
