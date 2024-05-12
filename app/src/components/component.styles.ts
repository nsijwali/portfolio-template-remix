import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const styleBackgroundImage: any = `radial-gradient(
				circle at 50% 0,
				rgba(127, 207, 255, 0.2),
				rgba(0, 0, 0, 0) 80%
			),
			radial-gradient(circle at 50% 0, #035, rgba(0, 0, 0, 0))`;
const popoverBodyStyle = `grid-row-gap: 4px;
			-webkit-backdrop-filter: blur(20px);
			backdrop-filter: blur(20px);
			background-color: rgba(242, 242, 242, 0.05);
			border: 1px solid rgba(242, 242, 242, 0.1);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);`;

const botStyle = `backdrop-filter: blur(15px);
			-webkit-backdrop-filter: blur(15px);
		background-color: rgba(242, 242, 242, 0.05);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		z-index: 2;
		right: 0.5rem;
		position: fixed;
		bottom: 1rem;`;

const Chrome = styled.div`
	-webkit-backdrop-filter: none;
	backdrop-filter: none;
	outline-offset: -1px;
	transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
		rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
	transform-style: preserve-3d;
	opacity: 1;
	background-image: radial-gradient(
		circle farthest-side at 50% 0,
		rgba(242, 242, 242, 0.2),
		rgba(0, 0, 0, 0)
	);
	outline: 1px solid rgba(242, 242, 242, 0.15);
	box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 0, 0, 0.2),
		0 30px 120px rgba(0, 0, 0, 0.8);
	.window-main {
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(242, 242, 242, 0.3);
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1), 0 0 12px rgba(0, 0, 0, 0.4);
		.rounded-default {
			border-radius: 1.25rem; /* 20px */
		}
	}
	.window-bar {
		background-image: linear-gradient(
			to right,
			rgba(242, 242, 242, 0.1),
			rgba(242, 242, 242, 0.5) 50%,
			rgba(242, 242, 242, 0.1)
		);
		display: flex;
		.window-dots-wrapper {
			-webkit-text-size-adjust: 100%;
			--background: #101010;
			--on-background: #f2f2f2;
			font-size: 14px;
			line-height: 20px;
			color: var(--on-background);
			pointer-events: all;
			box-sizing: border-box;
			grid-column-gap: 10px;
			display: flex;
		}
		.icon-windowbar-plus {
			width: 24px;
			opacity: 0.2;
		}
	}
	.window-content {
		grid-column-gap: 2rem;
		grid-row-gap: 0px;
		background-color: rgba(16, 16, 16, 0.7);
		flex-direction: column;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		justify-content: space-around;
		align-items: stretch;
		display: flex;
		position: relative;
		.project-thumbnail {
			z-index: 1;
			max-width: 90%;
			align-self: center;
			position: relative;
			box-shadow: 0 40px 50px 10px rgba(0, 0, 0, 0.25);
		}
	}
	/* Media query for small screens (e.g., smartphones) */
	@media (max-width: 640px) {
		.rounded-small {
			border-radius: 1.25rem; /* 20px */
		}
	}

	/* Media query for extra-small screens (e.g., small smartphones) */
	@media (max-width: 480px) {
		.rounded-small {
			border-radius: 1.25rem; /* 20px */
		}
	}
	.hero-fade {
		z-index: 5;
		background-image: linear-gradient(
			to bottom,
			rgba(16, 16, 16, 0),
			rgba(0, 0, 0, 100%)
		);
		top: auto;
		bottom: 0%;
		left: 0%;
		right: 0%;
	}
	.project:hover {
		background-image: ${styleBackgroundImage};
	}
`;

const Dot = styled.div`
	${({ $color }: { $color: string }) =>
		`
	width: 12px;
	height: 12px;
	border-radius: 6px;
	background-color:  ${$color};
	border: 1px solid rgba(16, 16, 16, 0.25);
	border-radius: 100px;
	box-shadow: 0 0 20px 2px ${$color};
	`}
`;

const StyledHeader = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
	.nav-pill {
		background-color: rgba(242, 242, 242, 0.05);
		border: 1px solid rgba(242, 242, 242, 0.1);
		transition: box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1),
			border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
	}
	.nav-option {
		transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.nav-option:hover {
		background-image: linear-gradient(
			270deg,
			rgba(0, 0, 0, 0),
			rgba(242, 242, 242, 0.05)
		);
	}
	.nav-indicator-glow {
		top: -2px;
		box-shadow: 0 2px 25px 2px #fff;
	}
	.active-tab {
		background-color: rgba(242, 242, 242, 0.05);
		border-radius: 18px;
	}
	.mobile-nav {
		background-color: rgba(242, 242, 242, 0.08);
		border-color: rgba(242, 242, 242, 0.2);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
		width: 48px;
		height: 48px;
		.popover-body {
			${popoverBodyStyle}
		}
	}
`;

const StyledFooter = styled(motion.div)`
	.rotate-logo {
		animation: spin 10s linear infinite;
	}
`;

const CommonWrapper = styled(motion.div)<any>`
	.dot {
		box-shadow: 0 0 20px #fff;
	}
	.text-shadow {
		text-shadow: 0 0 12px #fff;
	}
`;

const PageWrapper = styled(motion.div)<any>`
	.project-title {
		background-image: linear-gradient(to bottom, #f2f2f2 50%, transparent);
		letter-spacing: -1px;
		text-shadow: 0 5px 15px rgba(0, 87, 255, 0.2),
			0 -5px 15px rgba(255, 90, 0, 0.15), 0 -5px 25px rgba(255, 255, 255, 0.25);
		-webkit-text-fill-color: transparent;
	}
	.role-responsibilities {
		display: grid;
		grid-column-gap: 48px;
		grid-row-gap: 0px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		justify-content: space-between;
	}
	@media (max-width: 640px) {
		.role-responsibilities {
			display: grid;
			grid-column-gap: 0;
			grid-row-gap: 48px;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
	}

	/* Media query for extra-small screens (e.g., small smartphones) */
	@media (max-width: 480px) {
		.role-responsibilities {
			display: grid;
			grid-column-gap: 0;
			grid-row-gap: 48px;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
		}
	}
`;

const BodyWrapper = styled(motion.div)<any>`
	.back-button {
		${popoverBodyStyle};
	}
`;

const BotWrapper = styled.div`
	main {
		min-height: 20rem;
		max-height: 32rem;
		border: 1px solid rgba(242, 242, 242, 0.1);
		${botStyle}
	}
	.bot-icon {
		${botStyle};
	}
`;

export {
	Chrome,
	Dot,
	StyledHeader,
	StyledFooter,
	CommonWrapper,
	PageWrapper,
	BodyWrapper,
	BotWrapper,
};
