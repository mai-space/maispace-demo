# Maispace — Next.js Portfolio & Hub

Public portfolio site + private authenticated service hub for maispace.de.

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Portfolio: Hero, Leistungen, Projekte, Über uns, Kontakt |
| `/hub` | 🔒 Auth | Service launchpad — all 18 internal tools |
| `/hub/login` | Public | SSO login via Authentik |

## Stack

- **Next.js 14** (App Router, standalone output)
- **next-auth v4** — OIDC auth via Authentik
- **Tailwind CSS** — utility styles
- **DM Serif Display / DM Sans / DM Mono** — Google Fonts

## Local Development

```bash
cp .env.example .env.local
# Fill in your Authentik credentials

npm install
npm run dev
```

## Authentik Setup

1. Create an **OAuth2/OIDC Provider** in Authentik:
   - Name: `maispace-hub`
   - Client type: Confidential
   - Redirect URI: `https://maispace.de/api/auth/callback/authentik`
   - Scopes: `openid`, `email`, `profile`

2. Create an **Application** linked to the provider.

3. Copy Client ID and Client Secret into `.env.local`.

## Production Deployment (Dokploy)

1. Push this repo to GitLab (`gitlab.maispace.de`).
2. In Dokploy, create a new **Docker Compose** project pointed at this repo.
3. Set environment variables in Dokploy's env editor (see `.env.example`).
4. Deploy — Traefik handles SSL automatically via Let's Encrypt.

## Contact Form

The contact form posts to Formspree by default. Replace `YOUR_FORM_ID` in
`src/components/Contact.tsx` with your Formspree endpoint, or swap the action
for Postal's API / any other transactional email provider.

## Customisation

- **Projects**: Edit `src/components/Work.tsx`
- **Services listed**: Edit `src/components/Services.tsx`
- **Hub tiles**: Edit `src/app/hub/HubClient.tsx` → `categories` array
- **Stats / copy**: Edit `src/components/Hero.tsx`, `About.tsx`
- **Colors**: Edit `tailwind.config.js` and `globals.css`
