# Portfolio Collaboration Guide

本文档用于协作维护 Yin Jiangnan / Nevena 作品集网站。目标是让后续修改者快速理解项目结构、视觉规则、资源放置方式和上线流程，避免破坏现有风格或误传临时文件。

## 1. 项目概况

- 网站类型：个人作品集网站。
- 当前重点页面：`project-five.html`，即 Bee Cue 项目页。
- 线上地址：`https://neeeveee.github.io/jiangnan-yin-portfolio/`
- Bee Cue 页面：`https://neeeveee.github.io/jiangnan-yin-portfolio/project-five.html`
- 技术结构：静态 HTML + CSS + 少量 JavaScript，无构建工具。

## 2. 文件结构

```text
.
├── index.html                    # 作品集首页
├── project-five.html             # Bee Cue 项目页
├── project-earmura.html          # Earmura 项目页
├── project-pets.html             # From the Pet's Perspective 项目页
├── project-sanitation.html       # Coralline 项目页
├── project-four.html             # 其他项目页
├── styles.css                    # 全站样式
├── script.js                     # 全站交互脚本
├── images/                       # 首页和项目页图片
│   └── beecue/                   # Bee Cue 专用图片
├── assets/images/                # 其他项目图片资源
├── resume.pdf                    # 首页链接使用的简历 PDF
├── PORTFOLIO_VISUAL_STYLE_GUIDE.md
└── COLLABORATION_GUIDE.md
```

## 3. 不要上传的内容

这些文件不属于网站运行必需内容，默认不要提交到 GitHub：

- `.edge-headless/`
- `.agents/`
- `.codex/`
- `browser-extension/`
- `plugins/`
- `*.docx`
- `portfolio-source.pdf`
- `project-240520.pdf`
- `*.baiduyun.uploading.cfg`

这些规则已写入 `.gitignore`。如果未来某个 PDF 或源文件确实要作为网页资源使用，需要先确认页面中是否引用它，再单独加入。

## 4. 视觉协作原则

网站整体风格应保持：

- editorial / portfolio / minimal / image-led
- 大留白、细分割线、克制色彩
- 以作品图像和短文案为主
- 避免商业 SaaS landing page 风格
- 避免大量圆角卡片、渐变背景、浮动阴影和装饰性图形

主要视觉基调：

- 背景：`#fbfbfa`
- 主文字：`#111111`
- 次级文字：`#66665f`
- 分割线：`rgba(17, 17, 17, 0.12)` 到 `rgba(17, 17, 17, 0.28)`
- Bee Cue 局部强调色：`#8f5c24`

字体以 `Manrope` 为主。标题可以大，但页面不应变成论文式长文，也不应变成普通产品宣传页。

## 5. Bee Cue 页面修改规则

Bee Cue 页面位于 `project-five.html`，主要样式集中在 `styles.css` 的 Bee Cue 相关选择器中。

当前页面顺序：

1. Hero
2. Project Overview
3. Website Prototype
4. Prototype Demo
5. Design Challenge
6. Research
7. Design Decisions
8. System Logic
9. Project Film
10. Reflection

协作时请注意：

- 不要随意重排板块，除非明确要求。
- 不要把 Research、Logic、Prototype 等板块重新做成大量卡片式容器。
- 如果修改来自 Figma，必须优先按 Figma frame 的真实尺寸、坐标、字号、图片比例实现。
- 如果 Figma 与现有网页风格冲突，先确认再改，不要自行重新设计。
- 图片必须使用 `images/beecue/` 中的本地资源，保持文件名和引用一致。
- YouTube iframe 在本地 `file://` 环境可能显示 153 错误，部署到 GitHub Pages 后再检查最终效果。

## 6. 图片和视频规范

Bee Cue 图片统一放在：

```text
images/beecue/
```

命名建议：

