# Danny's Homepage

This homepage takes design inspiration from other homepages such as [Takuya Matsuyama's Homepage](https://www.craftz.dog/) and [Florian Lefebvre's Homepage](https://florian-lefebvre.dev/).

![Danny Bao's personal homepage](https://i.imgur.com/XWKQZpD.png)

## Stack

- [Astrojs](https://astro.build/) - A web framework for content driven websites with hybrid, static & server side rendering
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Flowbite](https://flowbite.com/) - Tailwind component library
- [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) - Astrojs/mdx integration
- [pagefind](https://pagefind.app/) - Search library for static websites
- [astro-expressive-code](https://expressive-code.com/) - Enhanced code blocks in md/mdx posts

## 🚀 Project Structure

```text
/
├── public/
│   └── cover/
├── src/
│   └── assets/
│   │   # Non-public images/files
│   └── components/
│   │   # Astro components
│   └── content/
│   │    └── blog/
│   │        # Astro Content collection for blog posts
│   └── layouts/
│   │   # Layout components
│   └── pages/
│   │    └── posts/
│   │    └── works/
│   │    └── index.astro
│   │        # Page files  
│   └── styles/
│       # Global css styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------  | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

Note: It is required to run pnpm run build after adding a blog post, so that pagefind can create a new pagefind index. That pagefind index is then copied from './dist/' into the public folder so that the pagefind search bar can work on the local dev server.

## Licensing

This website is [GPL-3.0](./LICENSE) licensed. You are free fork this project for your own use or inspiration at your own caution.