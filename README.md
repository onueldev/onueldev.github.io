# onueldev — Portfolio & Agency Website

Official website for **onueldev**, a software development company specializing in web, mobile, game, and AI solutions. Also hosts the legal pages for the **Day+** productivity mobile app.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM |
| i18n | i18next + react-i18next |
| Font | Geist |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── pages/
│   ├── HomePage.tsx        # Main landing page
│   ├── TermsPage.tsx       # Terms of Service (Day+ app)
│   └── PrivacyPage.tsx     # Privacy Policy (Day+ app)
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── StarField.tsx       # Animated star background
│   └── SnowField.tsx       # Snow effect
├── contexts/
│   └── ThemeContext.tsx    # Dark/light theme provider
├── locales/
│   ├── ko.json             # Korean translations
│   └── en.json             # English translations
├── i18n.ts                 # i18n configuration
├── App.tsx                 # Root component + routes
└── main.tsx                # Entry point
```

## Pages

- `/` — Landing page (Hero, About, Services, Tech Stack, Process, Footer)
- `/terms` — Terms of Service for Day+ app
- `/privacy` — Privacy Policy for Day+ app

## Features

- **Dark / Light theme** toggle with smooth transition
- **Bilingual** support — Korean (default) and English
- **Animated** star field, gradient text, comet logo, card glow effects
- **Responsive** layout with mobile hamburger menu
- **No environment variables** required — fully static

## Services Showcased

- Web Development (Next.js, React, TypeScript)
- Mobile Apps (React Native, Flutter, Swift)
- Mobile Games (Unity, Unreal Engine, C#)
- Cloud & DevOps (AWS, Docker, Kubernetes)
- AI Solutions (Claude, Gemini)
