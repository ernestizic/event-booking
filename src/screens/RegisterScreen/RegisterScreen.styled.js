import styled from 'styled-components';

export const RegisterScreenContainer = styled.div`
	.go-back {
		margin: 50px 200px;
		border: 1px solid #ea7052;
		color: #fff;
		border-radius: 7px;
		background: #ea7052;
		font-size: 18px;
		padding: 12px 20px;
		@media (max-width: 912px) {
            margin: 40px 10px 10px;
		}
	}

	.error{
		color: red;
		position: relative;
		top: -20px;
	}
`;

export const RegisterScreenForm = styled.div`
	background: #fff;
	width: 70%;
	margin: auto;
	padding: 45px;
	border-radius: 20px;
	@media (max-width: 912px) {
		width: 95%;
		margin: 10% auto;
		padding: 20px;
	}

	h2 {
        text-align: center;
		padding: 30px;
	}

	input {
		width: 100%;
		padding: 15px;
		margin-bottom: 20px;
		border-radius: 7px;
		border: none;
		background: #e5e5e5;
		font-size: 18px;
		@media (max-width: 912px) {
			width: 100%;
		}
	}
    select {
        width: 100%;
		padding: 15px;
		margin-bottom: 20px;
		border-radius: 7px;
		border: none;
		background: #e5e5e5;
		font-size: 18px;
		@media (max-width: 912px) {
			width: 100%;
		}
    }
	button {
		width: 100%;
		padding: 15px;
		margin-bottom: 30px;
		border: 1px solid #ea7052;
		color: #fff;
		border-radius: 7px;
		background: #ea7052;
		font-size: 18px;
		&:hover {
			border: 1px solid #ea7052;
			color: #ea7052;
			background: inherit;
			transition: all 0.3s ease-in-out;
		}
		@media (max-width: 912px) {
			width: 100%;
		}
	}
`;
