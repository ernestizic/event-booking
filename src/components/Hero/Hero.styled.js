import styled from 'styled-components';

export const HeroContainer = styled.div`
	padding: 50px 60px;
	background: #301446;
	color: #fff;
	display: flex;
	@media (max-width: 576px) {
		flex-direction: column-reverse;
        padding: 50px 20px;
	}
    @media (max-width: 768px) {
        flex-direction: column-reverse;
	}
`;
export const MissionContainer = styled.div`
    padding-top: 60px;
	width: 50%;

	header {
		font-size: 55px;
		line-height: 91px;
	}
	.highlight {
		color: #ea7052;
		border-bottom: 4px solid #fff;
		padding-bottom: 1px;
	}
	p {
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 2px;
		word-spacing: 3px;
		padding: 40px 0;
	}
	@media (max-width: 576px) {
		width: 100%;
        padding-top: 40px;
		header {
			font-size: 30px;
			line-height: 51px;
		}
		p {
		font-size: 16px;
		line-height: 30px;
		letter-spacing: 1px;
		padding: 20px 0;
	}

	}
    @media (max-width: 768px) {
        padding-top: 40px;
        width: 100%;
	}
`;
export const HeroImageContainer = styled.div`
	width: 50%;
	img {
        border-radius: 14px;
		width: 100%;
        height: 90%;
	}
	@media (max-width: 576px) {
		width: 100%;
	}
    @media (max-width: 768px) {
        width: 100%;
	}
`;
