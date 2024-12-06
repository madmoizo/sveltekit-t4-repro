

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bdqg7UZ7.js","_app/immutable/chunks/disclose-version.DmngbV3w.js","_app/immutable/chunks/runtime.CT1JsHoh.js","_app/immutable/chunks/legacy._iPlEy4v.js"];
export const stylesheets = [];
export const fonts = [];
