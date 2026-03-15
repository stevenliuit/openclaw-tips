---
title: 掌握AWS上的OpenClaw：微调个性、记忆和灵魂
date: 2026-03-01
categories:
  - 高级技巧
tags:
  - OpenClaw
source: DEV Community @Indika_Wimalasuriya
description: 深入理解OpenClaw的身份核心文件：AGENTS.md、SOUL.md、IDENTITY.md、USER.md、TOOLS.md和MEMORY.md。
---

<h2>前言</h2><p>我已经使用 OpenClaw 已有一段时日。在我的第一篇文章中，我专注于如何在 AWS 上设置 OpenClaw 并快速运行它。</p><p>在这篇后续文章中，我想深入探讨你应该关注的关键功能，以真正充分利用你的实例。首先，你必须意识到 OpenClaw 有自己的"个性"。你越调整这些设置，智能体从长远来看就会为你表现越好。</p><h2>了解你的 OpenClaw</h2><p>OpenClaw 智能体由存储在工作区内的特定核心文件集定义。理解这些文件是自定义智能体行为和智能的秘诀。</p><h2>身份核心文件</h2><p>要真正"升级"你的 OpenClaw 实例，你需要深入研究。这些文件不仅仅是文档——它们是智能体每次醒来时读取的活动指令。</p><p>我们可以将 OpenClaw 框架概念化为三层架构，组织成不同的层次：身份、运营和知识。</p><h2>1. AGENTS.md：运营规则</h2><p>AGENTS.md 定义工作区规则和行为指南。它就像你的 AI 的"标准操作程序"（SOP）。</p><p>打开你的 AGENTS.md；它应该是这样的：</p><pre><code>## 每个会话
在做任何其他事情之前：
1. 读取 `SOUL.md` — 这是你是谁
2. 读取 `USER.md` — 这是你在帮助谁
3. 读取 `memory/YYYY-MM-DD.md`（今天 + 昨天）了解最近上下文
4. **如果在主会话中**（与人的直接聊天）：还要读取 `MEMORY.md`
不要问许可。只是做。</code></pre><p><strong>专业提示：</strong>更改这些步骤以匹配你的特定需求。如果你想让智能体先检查特定项目文件夹，请在这里添加！</p><h2>2. SOUL.md：个性核心</h2><p>SOUL.md 是智能体的核心——它决定其个性和核心原则。打开你的 SOUL.md 并准备惊喜。给你的智能体一个善良的灵魂，它将以更大的关怀对待你的项目。</p><h2>3. IDENTITY.md：档案</h2><p>IDENTITY.md 包含智能体的姓名和基本身份详情。在最初几次运行时，智能体会尝试找到这些问题的答案。正确设置它有助于智能体保持一致的"声音"。</p><h2>4. USER.md：处理者的档案</h2><p>这个文件是关于你——人类、处理者和智能体的朋友。更新这个文件，以便智能体确切知道如何最好地帮助你。</p><h2>5. TOOLS.md：能力地图</h2><p>这是工具文件——你提供的所有能力必须记录在这里。这是智能体的核心实力。它告诉智能体如何使用你构建的环境。</p><h2>6. MEMORY.md：长期日志</h2><p>MEMORY.md 是智能体的长期记忆。与每日日志不同，这个文件是用于需要在数月工作中持久化的高级上下文。当你完成一个主要项目时，你的智能体应该在这里总结关键要点，这样它就永远不会忘记你喜欢如何做事。</p><p><strong>专业提示：</strong>将你的 OpenClaw 与 GitHub 连接。让智能体在带有版本控制的仓库中备份这些文件。这确保你的智能体高效运作，并保持"存活"你想要多久就多久。</p><h2>记忆管理：秘方</h2><p>OpenClaw 和典型 LLM 交互之间最大的区别是这个智能体有持久记忆。它需要一个地方存储它学到的东西，这发生在这里：workspace/memories/</p><p><strong>每日日志和文档：</strong></p><p>memory/：每日记忆文件（格式为 YYYY-MM-DD.md）。这些记录智能体的工作会话、决策和逻辑。</p><p><strong>专业提示：</strong>也将这些记忆文件发送到你的 Git 仓库！智能体创建许多工具（实用脚本）来执行任务。确保智能体更新工具部分并在 Git 中备份这些脚本。</p><p><strong>什么不应该进入 Git：</strong></p><p>通过忽略以下内容高效管理你的仓库：</p><ul><li>非请求的任务系统文件</li><li>临时/日志文件或 .backup 文件</li></ul><h2>训练你的新"团队成员"</h2><p>我喜欢将我的 OpenClaw 视为一个新团队成员。我们需要提供明确的指导方针并牵着它的手，直到它"长大"。</p><p><strong>我给智能体的执行计划：</strong></p><ul><li><strong>读取配置</strong>：每个会话从读取 AGENTS.md、SOUL.md、USER.md 和最近的记忆文件开始。</li><li><strong>更新记忆</strong>：在重大工作后记录更新（决策、教训、偏好）。</li><li><strong>Git 提交</strong>：在完成有意义的 工作块后提交。</li><li><strong>Git 推送</strong>：只要有连接就推送提交。</li></ul><p><strong>Token 存储：</strong>使用 ~/.git-credentials 实现无缝仓库访问。</p><h2>处理"旧"记忆（1 个月以上）：</h2><ul><li><strong>首先搜索</strong>：使用 memory_search 工具语义搜索所有文件。</li><li><strong>检索</strong>：使用 memory_get 读取找到的特定片段。</li><li><strong>历史检查</strong>：如果没找到，检查 Git 提交历史以获取上下文。</li><li><strong>人类输入</strong>：如果其他都失败，向处理者（我）询问细节。</li></ul><h2>API 密钥和能力管理</h2><p>你的智能体只和你给它的能力一样好。这归结为 API 密钥。Token 管理和安全是智能体的关键角色。</p><h3>安全 Token 实现</h3><p>将所有 token 存储在 .env 文件中（并确保它在你的 .gitignore 中！）。</p><pre><code># .env 文件 - 永不提交到 Git！
export JIRA_TOKEN="xxx"
export DATADOG_KEY="yyy"
export BRAVE_API_KEY="zzz"</code></pre><p><strong>安全黄金法则：</strong></p><ul><li>❌ 永不将密钥提交到 Git。</li><li>❌ 永不将密钥硬编码在脚本中。</li><li>❌ 永不将密钥存储在纯文本文件中。</li></ul><p>⚠️ 如果密钥泄露：立即重新生成，撤销旧的，并更新你的 .env。</p><h3>跟踪能力</h3><p>通过结合 TOOLS.md、记忆文件和 .env，智能体始终知道它能做什么。</p><ul><li><strong>会话开始</strong>：智能体检查 .env 寻找 BRAVE_API_KEY。</li><li><strong>逻辑</strong>："我看到 Brave 键，因此我知道我有网络搜索能力。"</li><li><strong>结果</strong>：用户请求搜索 → 智能体使用 web_search 工具 → 结果记录在今天的记忆中。</li></ul><p>简而言之：TOOLS.md + 记忆 + 环境检查 = 一个有能力的智能体。</p><h2>专业提示：掌握 OpenClaw 网关仪表板</h2><p>虽然终端非常适合日志，但 OpenClaw 仪表板是智能体大脑的指挥中心。它允许你可视化记忆、调优模型参数并监控实时工具执行。</p><h3>安全方式：SSH 隧道</h3><p>由于我们在 AWS 上为安全锁定了网关，我们使用 SSH 隧道将远程服务"桥接"到我们的本地浏览器。这使你的 API 密钥和聊天数据加密并远离公共互联网。</p><p><strong>建立桥梁（在你的本地 PC 上运行）：</strong></p><pre><code>Bash
ssh -i "your-key.pem" -N -L 18789:127.0.0.1:18789 ec2-user@<AWS 实例公共 IP></code></pre><p>保持此终端窗口打开；它作为你安全加密的管道。</p><p><strong>访问指挥中心：</strong>一旦隧道激活，导航到你的本地环回地址：</p><pre><code>URL: http://localhost:18789/#token=<你的 token ID></code></p><h2>如何找到你的 Token？</h2><p>安全内置于 OpenClaw。如果你手边没有 token，只需在任何连接的渠道（WhatsApp、Telegram 或 TUI）中询问你的智能体：</p><pre><code>"我的仪表板 token 是什么？"</code></pre>
