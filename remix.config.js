/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
	// appDirectory: 'app',
	assetsBuildDirectory: 'build/server',
	// publicPath: '/build/',
	// devServerPort: 8002,
	// server: './server.js',
	ignoredRouteFiles: ['**/.*'],
	future: {
		v2_routeConvention: true,
	},
};
