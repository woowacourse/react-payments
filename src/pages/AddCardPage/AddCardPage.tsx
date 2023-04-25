import AppBar from "../../components/AppBar/AppBar";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardNumberInput from "../../components/CardNumberInput/CardNumberInput";
import CardOwnerNameInput from "../../components/CardOwnerNameInput/CardOwnerNameInput";
import CardExpirationDateInput from "../../components/CardExpirationDateInput/CardExpirationDateInput";
import CardSecurityCodeInput from "../../components/CardSecurityCodeInput/CardSecurityCodeInput";
import CardPasswordInput from "../../components/CardPasswordInput/CardPasswordInput";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/common";
import { useState } from "react";
import {
  Card,
  CardExpirationDate,
  CardExpirationDateKey,
  CardNumber,
  CardNumberGroups,
  CardPassword,
  CardPasswordKey,
} from "../../types";
import { useNavigate } from "react-router-dom";
import { isFulfilledObject, isFulfilledString, isValidMonth } from "../../validator/Validator";

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

  const [ownerName, setOwnerName] = useState<Card["ownerName"]>("");
  const [securityCode, setSecurityCode] = useState<Card["securityCode"]>("");

  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
  });

  const navigate = useNavigate();

  const handleCardNumber = (value: string, targetGroup: CardNumberGroups) => {
    setCardNumber({ ...cardNumber, [targetGroup]: value });
  };

  const handleExpirationDate = (value: string, dateType: CardExpirationDateKey) => {
    setExpirationDate({ ...expirationDate, [dateType]: value });
  };

  const handleOwnerName = (name: string) => {
    const upperCaseName = name.toUpperCase();

    setOwnerName(upperCaseName);
  };

  const handleSecurityCode = (code: string) => {
    setSecurityCode(code);
  };

  const handlePassword = (pw: string, targetDigit: CardPasswordKey) => {
    setPassword({ ...password, [targetDigit]: pw });
  };

  const addCard = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidMonth(expirationDate.month)) {
      alert("잘못된 만료일 입력 형식입니다. 다시 입력해 주세요!");

      return;
    }

    const card: Card = {
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    };

    onSubmit(card);

    navigate("/");
  };

  const isAddButtonVisible: boolean =
    isFulfilledObject(cardNumber, 4) &&
    isFulfilledObject(expirationDate, 2) &&
    isFulfilledObject(password, 1) &&
    isFulfilledString(securityCode, 3);

  return (
    <Container>
      <AppBar title={"카드 추가"} leftChild={<Link to="/">〈</Link>} />
      <CardPreview card={{ cardNumber, expirationDate, ownerName }} />
      <Form onSubmit={addCard}>
        <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumber} />
        <CardExpirationDateInput expirationDate={expirationDate} onChange={handleExpirationDate} />
        <CardOwnerNameInput ownerName={ownerName} nameLength={ownerName.length} onChange={handleOwnerName} />
        <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCode} />
        <CardPasswordInput password={password} onChange={handlePassword} />
        <ButtonBox>
          <Button type="submit" isVisible={isAddButtonVisible}>
            다음
          </Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ isVisible: boolean }>`
  background-color: transparent;
  border: none;

  font-size: 14px;
  font-weight: 700;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  cursor: pointer;
`;

export default AddCardPage;
