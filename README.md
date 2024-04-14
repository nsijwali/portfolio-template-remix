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

```
portfolio
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
│  │  └─ _index.tsx
│  └─ src
│     ├─ .babelrc
│     ├─ components
│     │  ├─ BriefIntro.tsx
│     │  ├─ Expriences.tsx
│     │  ├─ Header.tsx
│     │  ├─ Styles.ts
│     │  └─ type.ts
│     └─ screens
│        └─ WorkPanel.tsx
├─ env.d.ts
├─ index.d.ts
├─ package.json
├─ public
│  └─ favicon.ico
├─ server.js
├─ tsconfig.json
└─ vite.config.ts

```

### create free logo

https://logo.com/

### Generate Favicon

https://favicon.io/favicon-generator/

### Tailwindcss cheatsheet

https://nerdcave.com/tailwind-cheat-sheet
