export const isMobileDevice = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
		userAgent,
	);
};
