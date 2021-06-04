import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import CardAdditionForm from "./CardAdditionForm";
import { useModalInterface } from "../../hooks";
import VirtualKeyboardModal from "../../components/VirtualKeyboardModal";
import CardTypeSelectionModal from "../../components/CardTypeSelectionModal";
import { MODAL_DATA_KEY } from "../../constants";

const CardAddition = ({ onNewCardAdd }) => {
  const cardTypeSelectionModalInterface = useModalInterface({
    [MODAL_DATA_KEY.CARD_TYPE]: null,
  });
  const virtualKeyboardModalInterface = useModalInterface({
    [MODAL_DATA_KEY.TARGET_INPUT]: null,
    [MODAL_DATA_KEY.CHAR_INSERTION]: null,
    [MODAL_DATA_KEY.CHAR_DELETION]: false,
  });

  return (
    <>
      <CardAdditionForm
        onNewCardSubmit={onNewCardAdd}
        cardTypeSelectionModalInterface={cardTypeSelectionModalInterface}
        virtualKeyboardModalInterface={virtualKeyboardModalInterface}
      />

      <CardTypeSelectionModal
        isVisible={cardTypeSelectionModalInterface.isModalVisible}
        close={cardTypeSelectionModalInterface.closeModal}
        dataPassage={cardTypeSelectionModalInterface.dataPassage}
      />

      <VirtualKeyboardModal
        isVisible={virtualKeyboardModalInterface.isModalVisible}
        close={virtualKeyboardModalInterface.closeModal}
        dataPassage={virtualKeyboardModalInterface.dataPassage}
      />
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
