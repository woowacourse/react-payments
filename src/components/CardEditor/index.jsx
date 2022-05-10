import PropTypes from "prop-types";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInput from "hooks/useInput";
import useCardNumber from "hooks/useCardNumber";
import useCardPassword from "hooks/useCardPassword";
import useCardDueDate from "hooks/useCardDueDate";
import useModal from "hooks/useModal";

import Header from "../Header";
import Button from "../Button";
import Card from "../Card";
import Modal from "../Modal";
import Palette from "../Palette";
import CardNumberInput from "./CardNumberInput";
import CardDueDateInput from "./CardDueDateInput";
import CardOwnerInput from "./CardOwnerInput";
import CardCVCInput from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";

import {
  COLORS,
  CARD_NUMBER,
  CARD_SIZE,
  DUE_DATE,
  CVC,
  INFO_MESSAGES,
} from "constant";
import { isValidCvc, isValidOwnerLength } from "validation";
import { ReactComponent as ArrowImage } from "assets/arrow.svg";
import { CardWrapper, FooterWrapper } from "pages/style";
import { CardDispatchContext } from "context/CardListProvider";

function CardEditor({ isEdit }) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state?.data;

  const { cardNumbers, handleChangeCardNumber, cardNumberInputRefs } =
    useCardNumber(data?.cardNumbers ?? ["", "", "", ""]);
  const { dueDate, handleChangeDueDate, yearInputRef, error } = useCardDueDate(
    data?.dueDate ?? { month: "", year: "" }
  );
  const [owner, , handleChangeOwner] = useInput({
    initialValue: data?.owner ?? "",
    validator: isValidOwnerLength,
  });
  const [cvc, , handleChangeCvc] = useInput({
    initialValue: data?.cvc ?? "",
    validator: isValidCvc,
  });
  const { password, handleChangePassword, secondPasswordInputRef } =
    useCardPassword(
      data?.password ?? { firstPassword: "", secondPassword: "" }
    );
  const [company, setCompany] = useState(
    data?.company ?? { color: "", name: "" }
  );
  const { modalVisible, openModal, closeModal } = useModal();
  const [allRequired, setAllRequired] = useState(false);

  const { onCreate, onEditCard, onRemove } = useContext(CardDispatchContext);
  const cardId = useRef(Date.now());

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
    if (isEdit) {
      onEditCard(data.id, cardNumbers, dueDate, owner, cvc, password, company);
      navigate(`/finish/${data.id}`, {
        replace: true,
        state: { nickname: data.nickname },
      });
      return;
    }

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
  };

  const handleRemoveCard = () => {
    if (window.confirm(INFO_MESSAGES.ASK_DELETE)) {
      onRemove(data.id);
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <Header
        headText={isEdit ? "카드 정보 수정" : "카드 추가"}
        leftChild={
          <Button onClick={() => navigate("/")}>
            <ArrowImage />
          </Button>
        }
        rightChild={
          isEdit && (
            <Button color={COLORS.PINK} onClick={handleRemoveCard}>
              삭제하기
            </Button>
          )
        }
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

CardEditor.propTypes = {
  isEdit: PropTypes.bool,
};

export default CardEditor;
