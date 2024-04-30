import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardNumberValue, ExpirationPeriodValue } from "../../@types/CreditCard";
import Button from "../../components/common/Button";
import CreditCard from "../../components/creditCard";
import CreditCardBack from "../../components/creditCard/CreditCardBack";
import CardCVCNumberForm from "../../components/input/Form/CardCVCNumberForm";
import CardCompanyForm from "../../components/input/Form/CardCompanyForm";
import CardExpirationPeriodForm from "../../components/input/Form/CardExprirationPeriodForm";
import CardNumberForm from "../../components/input/Form/CardNumberForm";
import CardOwnerNameForm from "../../components/input/Form/CardOwnerNameForm";
import CardPasswordForm from "../../components/input/Form/CardPasswordForm";
import SIGN from "../../constants/sign";

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
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState<CardNumberValue>({
    firstValue: SIGN.empty,
    secondValue: SIGN.empty,
    thirdValue: SIGN.empty,
    fourthValue: SIGN.empty,
  });
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodValue>({
    month: SIGN.empty,
    year: SIGN.empty,
  });
  const [owner, setOwner] = useState<Owner>({ name: SIGN.empty });
  const [selectedCompany, setSelectedCompany] = useState("");
  const [cvc, setCVC] = useState<CVC>({ number: SIGN.empty });
  const [password, setPassword] = useState<Password>({ number: SIGN.empty });

  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [isCardCompanyValid, setIsCardCompanyValid] = useState(false);
  const [isExpirationPeriodValid, setIsExpirationPeriodValid] = useState(false);
  const [isOwnerValid, setIsOwnerValid] = useState(false);
  const [isCVCValid, setIsCVCValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [showCardBack, setShowCardBack] = useState(false);

  const handleCardClick = () => {
    setShowCardBack((preState) => !preState);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      navigate("/success", {
        state: {
          cardNumber: cardNumber.firstValue,
          cardName: selectedCompany,
        },
      });
    }
  };
  const formatExpirationPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  const handleCardNumberValidity = () => {
    const isValid =
      cardNumber.firstValue.length === 4 &&
      cardNumber.secondValue.length === 4 &&
      cardNumber.thirdValue.length === 4 &&
      cardNumber.fourthValue.length === 4 &&
      !cardNumberError;
    setIsCardNumberValid(isValid);
  };

  const handleCompanyBlur = () => {
    if (!selectedCompany) {
      setIsCardCompanyValid(false);
    }
  };

  useEffect(() => {
    handleCardNumberValidity();
  }, [cardNumber, cardNumberError]);

  const handleFormValidation = () => {
    const isValid =
      isCardNumberValid &&
      isCardCompanyValid &&
      isExpirationPeriodValid &&
      isOwnerValid &&
      isCVCValid &&
      isPasswordValid;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    handleFormValidation();
  }, [
    isCardNumberValid,
    isCardCompanyValid,
    isExpirationPeriodValid,
    isOwnerValid,
    isCVCValid,
    isPasswordValid,
  ]);

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
        <CardNumberForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          setIsCardNumberValid={setIsCardNumberValid}
          cardNumberError={cardNumberError}
          setCardNumberError={setCardNumberError}
        />
        {isCardNumberValid && (
          <CardCompanyForm
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
            setIsCardCompanyValid={setIsCardCompanyValid}
            onBlur={handleCompanyBlur}
          />
        )}
        {isCardNumberValid && isCardCompanyValid && (
          <CardExpirationPeriodForm
            expirationPeriod={expirationPeriod}
            setExpirationPeriod={setExpirationPeriod}
            setIsExpirationPeriodValid={setIsExpirationPeriodValid}
          />
        )}
        {isCardNumberValid && isCardCompanyValid && isExpirationPeriodValid && (
          <CardOwnerNameForm owner={owner} setOwner={setOwner} setIsOwnerValid={setIsOwnerValid} />
        )}
        {isCardNumberValid && isCardCompanyValid && isExpirationPeriodValid && isOwnerValid && (
          <CardCVCNumberForm
            cvc={cvc}
            setCVC={setCVC}
            setIsCVCValid={setIsCVCValid}
            handleCardClick={handleCardClick}
          />
        )}
        {isCardNumberValid &&
          isCardCompanyValid &&
          isExpirationPeriodValid &&
          isOwnerValid &&
          isCVCValid && (
            <CardPasswordForm
              password={password}
              setPassword={setPassword}
              setIsPasswordValid={setIsPasswordValid}
            />
          )}
      </InputFormContainer>
      {isFormValid && (
        <Button content="확인" onClick={handleSubmit} position="fixed" bottom="0px" />
      )}
    </PaymentsContainer>
  );
};

export default Payments;

const PaymentsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 5%;
  overflow: hidden;
`;

const InputFormContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 80px;
  flex: 1;
  overflow-y: auto;
`;
