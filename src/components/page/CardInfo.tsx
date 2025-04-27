import { useNavigate } from "react-router";
import Card from "../card/Card";
import CardNumber from "../form/CardNumber";
import ExpirationDate from "../form/ExpirationDate";
import CardCvc from "../form/CardCvc";
import CardCompany from "../form/CardCompany";
import CardPassword from "../form/CardPassword";
import Button from "../button/Button";
import useCardNumber from "../../hooks/useCardNumber";
import useCardCompany from "../../hooks/useCardCompany";
import useExpirationDate from "../../hooks/useExpirationDate";
import useCardPassword from "../../hooks/useCardPassword";
import useCardCvc from "../../hooks/useCardCvc";
import useFormStepControl from "../../hooks/useFormStepControl";
import styled from "styled-components";

export interface cardNumber {
	first: string;
	second: string;
	third: string;
	fourth: string;
}

export interface date {
	month: string;
	year: string;
}

const RENDERING_STEP = {
	cardNumber: 0,
	company: 1,
	expirationDate: 2,
	cvc: 3,
	password: 4,
};

function App() {
	const navigate = useNavigate();
	const cardNumberHook = useCardNumber();
	const cardCompanyHook = useCardCompany();
	const expirationDateHook = useExpirationDate();
	const cardCvcHook = useCardCvc();
	const cardPasswordHook = useCardPassword();
	const { step, maxStep } = useFormStepControl({
		cardNumber: cardNumberHook.isComplete,
		company: cardCompanyHook.isComplete,
		expirationDate: expirationDateHook.isComplete,
		cvc: cardCvcHook.isComplete,
		password: cardPasswordHook.isComplete,
	});

	const onClick = () => {
		navigate("/addSuccess", { state: cardNumberHook.cardNumber.first });
	};

	return (
		<MainContainer>
			<form>
				<Card cardNumbers={cardNumberHook.cardNumber} cardCompany={cardCompanyHook.cardCompany} expirationDate={expirationDateHook.expirationDate} />

				{maxStep >= RENDERING_STEP.password && <CardPassword cardPassword={cardPasswordHook.cardPassword} setCardPassword={cardPasswordHook.setCardPassword} />}
				{maxStep >= RENDERING_STEP.cvc && <CardCvc cvcNumber={cardCvcHook.cvcNumber} setCvcNumber={cardCvcHook.setCvcNumber} />}
				{maxStep >= RENDERING_STEP.expirationDate && <ExpirationDate expirationDate={expirationDateHook.expirationDate} setExpirationDate={expirationDateHook.setExpirationDate} />}
				{maxStep >= RENDERING_STEP.company && <CardCompany cardCompany={cardCompanyHook.cardCompany} setCardCompany={cardCompanyHook.setCardCompany} />}
				{maxStep >= RENDERING_STEP.cardNumber && <CardNumber cardNumber={cardNumberHook.cardNumber} setCardNumber={cardNumberHook.setCardNumber} />}

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
