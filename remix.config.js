/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	serverMainFields: ["main", "module"], // default value, can be removed
	serverMinify: false, // default value, can be removed
	serverModuleFormat: "cjs", // default value, can be removed
	serverPlatform: "node", // default value, can be removed
	ignoredRouteFiles: ["**/.*"],
	future: {
		v2_meta: true,
		v2_headers: true,
		v2_normalizeFormMethod: true,
		v2_dev: true,
		v2_errorBoundary: true,
		v2_routeConvention: true,
	},
};
