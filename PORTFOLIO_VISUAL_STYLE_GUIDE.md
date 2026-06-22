# Yin Jiangnan Portfolio Visual Style Guide

本文档用于记录当前作品集网站的视觉语言、页面结构、组件规则和项目页延展方式。它适用于后续维护首页、项目详情页、Figma 设计稿和新增作品页时保持风格一致。

## 1. Design Read

这是一个个人设计作品集网站，不是商业 SaaS 页面，也不是论文式项目归档。整体气质应保持为：

- 轻量、编辑感、克制的个人作品集。
- 以作品图像、项目节奏和系统思考为主，文字保持短而清晰。
- 视觉语言接近艺术院校作品集和独立设计师网站：留白充足、细线分隔、低装饰、低卡片化。
- 页面需要让项目内容显得有研究深度，但界面本身不能压过作品。

推荐的设计参数：

- `DESIGN_VARIANCE: 6`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 4`

解释：网站有明显的个人视觉记忆点，例如首页 curtain hero 和 timeline works，但整体仍应保持可读、克制、编辑化。

## 2. Core Visual Personality

### Keywords

- Editorial
- Minimal
- Systemic
- Tactile
- Quiet
- Research-aware
- Image-led
- Line-based

### Avoid

- 不要做成通用 SaaS landing page。
- 不要使用大量圆角卡片堆叠。
- 不要使用蓝紫 AI 渐变、玻璃拟态、大面积阴影。
- 不要把项目页做成论文页面。
- 不要在每个模块都使用独立大卡片容器。
- 不要让 Bee Cue 或其他项目页脱离首页已有的字体、间距和导航风格。

## 3. Color System

当前网站代码中有一套深色基础变量，但最终页面通过全局 light override 呈现为浅色作品集。维护时以最终视觉呈现为准。

### Primary Theme

| Token | Value | Use |
| --- | --- | --- |
| Background | `#fbfbfa` | 页面主背景，接近纸面白 |
| Surface | `#ffffff` | 极少量内容面，不作为主要卡片背景 |
| Text | `#111111` | 主标题、重要文本 |
| Muted Text | `#66665f` | 正文、说明、caption |
| Secondary Text | `#55554f` | 时间线、小标签、辅助信息 |
| Nav Text | `#3f3f3c` | 导航、品牌名 |
| Warm Media Base | `#e8e4db` | 图片占位、媒体底色 |
| Soft Pill | `#ece9e1` | 标签、hover 背景 |
| Light Line | `rgba(17, 17, 17, 0.12)` | 常规分隔线 |
| Medium Line | `rgba(17, 17, 17, 0.18)` | row 分隔线 |
| Strong Line | `rgba(17, 17, 17, 0.28)` | section 起始线 |
| Bee Cue Accent | `#8f5c24` | Bee Cue 项目页局部强调 |

### Usage Rules

- 页面基调使用浅色，不要在一个项目页内频繁切换深浅主题。
- 黑色文字和米白背景是主关系，颜色不应太多。
- `#8f5c24` 只作为 Bee Cue 或生态项目的点状强调，不要扩展成大面积棕色主题。
- 媒体占位使用暖灰米色，不要使用纯灰或随机渐变。
- 分隔线是主要结构元素，优先级高于阴影和卡片背景。

## 4. Typography

### Font

主字体：`Manrope`

```css
font-family: "Manrope", sans-serif;
```

### Type Character

- 字体整体偏现代、干净、技术但不冰冷。
- 大标题使用高字重、紧凑行高和负 letter spacing，形成作品集的强识别。
- 正文保持舒展行高，便于快速扫描。

### Type Scale

| Element | Suggested Style | Notes |
| --- | --- | --- |
| Homepage hidden H1 | Visually hidden | 首页主视觉依靠 curtain，不直接显示大标题 |
| Project hero H1 | `clamp(4.2rem, 9vw, 9.8rem)` | 极大、uppercase、紧凑 |
| Project hero subtitle | `clamp(1.45rem, 2.25vw, 2.65rem)` | 作为项目说明的强标题 |
| Section heading | `clamp(2rem, 4vw, 4.8rem)` 附近 | 应大而短，不写长段 |
| Feature heading | `clamp(1.8rem, 3.6vw, 4.4rem)` | 可用于横向 feature row |
| Body | `1rem` 到 `1.2rem` | 行高约 `1.62` 到 `1.7` |
| Micro label | `0.7rem` 到 `0.9rem` | 用于 timeline、eyebrow、编号 |
| Nav | `0.86rem` | 带 underline，低调 |

### Typography Rules

- 大标题可以使用 uppercase，但不要把所有文案都大写。
- 不使用 serif 作为默认字体。
- 不使用过度装饰性的 italic。
- 正文每段尽量短，作品集页应以短文案和图像推进。
- `letter-spacing` 只在大标题中允许明显负值，小文本保持 `0`。

## 5. Layout System

### Page Width

首页主容器：

```css
width: min(var(--max-width), calc(100% - 44px));
--max-width: 1980px;
```

项目详情页主容器：

