import styled from 'styled-components';

export const FooterContainer = styled.div`
    text-align: center;
	padding: 40px;
	position: absolute;
	bottom: 0;
	width: 100%;
	background: #301446;
	color: #fff;

	img {
		width: 180px;
	}
	@media (max-width: 576px) {
		padding: 10px;
		img {
			width: 100px;
		}
	}
`;
