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
		client: {"start":"_app/immutable/entry/start.Dw3nA44N.js","app":"_app/immutable/entry/app.CbmORbjL.js","imports":["_app/immutable/entry/start.Dw3nA44N.js","_app/immutable/chunks/DsCBofJi.js","_app/immutable/chunks/3qKZY2hG.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bl_3H9I8.js","_app/immutable/entry/app.CbmORbjL.js","_app/immutable/chunks/3qKZY2hG.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C9JmgUHJ.js","_app/immutable/chunks/BisQtByv.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/Bl_3H9I8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
