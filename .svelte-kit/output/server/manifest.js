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
		client: {"start":"_app/immutable/entry/start.JXsXr95e.js","app":"_app/immutable/entry/app.C8dhZsb_.js","imports":["_app/immutable/entry/start.JXsXr95e.js","_app/immutable/chunks/ftSnVCCy.js","_app/immutable/chunks/Ba4opOX5.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BqI2t2o3.js","_app/immutable/entry/app.C8dhZsb_.js","_app/immutable/chunks/Ba4opOX5.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C0WovQqI.js","_app/immutable/chunks/DZn_4t6f.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/BqI2t2o3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
