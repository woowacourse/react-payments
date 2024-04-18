import styled from "@emotion/styled";
import CreditCard from "../../components/creditCard";
import CreditCardForm from "../../components/creditCardForm";
import useInput from "../../hooks/useInput";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import { CardNumberValue, ExpirationPeriodValue } from "../../@types/CreditCard";
import { CARD_FORM_TYPE } from "../../constants/cardFormType";
import SIGN from "../../constants/sign";

interface Owner {
  name: string;
}

const Payments = () => {
  const [cardNumber, setCardNumber, cardNumberError] = useInput<CardNumberValue>({
    firstValue: SIGN.empty,
    secondValue: SIGN.empty,
    thirdValue: SIGN.empty,
    fourthValue: SIGN.empty,
  });

  const [expirationPeriod, setExpirationPeriod, expirationPeriodError] =
    useInput<ExpirationPeriodValue>({
      month: SIGN.empty,
      year: SIGN.empty,
    });

  const [owner, setOwner, ownerError] = useInput<Owner>({ name: SIGN.empty });

  const concatPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  return (
    <PaymentsContainer>
      <CreditCard
        creditCardNumber={[
          cardNumber.firstValue,
          cardNumber.secondValue,
          cardNumber.thirdValue,
          cardNumber.fourthValue,
        ]}
        expirationPeriod={concatPeriod()}
        ownerName={owner.name}
      />
      <InputFormContainer>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardNumber}
          description={CARD_FORM_MESSAGE.cardNumberDescription}
          type={CARD_FORM_TYPE.cardNumber}
          inputValue={cardNumber}
          handleChange={setCardNumber}
          inputError={cardNumberError}
        />
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardExpirationDate}
          description={CARD_FORM_MESSAGE.cardExpirationDateDescription}
          type={CARD_FORM_TYPE.expirationPeriod}
          inputValue={expirationPeriod}
          handleChange={setExpirationPeriod}
          inputError={expirationPeriodError}
        />
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardOwner}
          type={CARD_FORM_TYPE.owner}
          inputValue={owner.name}
          handleChange={setOwner}
          inputError={ownerError}
        />
      </InputFormContainer>
    </PaymentsContainer>
  );
};

export default Payments;

const PaymentsContainer = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputFormContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
