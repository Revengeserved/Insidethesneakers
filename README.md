# Insidethesneakers

Website for **Inside the Sneakers**.

## Domain configuration for `insidethesneakers.life`

This repo is ready for GitHub Pages custom domain hosting with:

- `CNAME` set to `insidethesneakers.life`
- Canonical and Open Graph URLs pointed to `https://insidethesneakers.life/`

### DNS checklist (at your domain provider)

1. Add `A` records for the apex domain (`insidethesneakers.life`) to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add a `CNAME` for `www` -> `<your-github-username>.github.io`.
3. In your GitHub repo settings (`Pages`), set custom domain to `insidethesneakers.life` and enable HTTPS.

## Google Analytics (GA4)

Google Analytics tracking is installed via `gtag.js` using measurement ID:

- `G-XNFNVGXCFL`

It is included in:

- `index.html`
- `Index.html`
- `about.html`

## Prompt template for getting the best help

Use this prompt in ChatGPT/Codex when you want production-ready help:

```text
You are a senior web engineer + growth analytics specialist.

Goal:
Help me finish and launch my website at https://insidethesneakers.life with correct DNS, GitHub Pages setup, and Google Analytics 4.

Context:
- My repo contains: index.html, Index.html, about.html, Styles.css, and CNAME.
- I want one canonical homepage, consistent SEO metadata, and working analytics events.
- My GA4 Measurement ID is: G-XNFNVGXCFL.
- Domain registrar: [fill in registrar]
- GitHub username/repo: [fill in]

Constraints:
- Keep changes simple and beginner-friendly.
- Do not break existing page content.
- Provide exact copy/paste steps and commands.
- Include rollback steps for every risky change.

Output format:
1) Quick audit (what is correct / what is broken)
2) Ordered implementation plan (small steps)
3) Exact code changes (full snippets)
4) DNS records table (type, host, value, TTL)
5) Validation checklist (how to verify each part)
6) Optional improvements (SEO, performance, security)

If anything is unclear, ask me up to 3 concise questions first.
```
