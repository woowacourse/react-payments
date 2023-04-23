import AppBar from "../../components/AppBar/AppBar";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardNumberInput from "../../components/CardNubmerInput/CardNumberInput";
import CardOwnerNameInput from "../../components/CardOwnerNameInput/CardOwnerNameInput";
import CardExpirationDateInput from "../../components/CardExpirationDateInput/CardExpirationDateInput";
import CardSecurityCodeInput from "../../components/CardSecurityCodeInput/CardSecurityCodeInput";
import CardPasswordInput from "../../components/CardPasswordInput/CardPasswordInput";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/common";
import { useState } from "react";
import { Card, CardExpirationDate, CardNumber, CardPassword } from "../../types";
import { useNavigate } from "react-router-dom";
import {
  isNumeric,
  isFulfilledObject,
  isFulfilledString,
  isValidMonth,
  isValidOwnerName,
  isTheOtherGroupFulfilled,
  hasInvalidKey,
} from "../../validator/Validator";
import { PAGE } from "../../constant";

type AddCardPageProps = {
  onSubmit: (card: Card) => void;
};

const AddCardPage = ({ onSubmit }: AddCardPageProps) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  });

  const [expirationDate, setExpirationDate] = useState<CardExpirationDate>({
    month: "",
    year: "",
  });

  const [ownerName, setOwnerName] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
  });

  const [error, setError] = useState<{ cardNumberError: boolean; expirationError: boolean }>({
    cardNumberError: false,
    expirationError: false,
  });

  const navigate = useNavigate();

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;
    setCardNumber({ ...cardNumber, [name]: value });

    if (isTheOtherGroupFulfilled(cardNumber, name) && isFulfilledString(value, 4))
      setError({ ...error, cardNumberError: false });
  };

  const handleCardNumberError = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    if (isFulfilledString(name, 4)) {
      setError({ ...error, cardNumberError: true });
      return;
    }

    if (hasInvalidKey(cardNumber)) {
      setError({ ...error, cardNumberError: true });
      return;
    }

    if (isFulfilledObject(cardNumber, 4)) setError({ ...error, cardNumberError: false });
  };

  const handleExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;

    setExpirationDate({ ...expirationDate, [name]: value });

    if (name === "month") {
      setError({ ...error, expirationError: isValidMonth(value) ? false : true });
    }
  };

  const handleExpirationDateError = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { month } = expirationDate;

    if (month.length === 1 && month !== "0") setExpirationDate({ ...expirationDate, month: `0${month}` });
    setError({ ...error, expirationError: isValidMonth(month) ? false : true });
  };

  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isValidOwnerName(value)) {
      return;
    }
    setOwnerName(value);
    setTimeout(() => {
      setOwnerName(value.toUpperCase());
    }, 70);
  };

  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNumeric(value)) return;

    setSecurityCode(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;

    setPassword({ ...password, [name]: value });
  };

  const addCard = (e: React.FormEvent) => {
    e.preventDefault();

    const card: Card = {
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    };

    onSubmit(card);
    navigate(PAGE.CARD_LIST);
  };

  const isAddButtonVisibleConditionFulfilled = (): boolean => {
    const condition =
      isFulfilledObject(cardNumber, 4) &&
      isFulfilledObject(expirationDate, 2) &&
      isFulfilledObject(password, 1) &&
      isFulfilledString(securityCode, 3) &&
      !error.cardNumberError &&
      !error.expirationError;

    return condition;
  };

  return (
    <Container>
      <AppBar title={"카드 추가"} children={<Link to={PAGE.CARD_LIST}>〈</Link>} />
      <CardPreview card={{ cardNumber, expirationDate, ownerName }} />
      <Form onSubmit={addCard}>
        <CardNumberInput
          cardNumber={cardNumber}
          error={error.cardNumberError}
          onChange={handleCardNumber}
          onBlur={handleCardNumberError}
        />
        <CardExpirationDateInput
          expirationDate={expirationDate}
          error={error.expirationError}
          onChange={handleExpirationDate}
          onBlur={handleExpirationDateError}
        />
        <CardOwnerNameInput ownerName={ownerName} nameLength={ownerName.length} onChange={handleOwnerName} />
        <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCode} />
        <CardPasswordInput password={password} onChange={handlePassword} />
        <ButtonBox isVisible={isAddButtonVisibleConditionFulfilled()}>
          <Button>다음</Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 19px;

  height: 500px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;

const ButtonBox = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: flex-end;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

export default AddCardPage;
