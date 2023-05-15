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
import { isFulfilledObject, isFulfilledString, isValidMonth } from "../../validator/Validator";
import { PAGE } from "../../constant/PagePath";
import CardCompanyIcon from "../../components/CardCompanyIcon/CardCompanyIcon";
import { AddCardStateContext } from "../../context/AddCardStateProvider";
import { Button } from "../../components/common/Button";
import useModal from "../../hooks/useModal";
import { CART_COMPANY } from "../../constant/Card";

const AddCardPage = () => {
  const { modalOpen, closeModal, openModal, Modal } = useModal(true);
  const { error, cardInfo, setError, setCardInfo } = useContext(AddCardStateContext);
  const { cardCompany, cardNumber, expirationDate, ownerName, securityCode, password } = cardInfo;

  const navigate = useNavigate();

  const handleCardCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cardCompany = e.currentTarget.name as CardCompany;
    setCardInfo({ ...cardInfo, cardCompany });

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

  const handleCardNumber = useCallback(
    (cardNumber: CardNumber) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, cardNumber }));
    },
    [setCardInfo]
  );

  const handleExpirationDate = useCallback(
    (expirationDate: CardExpirationDate) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, expirationDate }));
    },
    [setCardInfo]
  );

  const handleOwnerName = useCallback(
    (ownerName: string) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, ownerName }));
    },
    [setCardInfo]
  );

  const handleSecurityCode = useCallback(
    (securityCode: string) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, securityCode }));
    },
    [setCardInfo]
  );

  const handlePassword = useCallback(
    (password: CardPassword) => {
      setCardInfo((prevCardInfo) => ({ ...prevCardInfo, password }));
    },
    [setCardInfo]
  );

  const onChangeFormHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { form, value, maxLength } = e.target;
    const formElements: HTMLElement[] = Array.from(form);
    const currentIndex = formElements.indexOf(e.target);

    if (value.length === maxLength) {
      if (currentIndex === 4 && !isValidMonth(value)) return;
      formElements[currentIndex + 1].focus();
    }
  };

  return (
    <Container>
      <Modal modalOpen={modalOpen}>
        {CART_COMPANY.map((company) => (
          <CardCompanyIcon company={company} onClickHandler={handleCardCompany} />
        ))}
      </Modal>
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
