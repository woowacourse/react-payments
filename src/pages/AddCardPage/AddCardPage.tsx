import AppBar from "../../components/@common/AppBar/AppBar";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardNumberInput from "../../components/CardNumberInput/CardNumberInput";
import CardOwnerNameInput from "../../components/CardOwnerNameInput/CardOwnerNameInput";
import CardExpirationDateInput from "../../components/CardExpirationDateInput/CardExpirationDateInput";
import CardSecurityCodeInput from "../../components/CardSecurityCodeInput/CardSecurityCodeInput";
import CardPasswordInput from "../../components/CardPasswordInput/CardPasswordInput";
import { Modal } from "react-dobob-modal";
import styled from "styled-components";
import { Container } from "../../components/@common";
import { useState } from "react";
import {
  Card,
  CardCompany,
  CardExpirationDate,
  CardExpirationDateKey,
  CardNumber,
  CardNumberGroups,
  CardPassword,
  CardPasswordKey,
} from "../../types";
import { useNavigate } from "react-router-dom";
import { isFulfilledObject, isFulfilledString, isValidMonth } from "../../validator/Validator";
import useModal from "../../hooks/useModal";
import CardCompanyButtonList from "../../components/CardCompanyButtonList/CardCompanyButtonList";
import ROUTE_PATH from "../../constants/routePath";
import Button from "../../components/@common/Button/Button";

const AddCardPage = () => {
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

  const [cardCompany, setCardCompany] = useState<Card["cardCompany"]>("BC");

  const { isModalOpen, modalClose, modalOpen } = useModal();

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

  const handleCardCompany = (company: CardCompany) => {
    setCardCompany(company);

    modalClose();
  };

  const addCard = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidMonth(expirationDate.month)) {
      alert("잘못된 만료일 입력 형식입니다. 다시 입력해 주세요!");

      return;
    }

    const card: Omit<Card, "alias"> = {
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
      cardCompany,
    };

    navigate(ROUTE_PATH.cardAlias, {
      state: card,
      replace: true,
    });
  };

  const isFormFilled =
    isFulfilledObject(cardNumber, 4) &&
    isFulfilledObject(expirationDate, 2) &&
    isFulfilledObject(password, 1) &&
    isFulfilledString(securityCode, 3);

  return (
    <AddCardPageContainer>
      <AppBar prevButton>카드 추가</AppBar>
      <CardPreview card={{ cardNumber, expirationDate, ownerName, cardCompany }} onClick={modalOpen} />
      <HelperText onClick={modalOpen}>카드사 선택하기👆</HelperText>
      <Form onSubmit={addCard}>
        <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumber} />
        <CardExpirationDateInput expirationDate={expirationDate} onChange={handleExpirationDate} />
        <CardOwnerNameInput ownerName={ownerName} onChange={handleOwnerName} />
        <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCode} />
        <CardPasswordInput password={password} onChange={handlePassword} />
        <NextButton type="submit" isFormFilled={isFormFilled}>
          입력 완료
        </NextButton>
      </Form>
      <Modal isOpen={isModalOpen} closeModal={modalClose}>
        <CardCompanyButtonList handleCardCompany={handleCardCompany} />
      </Modal>
    </AddCardPageContainer>
  );
};

const AddCardPageContainer = styled(Container)`
  height: initial;
`;

const HelperText = styled.span`
  font-size: 12px;

  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
`;

const NextButton = styled(Button)<{ isFormFilled: boolean }>`
  background-color: ${(props) => `var(--color-${props.isFormFilled ? "primary" : "pale"})`};
`;

export default AddCardPage;
