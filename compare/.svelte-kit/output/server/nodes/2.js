

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B3ZkwA5e.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js"];
export const stylesheets = ["_app/immutable/assets/2.qDMvbHcx.css"];
export const fonts = [];
