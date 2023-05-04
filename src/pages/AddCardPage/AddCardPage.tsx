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
import { useCallback, useContext } from "react";
import { CardCompany, CardExpirationDate, CardNumber, CardPassword } from "../../types";
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
  const { error, cardInfo, setError, setCardInfo } = useContext(AddCardStateContext);
  const { cardCompany, cardNumber, expirationDate, ownerName, securityCode, password } = cardInfo;

  const navigate = useNavigate();

  const handleCardCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    const company = e.currentTarget.name as CardCompany;
    setCardInfo({ ...cardInfo, cardCompany: company });

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

  // const handleCardCompany = useCallback(
  //   (value) => {
  //     setCardInfo((prevCardInfo) => ({ ...prevCardInfo, cardCompany: value }));
  //   },
  //   [setCardInfo]
  // );

  const handleCardNumber = useCallback(
    (value: CardNumber) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, cardNumber: value }));
    },
    [setCardInfo]
  );

  const handleExpirationDate = useCallback(
    (value: CardExpirationDate) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, expirationDate: value }));
    },
    [setCardInfo]
  );

  const handleOwnerName = useCallback(
    (value: string) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, ownerName: value }));
    },
    [setCardInfo]
  );

  const handleSecurityCode = useCallback(
    (value: string) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, securityCode: value }));
    },
    [setCardInfo]
  );

  const handlePassword = useCallback(
    (value: CardPassword) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, password: value }));
    },
    [setCardInfo]
  );

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
        <CardNumberInput cardNumber={cardNumber} setCardNumber={handleCardNumber} />
        <CardExpirationDateInput
          expirationDate={expirationDate}
          expirationError={error}
          setExpirationDate={handleExpirationDate}
          setError={setError}
        />
        <CardOwnerNameInput ownerName={ownerName} nameLength={ownerName.length} setOwnerName={handleOwnerName} />
        <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={handleSecurityCode} />
        <CardPasswordInput password={password} setPassword={handlePassword} />
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
