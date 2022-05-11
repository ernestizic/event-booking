import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background: #301446;
	padding: 30px 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 180px;
	}
    #reg {
		padding: 10px 25px;
        background-color: #ea7052;
		border-radius: 10px;
		margin: 10px;
		border: 1px solid #ea7052;
		font-size: 20px;
		color: #fff;
		&:hover {
			background: inherit;
			transition: all 0.3s ease-in-out;
		}
	}
	@media (max-width: 576px) {
		padding: 10px;
		img {
			width: 100px;
		}
	}
`;

