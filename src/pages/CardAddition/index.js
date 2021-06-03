import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { VIRTUAL_KEYBOARD_DELETION_INPUT } from "../../constants";
import CardAdditionForm from "./CardAdditionForm";
import { useModal } from "../../hooks";
import VirtualKeyboardModal from "../../components/VirtualKeyboardModal";
import CardTypeSelectionModal from "../../components/CardTypeSelectionModal";

const CardAddition = ({ onNewCardAdd }) => {
  //TODO: modalInterface로 바꾸기
  const cardTypeSelectionModal = useModal({
    cardType: null,
  });
  const virtualKeyboardModal = useModal({
    targetInput: null,
    virtualKeyboardInput: VIRTUAL_KEYBOARD_DELETION_INPUT,
  });

  //TODO: virtual 키보드가 현재 타겟변수를 내려받도록 수정하기
  //TODO: form이 onSubmit을 받도록 수정
  return (
    <>
      <CardAdditionForm
        onNewCardSubmit={onNewCardAdd}
        virtualKeyboardModal={virtualKeyboardModal}
        cardTypeSelectionModal={cardTypeSelectionModal}
      />

      <CardTypeSelectionModal
        isVisible={cardTypeSelectionModal.isModalVisible}
        close={cardTypeSelectionModal.closeModal}
        dataPassage={cardTypeSelectionModal.dataPassage}
      />

      <VirtualKeyboardModal
        isVisible={virtualKeyboardModal.isModalVisible}
        close={virtualKeyboardModal.closeModal}
        dataPassage={virtualKeyboardModal.dataPassage}
      />
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
