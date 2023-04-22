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
import { Card, CardExpirationDate, CardNumber, CardPassword } from "../../types";
import { useNavigate } from "react-router-dom";
import { isAlphabetic, isNumeric, isFulfilledObject, isFulfilledString, isValidMonth } from "../../validator/Validator";

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

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const targetGroup = e.target.name;

    if (!isNumeric(value)) return;
    if (!(targetGroup in cardNumber)) return;

    setCardNumber({ ...cardNumber, [targetGroup]: value });
  };

  const handleExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const dateType = e.target.name;

    if (!isNumeric(value)) return;
    if (!(dateType in expirationDate)) return;

    setExpirationDate({ ...expirationDate, [dateType]: value });
  };

  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (!isAlphabetic(name)) return;
    const upperCaseName = name.toUpperCase();

    setOwnerName(upperCaseName);
  };

  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;

    if (!isNumeric(code)) return;

    setSecurityCode(code);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    const targetDigit = e.target.name;

    if (!isNumeric(pw)) return;
    if (!(targetDigit in password)) return;

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
