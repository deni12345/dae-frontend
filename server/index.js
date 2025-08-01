import fs from "node:fs/promises";
import express from "express";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile(resolve(__dirname, "../dist/client/index.html"), "utf-8")
  : "";
const ssrManifest = isProduction
  ? JSON.parse(
      await fs.readFile(
        resolve(__dirname, "./dist/client/.vite/ssr-manifest.json"),
        "utf-8"
      )
    )
  : undefined;

async function start() {
  // Create http server
  const app = express();

  let vite;
  if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(
      base,
      sirv(resolve(__dirname, "./dist/client"), {
        extensions: [], // disables automatic .html lookup
        single: false, // disables fallback to index.html
      })
    );
  }

  app.use("*all", async (req, res) => {
    try {
      console.info(`Received request for: ${req.originalUrl}`);
      const url = req.originalUrl;
      let template;
      let render;
      if (!isProduction) {
        template = await fs.readFile("./index.html", "utf-8"); // Always read fresh template in development
        template = await vite.transformIndexHtml("/", template);
        render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
      } else {
        template = templateHtml;
        render = (
          await import(resolve(__dirname, "../dist/server/entry-server.js"))
        ).render;
      }

      const rendered = await render({ path: url }, ssrManifest);
      const html = template.replace(`<!--app-html-->`, rendered.html ?? "");

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}`);
  });
}

start();
