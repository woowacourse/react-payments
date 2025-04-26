import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../card/Card";
import CardNumber from "../form/CardNumber";
import ExpirationDate from "../form/ExpirationDate";
import CardCvc from "../form/CardCvc";
import CardCompany from "../form/CardCompany";
import CardPassword from "../form/CardPassword";
import useCardForm from "../../hooks/useCardForm";
import Button from "../button/Button";
import styled from "styled-components";

export type cardNumber = {
	first: string;
	second: string;
	third: string;
	fourth: string;
};

export type date = {
	month: string;
	year: string;
};

function App() {
	const navigate = useNavigate();
	const { cardNumber, ...cardForm } = useCardForm();
	const [maxStep, setMaxStep] = useState(0);
	const RENDERING_STEP = {
		cardNumber: 0,
		company: 1,
		expirationDate: 2,
		cvc: 3,
		password: 4,
	};
	const step = Object.values(cardForm.isComplete).filter(Boolean).length;

	const onClick = () => {
		navigate("/addSuccess", { state: cardNumber.first });
	};

	useEffect(() => {
		setMaxStep((prev) => Math.max(prev, step));
	}, [step]);

	return (
		<MainContainer>
			<form>
				<Card cardNumbers={cardNumber} cardCompany={cardForm.cardCompany} expirationDate={cardForm.expirationDate} />

				{maxStep >= RENDERING_STEP.password && <CardPassword cardPassword={cardForm.cardPassword} setCardPassword={cardForm.setCardPassword} />}
				{maxStep >= RENDERING_STEP.cvc && <CardCvc cvcNumber={cardForm.cvcNumber} setCvcNumber={cardForm.setCvcNumber} />}
				{maxStep >= RENDERING_STEP.expirationDate && <ExpirationDate expirationDate={cardForm.expirationDate} setExpirationDate={cardForm.setExpirationDate} />}
				{maxStep >= RENDERING_STEP.company && <CardCompany cardCompany={cardForm.cardCompany} setCardCompany={cardForm.setCardCompany} />}
				{maxStep >= RENDERING_STEP.cardNumber && <CardNumber cardNumber={cardNumber} setCardNumber={cardForm.setCardNumber} />}

				{step === 5 && (
					<ButtonWrap>
						<Button type="button" onClick={onClick}>
							확인
						</Button>
					</ButtonWrap>
				)}
			</form>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	width: 376px;
	padding: 77px 30px 20px;
	margin: auto;
`;

const ButtonWrap = styled.div`
	position: sticky;
	bottom: 0;
`;
