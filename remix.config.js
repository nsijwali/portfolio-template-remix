/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
	// appDirectory: 'app',
	assetsBuildDirectory: 'public/build',
	publicPath: '/build/server',
	// devServerPort: 8002,
	// server: './server.js',
	ignoredRouteFiles: ['**/.*'],
	future: {
		v2_routeConvention: true,
	},
};
