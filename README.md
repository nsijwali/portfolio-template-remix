# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Express server with Vite dev middleware:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Express applications you should be right at home. Just make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

### create free logo

https://logo.com/

### Generate Favicon

https://favicon.io/favicon-generator/

### Tailwindcss cheatsheet

https://nerdcave.com/tailwind-cheat-sheet

```
my-remix-app
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ app
│  ├─ db
│  │  └─ user.json
│  ├─ entry.client.tsx
│  ├─ entry.server.tsx
│  ├─ root.tsx
│  ├─ routes
│  │  ├─ _index.tsx
│  │  └─ info.tsx
│  ├─ src
│  │  ├─ .babelrc
│  │  ├─ components
│  │  │  ├─ About.tsx
│  │  │  ├─ BriefIntro.tsx
│  │  │  ├─ Experiences.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ LogoRenderer.tsx
│  │  │  ├─ Pill.tsx
│  │  │  ├─ Recommendation.tsx
│  │  │  ├─ Skills.tsx
│  │  │  ├─ component.styles.ts
│  │  │  └─ type.ts
│  │  └─ screens
│  │     └─ WorkPanel.tsx
│  ├─ tailwind.css
│  └─ utils
│     └─ utils.ts
├─ env.d.ts
├─ index.d.ts
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ favicon.png
│  ├─ images
│  │  ├─ logo-2.jpeg
│  │  ├─ logo-3.jpeg
│  │  └─ logo.webp
│  └─ robots.txt
├─ server.js
├─ sitemap.xml
├─ tailwind.config.ts
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock

```
