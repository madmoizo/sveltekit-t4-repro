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
		client: {"start":"_app/immutable/entry/start.Cisb1TBO.js","app":"_app/immutable/entry/app.DRmM5Di2.js","imports":["_app/immutable/entry/start.Cisb1TBO.js","_app/immutable/chunks/entry.BMqCX3qE.js","_app/immutable/chunks/runtime.C_Muxhag.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/entry/app.DRmM5Di2.js","_app/immutable/chunks/runtime.C_Muxhag.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/store.BYw4yAhR.js","_app/immutable/chunks/template.DkZVhL8U.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