```css
width: min(1480px, calc(100% - 160px));
```

### Grid Logic

网站主要使用 CSS Grid，而不是复杂 flex 百分比计算。

常见结构：

- 首页 works：左侧 sticky timeline，右侧作品列表。
- 项目页 hero：左侧文字，右侧主视觉，比例约 `0.42fr / 0.58fr`。
- 项目页 section：左侧 section label，右侧正文或媒体。
- Bee Cue row：开放式行布局，使用细线和列宽组织信息。

### Spacing

- 顶部固定导航高度约 `62px`。
- 首页 works section 上下约 `92px`。
- 项目页 main 顶部约 `82px`。
- 项目 section 使用较大的上下间距，但内部 row 保持紧凑。
- row 内常见 padding：`18px 0` 或 `24px 0`。
- 图片与文字之间使用 `clamp(18px, 3vw, 42px)` 这类弹性间距。

### Layout Rules

- 优先使用开放式 section，不要每个模块包成卡片。
- 用细线、列宽、留白建立层级。
- 图片、视频、录屏是内容核心，应占据足够面积。
- 项目页不要做很重的装饰背景。
- 移动端一律折叠为单列，保留阅读顺序。

## 6. Navigation

### Homepage Navigation

结构：

- 左侧品牌：`Yin Jiangnan` 与 `/ Nevena` 两行。
- 右侧链接：`Index / Works / Info / Contact`。
- 链接使用 underline，低调而明确。

视觉规则：

- 固定在页面顶部。
- 默认透明。
- 滚动后使用浅色半透明背景、轻微 blur 和 1px 底线。
- 不使用胶囊导航背景。

### Project Page Navigation

项目页应继承首页导航，不重新定义完全不同的 nav。

Bee Cue 当前导航：

- `Index`
- `Works`
- `Info`
- `Film`
- `Contact`

允许在项目页增加少量项目相关入口，例如 `Film`，但必须沿用首页导航的字体、间距、underline 语言。

### Anchor Navigation

Bee Cue 使用 sticky anchor nav：

- 小型 pill 链接。
- 背景为浅色半透明。
- 使用 `backdrop-filter: blur(14px)`。
- 用于长项目页快速跳转。

注意：anchor nav 是项目页辅助导航，不应变成主视觉重点。

## 7. Homepage Patterns

### Curtain Hero

首页的核心记忆点是由字符和线构成的 curtain hero。

特征：

- 单字母悬挂在线上。
- 进入页面时线条与字符轻微出现。
- 鼠标移动时有轻微摆动。
- 不是普通大标题 hero。

维护规则：

- 不要用普通居中大标题替代 curtain hero。
- 动效应轻微、物理感、可被忽略。
- hero 文本有可访问性 H1，但视觉上隐藏。

### Works Timeline

首页作品区由两部分组成：

- 左侧 sticky timeline，按年份组织。
- 右侧作品图像列表。

视觉特征：

- 时间线使用细线分隔。
- 当前项目通过 opacity 和 font weight 强调。
- 作品卡不是传统圆角卡片，而是图像区加顶部标题和标签。
- hover 只做图片 scale、opacity 和轻量 overlay。

维护规则：

- 新项目必须同步加入 timeline 和 works grid。
- 作品图像优先真实素材，不使用纯色占位作为最终效果。
- 标签保持短，不超过 3 个。

## 8. Project Page Patterns

### Standard Project Page

基础项目页可以使用：

- 大图 hero。
- 项目 metadata。
- 内容 panel。
- gallery grid。
- video block。
- see also。

但需要遵守：

- 卡片感要弱。
- 背景透明或极淡。
- 使用 border-top 和 border-bottom 建立结构。
- 不要做成模板化 case study。

### Bee Cue Project Page

Bee Cue 是当前最完整的项目页，应作为新增复杂项目页的参考。

核心结构：

1. Hero
2. Anchor nav
3. Project Overview
4. Design Challenge
5. Research
6. Key Insight
7. Design Goal
8. System Logic
9. Final Design
10. Key Features
11. Prototype Demo
12. Project Film
13. Reflection
14. Meta board

Bee Cue 的重点不是商业转化，而是展示系统设计、数据逻辑、交互与视觉化能力。

### Bee Cue Visual Rules

- Hero 使用左文右图，标题极大。
- Overview 使用开放式 row，而不是卡片网格。
- Research 使用图像 + 标签 + 短文案的横向 row。
- Key features 使用大图 + 大标题的横向列表，不要交替成太模板化的 zigzag。
- System logic 可以展示流程，但要写成“系统如何生成判断参考”，不要写成论文算法章节。
- Project film 放在页面后半部分。

## 9. Components

### Tags

标签用于项目属性、方法、年份。

```css
border-radius: 4px;
background: #efefec 或 #ece9e1;
font-size: 0.75rem;
font-weight: 700;
```

规则：

- 标签短而具体。
- 不要堆太多标签。
- 不要使用彩色 badge 系统。

### Buttons

按钮只用于明确 action，例如 `View Prototype`、`Watch Project Film`、`Launch Prototype`。

规则：