- 保留清晰英文说明，例如 `Image (Bee Cue final website main interface).png`
- 同一组素材可以使用编号，例如 `01 Literature Review01.png`
- 不要使用临时截图名，例如 `screenshot.png`、`final-final.png`

视频目前使用 YouTube embed：

- Working Web Prototype：`https://youtu.be/p_7f3CDtsX8`
- Project Film：`https://youtu.be/ko_BbQPov6A`

如果改成 MP4，本地视频建议放在 `video/`，并确认 GitHub 单文件大小限制。

## 7. CSS 修改边界

修改 `styles.css` 时请遵循：

- 优先复用现有 class，不新增一套完全不同的视觉系统。
- Bee Cue 专属样式使用 `.bee-cue-` 前缀或 `#research`、`#logic` 等局部选择器。
- 避免影响其他项目页，除非明确要改全站。
- 桌面端目前有 Figma pixel lock 的绝对定位规则，移动端另有响应式规则；修改桌面 top/height 时要同步检查后续 section 是否被压住。
- 不要删除 `@media (max-width: 1200px)` 和 `@media (max-width: 760px)` 中的移动端布局规则。

## 8. 本地检查流程

修改后至少检查：

1. `index.html`
2. `project-five.html`
3. 桌面宽度下的 Bee Cue 页面顺序和对齐
4. 移动端下是否出现文字溢出、图片压缩或 section 重叠
5. GitHub Pages 部署后的 YouTube iframe 是否能播放

静态文件可以直接用浏览器打开，也可以用一个本地静态服务器预览。

## 9. Mac 开发注意事项

这个网站可以直接在 macOS 上开发，不需要额外构建环境。协作时注意：

- 路径统一使用 `/`，不要在代码或文档引用里写 Windows 本地路径，例如 `D:\...`。
- 图片文件名大小写必须和 HTML/CSS 中的引用完全一致。GitHub Pages 对路径大小写敏感。
- 不要提交 `.DS_Store`，该规则已写入 `.gitignore`。
- 不要提交本地编辑器配置、系统缓存或同步软件临时文件。
- 如果图片或视频从 Mac 替换，替换后检查文件扩展名是否一致，例如 `.png`、`.jpg`、`.mp4`。

推荐本地预览方式：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000/
```

Bee Cue 页面可以访问：

```text
http://localhost:8000/project-five.html
```

Mac 上的 Git 流程和 Windows 一样：

```bash
git status
git add <changed files>
git commit -m "Describe the change"
git push
```

如果第一次 push 需要登录 GitHub，可以使用 GitHub Desktop、GitHub CLI 或浏览器弹出的 Git Credential Manager 完成授权。

## 10. GitHub 协作流程

推荐流程：

```text
git status
git add <changed files>
git commit -m "Describe the change"
git push
```

提交前确认：

- 没有提交 `.baiduyun.uploading.cfg`
- 没有提交 `.edge-headless/`
- 没有提交无关 docx 或大型源 PDF
- 图片路径大小写与 HTML 中引用一致
- `project-five.html` 能在 GitHub Pages 路径下正常打开

## 11. GitHub Pages

当前 Pages 入口：

```text
https://neeeveee.github.io/jiangnan-yin-portfolio/
```

Bee Cue 页面：

```text
https://neeeveee.github.io/jiangnan-yin-portfolio/project-five.html
```

如果页面 404 或显示旧内容，通常等待 1-3 分钟后刷新即可。若仍不更新，检查 GitHub 仓库的 Actions / Pages deployment 状态。

## 12. 协作注意事项

- 修改前先确认目标：是改内容、改排版、替换图片，还是同步 Figma。
- 对 Bee Cue 这种 Figma 对齐页面，不要凭感觉重做。
- 对首页和其他项目页，不要引入与现有风格冲突的视觉语言。
- 对图片裁切、字号、间距这类视觉细节，修改后必须实际截图检查。
- 如果不确定某个文件是否应该上传，先不要提交。
