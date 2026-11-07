# Priyanshu Nada · Portfolio

Portfolio site for **Priyanshu Nada**, product designer focused on human-centered AI.

Live: https://nadadesign.netlify.app/

## Case studies

- **[INARA](https://inarahq.com/)**: an AI operations assistant for independent, family-run motels, which I founded. It drafts every guest reply with its reason and lets owners decide what runs on its own. Live at inarahq.com; case-study images use the owner app's demo data for a fictional motel.
- **[Flow](https://flowbanking.netlify.app/)**: money tools for Gen Z that live inside group chats. Concept project with three Figma prototypes and a React case-study site.
- **Capstack**: funding data founders can trust. A designed prototype where an AI agent keeps listings current and curators review high-risk changes.
- **Groundwork**: a context assistant for radiologists. It summarizes synthetic patient records, links every line to its source, and flags missing or conflicting records. No diagnosis. Built from an in-depth radiologist interview; research board, desktop prototype and Figma file.
- **Closet**: an AI wardrobe for busy students. Outfits from clothes they own, picked from their calendar and the weather, with every reason sourced and correctable. Clickable prototype, Figma file and design spec.

## In progress

- 06 INARA pilot: what owners actually did
- 07 Inclusive multimodal patterns (keyboard and screen-reader tested)

## Files

```
├── index.html                                ← the whole site, no build step
├── assets/                                   ← case-study screenshots
│   ├── inara-*.webp / .jpg       ← INARA (WebP + JPEG fallback; demo data, fictional motel)
│   ├── flow-split-flow.jpg       ← 9-screen Flow Split flow (from Figma)
│   ├── flow-split-decline.jpg    ← status + decline path screens
│   ├── flow-safe-screens.jpg     ← Safe screens (Claude Design prototype)
│   ├── flow-together-screens.jpg ← Together screens (Claude Design prototype)
│   ├── capstack-listing.jpg      ← Capstack screens (Claude Design prototype)
│   ├── capstack-digest.jpg
│   ├── capstack-review.jpg
│   ├── capstack-rules.jpg
│   ├── closet-flow.jpg           ← 8-screen Closet strip (Claude Design prototype)
│   ├── closet-explain.jpg        ← reasons, sources, confidence
│   ├── closet-correct.jpg        ← dress-code fix, Not this, adjusted pick
│   ├── closet-edges.jpg          ← no events, laundry day, offline
│   ├── closet-setup.jpg          ← capture, tag review, privacy
│   ├── groundwork-flow.jpg       ← 6-screen Groundwork strip
│   ├── groundwork-source.jpg     ← case context with a source open
│   ├── groundwork-conflict.jpg   ← two records disagree
│   ├── groundwork-refuse.jpg     ← declines to diagnose
│   ├── groundwork-handoff.jpg    ← provisional report
│   └── groundwork-edges.jpg      ← side mismatch, only the request
├── Priyanshu_Nada_Product_Design_Resume.pdf
├── sitemap.xml, robots.txt
└── README.md
```

## Accessibility

- Text meets WCAG AA contrast; nothing smaller than 12px
- Skip link, visible focus states, keyboard-operable menu (Esc closes it)
- Respects reduced-motion settings; content stays visible if JavaScript fails
- Descriptive alt text on every screenshot

## Contact

pnada.jobs@gmail.com · [LinkedIn](https://www.linkedin.com/in/priyanshunada) · [GitHub](https://github.com/Priyanshunada04)

## Site structure (v2)

- `index.html` is the homepage: hero, a grid of five project cards (INARA spans the full width on wide screens), in progress, about, approach and contact.
- `work/<project>/index.html` holds one case study per page (INARA, Flow, Capstack, Groundwork, Closet), served at `/work/<project>/`.
- `assets/site.css` and `assets/site.js` are shared by every page.
- `assets/preview/<project>-a.jpg` and `-b.jpg` are the before and after frames for each card's hover preview. On touch screens they alternate while the card is on screen; with Reduce Motion on they only change on focus or hover.
- Page-to-page transitions use cross-document View Transitions. Browsers without support simply load the page.
- Keyboard: press 1 to 5 on the homepage to open a case study.
