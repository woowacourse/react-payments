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
import { useContext } from "react";
import { Card, CardCompany } from "../../types";
import { useNavigate } from "react-router-dom";
import { isNumeric, isFulfilledObject, isFulfilledString } from "../../validator/Validator";
import { PAGE } from "../../constant";
import Modal from "../../components/Modal/Modal";
import CardCompanyIcon from "../../components/CardCompanyIcon/CardCompanyIcon";
import { GlobalContext } from "../../context/GlobalProvider";
import { AddCardContext } from "../../context/AddCardProvider";

const AddCardPage = () => {
  const { addCard } = useContext(GlobalContext);

  const {
    modalOpen,
    error,
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setModalOpen,
    setError,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
  } = useContext(AddCardContext);

  const navigate = useNavigate();

  const handleCardCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    const company = e.currentTarget.name as CardCompany;
    setCardCompany(company);

    setModalOpen(false);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;

    setPassword({ ...password, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const card: Card = {
      cardCompany,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    };

    addCard(card);
    navigate(PAGE.CARD_LIST);
  };

  const isAddButtonVisibleConditionFulfilled = (): boolean => {
    const addButtonAppearCondition =
      isFulfilledObject(cardNumber, 4) &&
      isFulfilledObject(expirationDate, 2) &&
      isFulfilledObject(password, 1) &&
      isFulfilledString(securityCode, 3) &&
      !error.cardNumberError &&
      !error.expirationError;

    return addButtonAppearCondition;
  };

  return (
    <Container>
      <Modal
        modalOpen={modalOpen}
        children={
          <>
            <CardCompanyIcon company={"비씨카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"하나카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"현대카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"카카오뱅크"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"국민카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"롯데카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"신한카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
            <CardCompanyIcon company={"우리카드"} onClickHandler={handleCardCompany}></CardCompanyIcon>
          </>
        }
      ></Modal>
      <AppBar title={"카드 추가"} children={<Link to={PAGE.CARD_LIST}>〈</Link>} />
      <CardPreview card={{ cardCompany, cardNumber, expirationDate, ownerName }} />
      <Form onSubmit={onSubmitHandler}>
        <CardNumberInput cardNumber={cardNumber} error={error} setCardNumber={setCardNumber} setError={setError} />
        <CardExpirationDateInput
          expirationDate={expirationDate}
          error={error}
          setExpirationDate={setExpirationDate}
          setError={setError}
        />
        <CardOwnerNameInput ownerName={ownerName} nameLength={ownerName.length} setOwnerName={setOwnerName} />
        <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
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
