/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	publicPath: "/build/", // default value, can be removed
	serverBuildPath: "api/index.js",
	serverMainFields: ["main", "module"], // default value, can be removed
	serverMinify: false, // default value, can be removed
	serverModuleFormat: "cjs", // default value, can be removed
	serverPlatform: "node", // default value, can be removed
	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
	ignoredRouteFiles: ["**/.*"],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "build/index.js",
	// publicPath: "/build/",
	future: {
		v2_meta: true,
		v2_headers: true,
	},
};
