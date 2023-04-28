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
import { isFulfilledObject, isFulfilledString } from "../../validator/Validator";
import { PAGE } from "../../constant";
import Modal from "../../components/Modal/Modal";
import CardCompanyIcon from "../../components/CardCompanyIcon/CardCompanyIcon";
import { GlobalContext } from "../../context/GlobalProvider";
import { AddCardContext } from "../../context/AddCardProvider";
import { Button } from "../../components/common/Button";

const AddCardPage = () => {
  const { cards, setCards, setCurrentIndex } = useContext(GlobalContext);

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

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const card: Card = {
      cardName: "",
      cardCompany,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    };

    setCards([...cards, card]);
    setCurrentIndex(cards.length);
    navigate(PAGE.NAME_CARD);
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

  // const cardCompanyList = ["비씨카드","하나카드","현대카드","카카오뱅크","국민카드","롯데카드","신한카드","우리카드"]

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
      <CardPreviewButton onClick={() => setModalOpen(true)}>
        <CardPreview card={{ cardCompany, cardNumber, expirationDate, ownerName }} />
      </CardPreviewButton>
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
        <CardPasswordInput password={password} setPassword={setPassword} />
        <Button isVisible={isAddButtonVisibleConditionFulfilled()}>다음</Button>
      </Form>
    </Container>
  );
};

const CardPreviewButton = styled.button`
  all: unset;

  cursor: pointer;
`;

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

export default AddCardPage;