- 主要按钮黑底浅字。
- 次要按钮透明背景 + 细线。
- pill radius 仅用于按钮和 anchor nav。
- hover 使用 `translateY(-2px)`，不要复杂动画。

### Rows

开放式 row 是当前作品集最重要的结构语言。

特征：

- `border-top` 开始。
- 每行 `border-bottom`。
- 左侧小标签或编号。
- 中间标题。
- 右侧说明。
- 背景透明。

适合：

- Overview metadata。
- Insight。
- Goal。
- Logic。
- Reflection。
- Demo flow。

不适合：

- 需要强视觉展示的最终界面图。
- 大量图片 gallery。

### Media

图片和视频是项目页的主要叙事材料。

规则：

- 使用真实项目图、录屏、视频 poster。
- 图片容器不加大圆角。
- 图片 hover 可轻微 scale 到 `1.01` 到 `1.02`。
- 媒体底色使用 `#e8e4db`。
- alt 文案需要描述内容，而不是只写文件名。

## 10. Motion

### Existing Motion

- `.reveal`：滚动进入时 opacity + translateY。
- progress bar：顶部 2px 页面滚动进度。
- site nav：滚动后变为半透明背景。
- curtain hero：鼠标移动影响字母线条摆动。
- work image hover：轻微 scale 和 opacity。
- anchor nav hover：轻微背景变化和 translateY。

### Motion Rules

- 动效用于提示层级和状态，不用于炫技。
- 单个元素动效时长通常在 `0.25s` 到 `0.6s`。
- 大范围进入动画使用 `0.55s ease`。
- 页面不使用复杂 parallax 或全屏滚动劫持。
- hover 反馈要轻，不能影响阅读效率。

## 11. Responsive Rules

### Breakpoints

当前主要断点：

- `1100px`：复杂 grid 折叠。
- `760px`：移动端导航、hero、works、project section 调整。

### Mobile Behavior

- 导航允许换行，但必须保持可读。
- 作品区 timeline 和 works grid 折叠成单列。
- 项目 hero 从左右布局变成上下布局。
- Bee Cue anchor nav 在移动端变成可横向或纵向滚动的小导航。
- 所有 row grid 在移动端变成单列。
- 大标题尺寸需要使用 `clamp()`，避免溢出。

## 12. Content Voice

### Tone

- 清晰、短句、专业但不论文。
- 重点解释“做了什么”和“为什么这样组织”。
- 保留研究和系统逻辑，但用作品集语言表达。

### Project Copy Rules

- 每个 section 开头给一个短标题。
- 正文段落尽量控制在 1 到 3 句。
- 技术部分要说明设计作用，不写成技术报告。
- 不写空泛形容词，例如 “innovative”、 “cutting-edge”。
- 不使用招聘导向话术作为页面主体。

## 13. Figma Translation Rules

把网页放进 Figma 时，优先保留以下视觉关系：

1. 页面背景、字体和主容器宽度。
2. 首页 nav 的两列结构和 underline 链接。
3. Project page 的左 label + 右内容结构。
4. Bee Cue 的开放式 row，而不是卡片。
5. 真实图片、视频 poster、录屏占位的位置与比例。
6. 大标题的字重、字距和行高。
7. 细线分隔的节奏。

Figma 中可以整理图层，但不要把开放式 row 改成一堆独立卡片。

## 14. Implementation Notes

### Existing Files

- `index.html`：首页结构。
- `project-five.html`：Bee Cue 项目页。
- `styles.css`：全站视觉系统和项目页样式。
- `script.js`：滚动 reveal、progress bar、导航状态、timeline 激活和 curtain 动效。

### CSS Architecture Notes

当前 CSS 有历史层叠结构：

- `:root` 初始变量为深色。
- 后半部分有 `Global light theme override`，使最终网站呈现为浅色。
- Bee Cue 样式分为初始 refresh 和后续 editorial pass。

后续维护时建议：

- 不要随意删掉后半段 override，除非整体重构主题系统。
- 新项目页优先复用已有 class pattern。
- 如果新增复杂项目页，可以复制 Bee Cue 的 section 结构，再按内容调整。

## 15. Quality Checklist

新增或修改页面前检查：

- 是否仍然使用 `Manrope`？
- 是否保持浅色纸面背景？
- 是否使用细线和留白建立结构，而不是大量卡片？
- 导航是否和首页一致？
- 项目页首屏是否有明确主视觉？
- 文案是否短而清晰？
- 图片、视频、录屏是否有明确位置和 alt 文案？
- 动效是否轻量？
- 移动端是否折叠为可读单列？
- Bee Cue 这类复杂项目是否保留系统逻辑，但没有写成论文？

## 16. Design Principle Summary

这个网站的视觉核心不是“漂亮的模板”，而是“克制地把复杂项目整理清楚”。  
首页通过 curtain hero 建立个人记忆点，works timeline 建立项目秩序。项目页通过大图、短文案、细线 row 和开放式布局展示研究、系统和交互能力。任何新增页面都应延续这套语言：少装饰、重节奏、重图像、重结构。
