import styled from "@emotion/styled";
import { CardNumberValue, ExpirationPeriodValue } from "../../@types/CreditCard";
import CreditCard from "../../components/creditCard";
import CreditCardForm from "../../components/creditCardForm";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import SIGN from "../../constants/sign";
import useInput from "../../hooks/useInput";
import InputCreditCardNumber from "../../components/input/InputCreditCardNumber";
import InputExpirationPeriod from "../../components/input/InputExpirationPeriod";
import InputOwnerName from "../../components/input/InputOwnerName";
import InputCreditCardCompany from "../../components/input/InputCreditCardCompany";
import { useState } from "react";
import InputCVCNumber from "../../components/input/InputCVCNumber";
import CreditCardBack from "../../components/creditCard/CreditCardBack";
import InputCardPassword from "../../components/input/InputCardPassword";

interface Owner {
  name: string;
}

interface CVC {
  number: string;
}

interface Password {
  number: string;
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

  const [selectedCompany, setSelectedCompany] = useState("");
  const [cardCompanyError, setCardCompanyError] = useState(false);

  const handleCompanyFocus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(e.target.value);
    setCardCompanyError(e.target.value === "");
  };

  const handleCompanyBlur = () => {
    if (!selectedCompany) {
      setCardCompanyError(true);
    }
  };

  const [cvc, setCVC, cvcError] = useInput<CVC>({ number: SIGN.empty });

  const [password, setPassword, passwordError] = useInput<Password>({ number: SIGN.empty });

  const formatExpirationPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  const [showCardBack, setShowCardBack] = useState(false);

  const handleCardClick = () => {
    setShowCardBack((preState) => !preState);
  };

  return (
    <PaymentsContainer>
      {showCardBack ? (
        <CreditCardBack cvcNumber={cvc.number} />
      ) : (
        <CreditCard
          creditCardNumber={[
            cardNumber.firstValue,
            cardNumber.secondValue,
            cardNumber.thirdValue,
            cardNumber.fourthValue,
          ]}
          expirationPeriod={formatExpirationPeriod()}
          ownerName={owner.name}
          selectedCompany={selectedCompany}
        />
      )}

      <InputFormContainer>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardPassword}
          description={CARD_FORM_MESSAGE.cardPasswordDescription}
          inputError={passwordError}
        >
          <InputCardPassword
            inputValue={password.number}
            handleChange={setPassword}
            inputError={passwordError}
          />
        </CreditCardForm>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardCVC}
          inputError={cvcError}
          onClick={handleCardClick}
        >
          <InputCVCNumber
            inputValue={cvc.number}
            handleChange={setCVC}
            inputError={cvcError}
            onClick={handleCardClick}
          />
        </CreditCardForm>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardCompany}
          description={CARD_FORM_MESSAGE.cardCompanyDescription}
          inputError={cardCompanyError}
        >
          <InputCreditCardCompany
            selectedCompany={selectedCompany}
            handleChange={handleCompanyFocus}
            onBlur={handleCompanyBlur}
          />
        </CreditCardForm>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardNumber}
          description={CARD_FORM_MESSAGE.cardNumberDescription}
          inputError={cardNumberError}
        >
          <InputCreditCardNumber
            inputValue={cardNumber}
            handleChange={setCardNumber}
            inputError={cardNumberError}
          />
        </CreditCardForm>
        <CreditCardForm
          title={CARD_FORM_MESSAGE.inputCardExpirationDate}
          description={CARD_FORM_MESSAGE.cardExpirationDateDescription}
          inputError={expirationPeriodError}
        >
          <InputExpirationPeriod
            inputValue={expirationPeriod}
            handleChange={setExpirationPeriod}
            inputError={expirationPeriodError}
          />
        </CreditCardForm>
        <CreditCardForm title={CARD_FORM_MESSAGE.inputCardOwner} inputError={ownerError}>
          <InputOwnerName inputValue={owner.name} handleChange={setOwner} inputError={ownerError} />
        </CreditCardForm>
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
