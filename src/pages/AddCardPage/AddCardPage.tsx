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
import { CardCompany } from "../../types";
import { useNavigate } from "react-router-dom";
import { isFulfilledObject, isFulfilledString } from "../../validator/Validator";
import { PAGE } from "../../constant/PagePath";
import Modal from "../../components/Modal/Modal";
import CardCompanyIcon from "../../components/CardCompanyIcon/CardCompanyIcon";
import { AddCardStateContext } from "../../context/AddCardStateProvider";
import { Button } from "../../components/common/Button";
import useModal from "../../hooks/useModal";

const AddCardPage = () => {
  const { modalOpen, closeModal, openModal } = useModal(true);
  const {
    error,
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setError,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
  } = useContext(AddCardStateContext);

  const navigate = useNavigate();

  const handleCardCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    const company = e.currentTarget.name as CardCompany;
    setCardCompany(company);

    closeModal();
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(PAGE.NAME_CARD);
  };

  const isAddButtonVisibleConditionFulfilled = (): boolean => {
    const addButtonAppearCondition =
      isFulfilledObject(cardNumber, 4) &&
      isFulfilledObject(expirationDate, 2) &&
      isFulfilledObject(password, 1) &&
      isFulfilledString(securityCode, 3) &&
      !error;

    return addButtonAppearCondition;
  };

  const onChangeFormHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { form, value, maxLength } = e.target;
    const formElements: HTMLElement[] = Array.from(form);
    const currentIndex = formElements.indexOf(e.target);

    if (value.length === maxLength) formElements[currentIndex + 1].focus();
  };

  return (
    <Container>
      {modalOpen && (
        <Modal
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
      )}
      <AppBar title={"카드 추가"} children={<Link to={PAGE.CARD_LIST}>〈</Link>} />
      <CardPreviewButton onClick={openModal}>
        <CardPreview card={{ cardCompany, cardNumber, expirationDate, ownerName }} />
      </CardPreviewButton>
      <Form onSubmit={onSubmitHandler} onChange={onChangeFormHandler}>
        <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <CardExpirationDateInput
          expirationDate={expirationDate}
          expirationError={error}
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
`;

export default AddCardPage;
