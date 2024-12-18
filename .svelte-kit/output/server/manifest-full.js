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
		client: {"start":"_app/immutable/entry/start.3ArxMEG8.js","app":"_app/immutable/entry/app.CYRRIE6a.js","imports":["_app/immutable/entry/start.3ArxMEG8.js","_app/immutable/chunks/entry.CI9n3v3m.js","_app/immutable/chunks/runtime.DHQnpUVM.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index-client.D1Rf9XmZ.js","_app/immutable/entry/app.CYRRIE6a.js","_app/immutable/chunks/runtime.DHQnpUVM.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.Dm0oH5PX.js","_app/immutable/chunks/template.C5y46lRQ.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/index-client.D1Rf9XmZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
