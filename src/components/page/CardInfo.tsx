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

const RENDERING_STEP = {
	cardNumber: 0,
	company: 1,
	expirationDate: 2,
	cvc: 3,
	password: 4,
};

function CardInfo() {
	const navigate = useNavigate();
	const cardNumberHook = useCardNumber();
	const cardCompanyHook = useCardCompany();
	const expirationDateHook = useExpirationDate();
	const cardCvcHook = useCardCvc();
	const cardPasswordHook = useCardPassword();
	const isComplete = {
		cardNumber: cardNumberHook.isComplete,
		company: cardCompanyHook.isComplete,
		expirationDate: expirationDateHook.isComplete,
		cvc: cardCvcHook.isComplete,
		password: cardPasswordHook.isComplete,
	};
	const { step } = useFormStepControl(isComplete);

	return (
		<MainContainer>
			<form>
				<Card cardNumbers={cardNumberHook.cardNumber} cardCompany={cardCompanyHook.cardCompany} expirationDate={expirationDateHook.expirationDate} />

				{step >= RENDERING_STEP.password && <CardPassword {...cardPasswordHook} />}
				{step >= RENDERING_STEP.cvc && <CardCvc {...cardCvcHook} />}
				{step >= RENDERING_STEP.expirationDate && <ExpirationDate {...expirationDateHook} />}
				{step >= RENDERING_STEP.company && <CardCompany {...cardCompanyHook} />}
				{step >= RENDERING_STEP.cardNumber && <CardNumber {...cardNumberHook} />}
				{Object.values(isComplete).every((step) => step) && (
					<ButtonWrap>
						<Button type="button" onClick={() => navigate("/addSuccess", { state: { firstCardNumber: cardNumberHook.cardNumber.first, cardCompany: cardCompanyHook.cardCompany } })}>
							확인
						</Button>
					</ButtonWrap>
				)}
			</form>
		</MainContainer>
	);
}

export default CardInfo;

const MainContainer = styled.div`
	width: 376px;
	padding: 77px 30px 20px;
	margin: auto;
`;

const ButtonWrap = styled.div`
	position: sticky;
	bottom: 0;
`;
