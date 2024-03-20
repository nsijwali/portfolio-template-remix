import { styled } from 'styled-components';

const Box = styled.div`
	font-family: monospace, sans-serif;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const Chrome = styled.div`
	width: 45rem;
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
	border-radius: 24px;
	outline: 1px solid rgba(242, 242, 242, 0.15);
	padding: 8px;
	overflow: hidden;
	box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 0, 0, 0.2),
		0 30px 120px rgba(0, 0, 0, 0.8);

	.window-main {
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(242, 242, 242, 0.3);
		border-radius: 16px;
		overflow: hidden;
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1), 0 0 12px rgba(0, 0, 0, 0.4);
	}

	.window-bar {
		-webkit-text-size-adjust: 100%;
		--background: #101010;
		--on-background: #f2f2f2;
		font-family: Arial, sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: var(--on-background);
		pointer-events: all;
		box-sizing: border-box;
		z-index: 5;
		height: 40px;
		backdrop-filter: blur(40px);
		background-image: linear-gradient(
			to right,
			rgba(242, 242, 242, 0.1),
			rgba(242, 242, 242, 0.5) 50%,
			rgba(242, 242, 242, 0.1)
		);
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		padding-right: 12px;
		display: flex;
		box-shadow: 0 10px 20px 4px rgba(0, 0, 0, 0.2);

		.window-dots-wrapper {
			-webkit-text-size-adjust: 100%;
			--background: #101010;
			--on-background: #f2f2f2;
			font-family: Arial, sans-serif;
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
		padding-block: 6rem;
		padding-inline: 4rem;
		display: flex;
		position: relative;

		.tagline {
			font-size: 2rem;
			font-weight: 800;
		}

		.sub-info {
			font-size: 14px;
			width: 100%;
			text-align: right;
			margin-top: 2rem;
		}
		.project-thumbnail {
			z-index: 1;
			max-width: 90%;
			align-self: center;
			position: relative;
			box-shadow: 0 40px 50px 10px rgba(0, 0, 0, 0.25);
		}
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

export { Box, Chrome, Dot };
