# Skill: High-Minimal Research Portfolio Website Style

## 1. Style Positioning

Design a high-end, minimal, research-oriented personal portfolio website with a strong archival and editorial quality.

The overall visual direction should reference:
- Independent designer portfolio websites
- Art institution / museum exhibition websites
- Typography specimen pages
- Technical product documentation
- System design archives
- Black-and-white editorial layouts

The website should feel like a mature designer's digital archive, not a generic student portfolio, commercial landing page, or flashy interactive showcase.

Core keywords:
Minimal, restrained, rational, spacious, grid-based, archival, editorial, technical-drawing-like, research-oriented, low-saturation, black-and-white, systematic, experimental.

---

## 2. Visual Principles

### Color

Use the following as the primary visual system:
- Global page background: `#F7F7F7`
- White only for rare local surfaces, not as the default body background
- Light gray
- Black
- Dark gray

Accent colors should appear only in small amounts, such as:
- Project markers
- Data states
- Ecological variables
- Hover states
- Key information highlights

Do not use large areas of highly saturated colors.

Project images may contain color, but the interface system itself must remain restrained, low-saturation, and minimal.

Transparent navigation, sticky anchor bars, and overlays should be derived from `rgba(247, 247, 247, ...)` so they remain visually connected to the global page background.

---

## 3. Layout Principles

The page should be designed with a strict grid system.

Requirements:
- Generous whitespace
- Clear alignment
- Thin dividing lines only where they clarify structure
- Small explanatory text
- Large headings as visual anchors
- Content blocks arranged with open editorial spacing rather than default card stacks
- A calm, uncluttered reading rhythm

Common layout structures:
- Left-side title, right-side description
- Large title at the top, project index below
- Thin lines for project overview, metadata, and dense information rows
- Project cards organized by number, year, type, and keywords
- Sufficient breathing space between text and images

For project detail pages, use a narrowed content shell and wider media/navigation shell:
- Body content shell: `min(1120px, calc(100% - 520px))`
- Medium desktop shell: `min(100% - 240px, 960px)`
- Tablet shell: `min(100% - 32px, 760px)`
- Small mobile shell: `min(100% - 24px, 390px)`
- Hero and case-study anchor navigation shell: `min(1480px, calc(100% - 96px))`

The rule is: narrow the reading body, but keep hero imagery and case-study navigation wide enough to feel complete.

---

## 4. Typography and Hierarchy

Typography should feel modernist, Swiss-inspired, and design-school-oriented.

Headings:
- May use large type sizes
- Should avoid overly heavy weights
- Should remain restrained and precise
- Should not become overly decorative or poster-like

Body text:
- Use small type sizes
- Maintain comfortable line height
- Feel like exhibition notes, archive descriptions, or research summaries
- Information density may be high, but the layout must stay clear

Suggested hierarchy:
- Hero title: very large
- Project section H2: `40px` for reusable case-study pages such as Bee Cue and Pets
- Intro paragraph: `15px` to `18px`
- Section title: medium size when it is not a major project H2
- Meta info: small size, possibly uppercase or monospaced
- Body text: small, rational explanatory text
- Caption: smaller text for image notes and data sources

---

## 5. Component Style

### Project Cards

Project cards should feel like design archive entries, not generic portfolio thumbnails.

Each card may include:
- Project number
- Project title
- Year
- Type
- Keywords
- One-sentence description
- Project image
- Status label

Card style:
- White or light-gray background only when a true card affordance is needed
- Thin border only when it clarifies the component boundary
- Subtle hover interaction
- Clean image placement
- No heavy shadows

### Case Study Modules

Project case studies should use repeatable modules rather than ad-hoc spacing fixes:
- Project Overview may keep fine lines, metadata grids, and compact information rows.
- Other sections should avoid unnecessary gray border lines by default.
- Outcome / feature modules should keep a two-column or four-grid structure, with image and copy inside the same article.
- Media frames should use stable aspect ratios such as `16 / 9` to prevent layout shifts.
- Iteration / finding modules should use a two-column image + article/list layout, with gaps around `clamp(24px, 3vw, 40px)`.
- When a complex image needs to align with a specific finding, align the grid or column as a whole rather than adding arbitrary margins.

---

### Timeline

The timeline should remain minimal and editorial.

Requirements:
- Use thin lines
- Use year labels as left-side anchors
- Project cards expand on the right
- Apply subtle fade-in on scroll
- Slightly emphasize the active year

Do not use complex colorful nodes or heavy decorative elements.

---

### System Diagrams / Flowcharts

System diagrams should feel like technical drawings.

Requirements:
- Use thin lines
- Keep the palette black, white, and gray
- Make modules clear
- Use simple arrows
- Maintain clear information hierarchy
- Light isometric or wireframe visuals are acceptable
- The result should feel like technical documentation, not a commercial infographic

Suitable for representing:
- Data flows
- Model relationships
- User journeys
- System architecture
- Interaction logic
- Variable relationships

---

## 6. Motion Principles

Motion should be light, slow, and smooth.

Recommended:
- Scroll-based fade-in
- Slight upward movement for text
- Thin-line reveal
- Image fade-in
- Subtle card hover
- Timeline activation on scroll
- Quiet page transitions

Avoid:
- Flashy transitions
- Particle effects
- Complex 3D
- Strong bounce effects
- Large-scale parallax
- Fast animation

Motion should support reading rhythm, not compete for attention.

---

## 7. Image and Project Presentation

Images should be presented like archival materials.

Recommended formats:
- Large image with a small title
- Grid-based image groups
- Horizontal exhibition-like browsing
- Project cover matrix
- Small captions below images
- Mixed layouts of process images, system diagrams, and interface screens
- Full hero images and key project diagrams should show the complete image whenever the content is a board, interface, plan, diagram, or spatial/system drawing.
- Use `object-fit: contain` for diagrams, boards, interfaces, and project documentation images. Use `cover` only for atmospheric photographs that can be cropped safely.

Do not turn project images into commercial posters. Avoid excessive rounded corners, heavy shadows, or overly complex card decoration.

---

## 8. Forbidden Styles

Avoid the following styles:
- Cyberpunk
- Heavy glassmorphism
- Large gradient backgrounds
- Highly saturated color blocking
- E-commerce homepage style
- Generic SaaS landing-page style
- Decorative portfolio templates
- Cartoon-like ornamentation
- Excessive 3D
- Dense particles
- Complex background textures
- Heavy shadows
- Skeuomorphic buttons

---

## 9. Final Goal

The final website should feel like a high-end, quiet, restrained design research archive.

It should combine:
- Personal designer identity
- Research project professionalism
- System design logic
- Art-institution-like whitespace
- Technical-documentation precision
- Portfolio readability

The overall result should feel mature, clean, and rational, but not cold; experimental, but not messy.
