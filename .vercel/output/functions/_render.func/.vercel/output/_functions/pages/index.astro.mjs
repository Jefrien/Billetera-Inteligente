/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderScript, d as createAstro, e as renderComponent, f as renderHead, g as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_CHSnwF6e.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/jefrien/WebstormProjects/billetera-inteligente/node_modules/.pnpm/astro@5.0.0-beta.12_@types+node@22.10.1_jiti@1.21.6_rollup@4.27.4_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jefrien/WebstormProjects/billetera-inteligente/node_modules/.pnpm/astro@5.0.0-beta.12_@types+node@22.10.1_jiti@1.21.6_rollup@4.27.4_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$GuestLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuestLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-x2klugqn> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-x2klugqn": true })}${renderHead()}</head> <body class="h-screen" data-astro-cid-x2klugqn> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jefrien/WebstormProjects/billetera-inteligente/src/layouts/GuestLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "GuestLayout", $$GuestLayout, { "title": "Ingresar - Billetera Inteligente" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <button class="btn btn-primary">
Hola mundo
</button> </div> ` })}`;
}, "/Users/jefrien/WebstormProjects/billetera-inteligente/src/pages/index.astro", void 0);

const $$file = "/Users/jefrien/WebstormProjects/billetera-inteligente/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
