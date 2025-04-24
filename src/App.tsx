import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import CardNumber from "./components/form/CardNumber";
import ExpirationDate from "./components/form/ExpirationDate";
import CardCvc from "./components/form/CardCvc";
import CardCompany from "./components/form/CardCompany";
import CardPassword from "./components/form/CardPassword";
import useCardForm from "./hooks/useCardForm";
import Button from "./components/button/Button";
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
	const cardForm = useCardForm();
	const [maxStep, setMaxStep] = useState(0);
	const RENDERING_STEP = {
		cardNumber: 0,
		company: 1,
		expirationDate: 2,
		cvc: 3,
		password: 4,
	};
	const step = Object.values(cardForm.isComplete).filter(Boolean).length;

	const onClick = () => {};

	useEffect(() => {
		setMaxStep((prev) => Math.max(prev, step));
	}, [step]);

	return (
		<MainContainer>
			<form>
				<Card cardNumbers={cardForm.cardNumber} cardCompany={cardForm.cardCompany} expirationDate={cardForm.expirationDate} />

				{maxStep >= RENDERING_STEP.password && <CardPassword cardPassword={cardForm.cardPassword} setCardPassword={cardForm.setCardPassword} />}
				{maxStep >= RENDERING_STEP.cvc && <CardCvc cvcNumber={cardForm.cvcNumber} setCvcNumber={cardForm.setCvcNumber} />}
				{maxStep >= RENDERING_STEP.expirationDate && <ExpirationDate expirationDate={cardForm.expirationDate} setExpirationDate={cardForm.setExpirationDate} />}
				{maxStep >= RENDERING_STEP.company && <CardCompany cardCompany={cardForm.cardCompany} setCardCompany={cardForm.setCardCompany} />}
				{maxStep >= RENDERING_STEP.cardNumber && <CardNumber cardNumber={cardForm.cardNumber} setCardNumber={cardForm.setCardNumber} />}

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
