import { useLocation, useNavigate } from "react-router";
import Button from "../button/Button";
import styled from "styled-components";

const CardAddSuccess = () => {
	const navigate = useNavigate();
	const { firstCardNumber, cardCompany } = useLocation().state;

	return (
		<Container>
			<img src="./images/Success.svg" alt="success Adding Card" />
			<AddText>
				{firstCardNumber}로 시작하는
				<br /> {cardCompany}가 등록되었어요.
			</AddText>
			<Button type="button" onClick={() => navigate("/")}>
				확인
			</Button>
		</Container>
	);
};

export default CardAddSuccess;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0 28px;
`;

const AddText = styled.p`
	margin: 25px 0;
	text-align: center;
	font-weight: 700;
	font-size: 25px;
	color: #353c49;
`;
