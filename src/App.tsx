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
	const RENDERING_STEP = {
		cardNumber: 0,
		company: 1,
		expirationDate: 2,
		cvc: 3,
		password: 4,
	};
	const step = Object.values(cardForm.isComplete).filter(Boolean).length;

	return (
		<MainContainer>
			<Form>
				<Card cardNumbers={cardForm.cardNumber} cardCompany={cardForm.cardCompany} expirationDate={cardForm.expirationDate} />

				{step >= RENDERING_STEP.password && <CardPassword cardPassword={cardForm.cardPassword} setCardPassword={cardForm.setCardPassword} />}
				{step >= RENDERING_STEP.cvc && <CardCvc cvcNumber={cardForm.cvcNumber} setCvcNumber={cardForm.setCvcNumber} />}
				{step >= RENDERING_STEP.expirationDate && <ExpirationDate expirationDate={cardForm.expirationDate} setExpirationDate={cardForm.setExpirationDate} />}
				{step >= RENDERING_STEP.company && <CardCompany cardCompany={cardForm.cardCompany} setCardCompany={cardForm.setCardCompany} />}
				{step >= RENDERING_STEP.cardNumber && <CardNumber cardNumber={cardForm.cardNumber} setCardNumber={cardForm.setCardNumber} />}

				{step === 5 && (
					<ButtonWrap>
						<Button type="button">확인</Button>
					</ButtonWrap>
				)}
			</Form>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	width: 376px;
	padding: 77px 30px 20px;
	margin: auto;
`;

const Form = styled.form`
	position: relative;
`;

const ButtonWrap = styled.div`
	position: sticky;
	bottom: 0;
`;
