export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D34cNDQh.js","app":"_app/immutable/entry/app.01hGQ6aE.js","imports":["_app/immutable/entry/start.D34cNDQh.js","_app/immutable/chunks/C0T8pN2i.js","_app/immutable/chunks/rrUmd42d.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B3WBPPRF.js","_app/immutable/entry/app.01hGQ6aE.js","_app/immutable/chunks/rrUmd42d.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BECn6QMW.js","_app/immutable/chunks/BM7U9ktV.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B3WBPPRF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
