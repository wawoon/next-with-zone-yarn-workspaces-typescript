# Next.js multiple zones + yarn workspaces + TypeScript sample

See:

- [with-zones](https://github.com/vercel/next.js/tree/canary/examples/with-zones)
- [with-yarn-workspaces](https://github.com/vercel/next.js/tree/canary/examples/with-yarn-workspaces)
- [with-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

# How it works

- All pages should be unique across zones. For example, the `home` app should not have a `pages/blog/index.js` page.
- The `blog` app sets [`assetPrefix`](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix) so that generated JS bundles are within the `/blog` subfolder.
  - To also support the plain `next dev` scenario, `assetPrefix` is set dynamically based on the `BUILDING_FOR_NOW` environment variable, see [`vercel.json`](vercel.json) and [`blog/next.config.js`](blog/next.config.js).
  - Images and other `static` assets have to be prefixed manually, e.g., `` <img src={`${process.env.ASSET_PREFIX}/static/image.png`} /> ``, see [`blog/pages/blog/index.js`](blog/pages/blog/index.js).

## Demo

https://next-with-zone-yarn-workspaces-typescript.vercel.app/

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/wawoon/next-with-zone-yarn-workspaces-typescript/tree/master)

# How to start

Install the dependencies of every app (`/home` and `/blog`):

```bash
yarn workspaces run install
```

Install the [Vercel CLI](https://vercel.com/download) if you don't have it already, and then run [`vercel dev`](https://vercel.com/docs/cli?query=dev#commands/dev) in the main directory to start the development server:

```bash
vercel dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

> We recommend `vercel dev` in this case instead of `next dev`, as it can start both apps at the same time and use the routes defined in [`vercel.json`](vercel.json)
