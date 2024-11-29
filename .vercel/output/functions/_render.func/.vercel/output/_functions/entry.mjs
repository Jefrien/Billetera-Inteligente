import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DKdTx1Km.mjs';
import { manifest } from './manifest_BVQvpES5.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/index.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0],
    ["node_modules/.pnpm/astro@5.0.0-beta.12_@types+node@22.10.1_jiti@1.21.6_rollup@4.27.4_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b08e1cdc-b6a9-4d9c-be9d-93a44e697ccb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
