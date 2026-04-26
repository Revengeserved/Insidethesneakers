# Inside the Sneakers

Website for **Inside the Sneakers**.

## Domain configuration for `inthesneakers.life`

This repo is configured for GitHub Pages custom domain hosting with:

- `CNAME` set to `inthesneakers.life`
- Canonical and Open Graph URLs pointed to `https://inthesneakers.life/`

### Naming rule

- **Inside the Sneakers** = website/project name
- **inthesneakers.life** = web address/domain

### DNS checklist at your domain provider

1. Add `A` records for the apex domain (`inthesneakers.life`) to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add a `CNAME` for `www` -> `Revengeserved.github.io`.
3. In GitHub repo settings (`Pages`), set custom domain to `inthesneakers.life` and enable HTTPS after the certificate is ready.

## Google Analytics (GA4)

Google Analytics tracking is installed via `gtag.js` using measurement ID:

- `G-XNFNVGXCFL`

It is included in:

- `index.html`
- `about.html`

## Prompt template for getting the best help

Use this prompt in ChatGPT/Codex when you want production-ready help:

```text
You are a senior web engineer + growth analytics specialist.

Goal:
Help me finish and launch my website called Inside the Sneakers at https://inthesneakers.life with correct DNS, GitHub Pages setup, and Google Analytics 4.

Context:
- My repo contains: index.html, about.html, Styles.css, and CNAME.
- I want one canonical homepage, consistent SEO metadata, and working analytics events.
- My GA4 Measurement ID is: G-XNFNVGXCFL.
- Domain registrar: [fill in registrar]
- GitHub username/repo: Revengeserved/inthesneakers.life

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
