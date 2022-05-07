import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
import useCardNumber from "hooks/useCardNumber";
import useCardPassword from "hooks/useCardPassword";
import useCardDueDate from "hooks/useCardDueDate";
import useModal from "hooks/useModal";

import Card from "components/common/Card";
import Button from "components/common/Button";
import CardNumberInput from "components/CardNumberInput";
import CardDueDateInput from "components/CardDueDateInput";
import CardOwnerInput from "components/CardOwnerInput";
import CardCVCInput from "components/CardCVCInput";
import CardPasswordInput from "components/CardPasswordInput";
import Header from "components/common/Header";
import Modal from "components/common/Modal";
import Palette from "components/common/Palette";

import { CARD_NUMBER, CARD_SIZE, DUE_DATE, CVC } from "constant";
import { isValidCvc, isValidOwnerLength } from "validation";
import { ReactComponent as ArrowImage } from "assets/arrow.svg";
import { CardWrapper, FooterWrapper } from "pages/style";
import { CardDispatchContext } from "context/CardListProvider";

function CardEditor({ isEdit, originData }) {
  const navigate = useNavigate();
  const {
    cardNumbers,
    setCardNumbers,
    handleChangeCardNumber,
    cardNumberInputRefs,
  } = useCardNumber();
  const { dueDate, setDueDate, handleChangeDueDate, yearInputRef, error } =
    useCardDueDate();
  const [owner, setOwner, handleChangeOwner] = useInput({
    initialValue: "",
    validator: isValidOwnerLength,
  });
  const [cvc, setCvc, handleChangeCvc] = useInput({
    initialValue: "",
    validator: isValidCvc,
  });
  const {
    password,
    setPassword,
    handleChangePassword,
    secondPasswordInputRef,
  } = useCardPassword();
  const [allRequired, setAllRequired] = useState(false);
  const [company, setCompany] = useState({ color: "", name: "" });
  const { modalVisible, openModal, closeModal } = useModal();

  const { onCreate, onEditCard } = useContext(CardDispatchContext);
  const cardId = useRef(Date.now());

  useEffect(() => {
    if (isEdit) {
      setCardNumbers(originData.cardNumbers);
      setDueDate(originData.dueDate);
      setCompany(originData.company);
      setPassword(originData.password);
      setOwner(originData.owner);
      setCvc(originData.cvc);
    }
  }, [isEdit, originData]);

  useEffect(() => {
    setAllRequired(
      cardNumbers.join("").length === CARD_NUMBER.UNIT_LENGTH * 4 &&
        dueDate.month.length === DUE_DATE.UNIT_LENGTH &&
        dueDate.year.length === DUE_DATE.UNIT_LENGTH &&
        cvc.length === CVC.UNIT_LENGTH &&
        password.firstPassword &&
        password.secondPassword
    );
  }, [cardNumbers, dueDate, cvc, password]);

  const handleSelectCompany = (color, name) => {
    setCompany({ color, name });
    closeModal();
  };

  const handleSubmit = () => {
    if (!isEdit) {
      onCreate(
        cardId.current,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company
      );
      navigate(`/finish/${cardId.current}`, { replace: true });
      cardId.current += 1;
    } else {
      onEditCard(
        originData.cardId,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company
      );
      navigate(`/finish/${originData.cardId}`, { replace: true });
    }
  };

  return (
    <>
      <Header
        leftChild={
          <Button onClick={() => navigate("/")}>
            <ArrowImage />
          </Button>
        }
        headText={isEdit ? "카드 수정하기" : "카드 추가"}
      />
      <CardWrapper>
        <Card
          size={CARD_SIZE.SMALL}
          color={company.color}
          company={company.name}
          cardNumbers={cardNumbers}
          owner={owner || "NAME"}
          dueMonth={dueDate.month || "MM"}
          dueYear={dueDate.year || "YY"}
          onClick={openModal}
        />
      </CardWrapper>
      <CardNumberInput
        cardNumbers={cardNumbers}
        handleChangeCardNumber={handleChangeCardNumber}
        cardNumberInputRefs={cardNumberInputRefs}
      />
      <CardDueDateInput
        dueDate={dueDate}
        handleChangeDueDate={handleChangeDueDate}
        yearInputRef={yearInputRef}
        error={error}
      />
      <CardOwnerInput owner={owner} handleChangeOwner={handleChangeOwner} />
      <CardCVCInput cvc={cvc} handleChangeCvc={handleChangeCvc} />
      <CardPasswordInput
        password={password}
        handleChangePassword={handleChangePassword}
        secondPasswordInputRef={secondPasswordInputRef}
      />
      <FooterWrapper>
        {allRequired && <Button onClick={handleSubmit}>다음</Button>}
      </FooterWrapper>
      {modalVisible && (
        <Modal closeModal={closeModal}>
          <Palette handleSelectCompany={handleSelectCompany} />
        </Modal>
      )}
    </>
  );
}

export default CardEditor;
