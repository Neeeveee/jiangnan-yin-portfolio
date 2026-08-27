from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = "output/pdf/Nevena_Yin_中文简历.pdf"
W, H = letter
GREEN = HexColor("#188d0b")
TEXT = HexColor("#404040")
BLACK = HexColor("#111111")

pdfmetrics.registerFont(TTFont("CN", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"))
pdfmetrics.registerFont(TTFont("CNBold", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"))

c = canvas.Canvas(OUT, pagesize=letter)
c.setTitle("Nevena Yin 中文简历")


def txt(x, y, s, size=10, font="CN", color=TEXT):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, s)


def wrap(s, font, size, width):
    lines, current = [], ""
    for ch in s:
        candidate = current + ch
        if pdfmetrics.stringWidth(candidate, font, size) <= width or not current:
            current = candidate
        else:
            lines.append(current)
            current = ch
    if current:
        lines.append(current)
    return lines


def bullet(x, y, s, width, size=9.5, leading=14):
    c.setFillColor(TEXT)
    c.circle(x + 2, y + 3, 1.3, fill=1, stroke=0)
    lines = wrap(s, "CN", size, width - 15)
    for i, line in enumerate(lines):
        txt(x + 12, y - i * leading, line, size)
    return y - len(lines) * leading - 4


def section_title(x, y, s):
    txt(x, y, s, 12.5, "CNBold", BLACK)
    return y - 31


def role(x, y, org, title=None):
    txt(x, y, org, 11.5, "CNBold", GREEN)
    if title:
        offset = pdfmetrics.stringWidth(org, "CNBold", 11.5) + 10
        txt(x + offset, y, title, 10.8, "CN", BLACK)


# Left column
txt(40, 742, "Nevena Yin", 25, "CNBold", GREEN)
txt(40, 711, "用户体验设计师", 22, "CNBold", GREEN)

y = section_title(40, 528, "联系方式")
txt(40, y, "nevenayin.com", 10, "CN", BLACK); y -= 25
txt(40, y, "nevena9862@163.com", 10, "CN", BLACK); y -= 25
txt(40, y, "+86 134 2914 9862", 10, "CN", BLACK)

y = section_title(40, 406, "专业技能")
for item in ["用户研究", "交互设计", "视觉设计", "沟通与协作", "用户测试", "适应力与持续学习", "信息架构"]:
    y = bullet(44, y, item, 165, 9.5, 13)

y = section_title(40, 211, "工具")
for item in ["Figma", "FigJam", "Adobe Creative Suite", "Blender", "Arduino", "TouchDesigner", "VS Code", "Codex"]:
    y = bullet(44, y, item, 165, 9.3, 12)


# Right column
x, width = 248, 325
y = section_title(x, 754, "工作经历")

role(x, y, "浙江广电集团", "交互设计实习生")
txt(x, y - 17, "2025.09 - 2025.11｜中国·杭州", 7.6, "CN", TEXT)
y -= 40
for item in [
    "重新设计网页端与移动端媒体平台的视觉布局和内容结构，提升信息可读性。",
    "制作动态图形、图像素材与短视频内容，用于跨平台传播。",
    "将编辑内容转化为面向受众的视觉形式，支持多媒体叙事。",
]:
    y = bullet(x + 4, y, item, width, 8.8, 13)
y -= 5

role(x, y, "Hongkang 信息科技", "用户体验设计实习生")
txt(x, y - 17, "2024.07 - 2024.09｜中国·杭州", 7.6, "CN", TEXT)
y -= 40
for item in [
    "优化企业级打印、扫描及文档管理系统的用户体验流程。",
    "梳理用户工作流并重新设计关键界面步骤，提升任务清晰度。",
    "构建文档分类、搜索与检索的信息架构。",
]:
    y = bullet(x + 4, y, item, width, 8.8, 13)
y -= 5

role(x, y, "自由设计师 / 独立创作者")
txt(x, y - 17, "2022.01 - 至今", 7.6, "CN", TEXT)
y -= 40
for item in [
    "为产品及空间设计项目制作 3D 可视化、动态素材与数字模型。",
    "使用 Blender、Arduino 与 3D 打印设计互动装置和实体原型。",
    "制作 Blender 动画、数字模型及面向创意科技项目的 3D 打印原型。",
]:
    y = bullet(x + 4, y, item, width, 8.8, 13)

y -= 4
y = section_title(x, y, "教育经历")
role(x, y, "华盛顿大学", "MSTI - 互联设备方向")
txt(x, y - 17, "预计 2026.09 - 2028.06", 7.6, "CN", TEXT)
y -= 40
y = bullet(x + 4, y, "方向：人机交互、互联设备、物理计算与产品创新。", width, 8.8, 13)
y -= 4

role(x, y, "中国美术学院", "艺术与科技 学士")
txt(x, y - 17, "2022.09 - 2026.08", 7.6, "CN", TEXT)
y -= 40
for item in [
    "主修课程：交互设计、UI/UX 设计、产品设计、装置艺术、三维动画。",
    "毕业设计：Bee-CUE - 面向养蜂场景的预测性支持系统。",
]:
    y = bullet(x + 4, y, item, width, 8.8, 13)

c.save()
print(OUT)
