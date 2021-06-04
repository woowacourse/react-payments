import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import CardAdditionForm from "./CardAdditionForm";
import { useModalInterface } from "../../hooks";
import VirtualKeyboardModal from "../../components/VirtualKeyboardModal";
import CardTypeSelectionModal from "../../components/CardTypeSelectionModal";
import { CARD } from "../../constants";

const CardAddition = ({ onNewCardAdd }) => {
  const cardTypeSelectionModalInterface = useModalInterface({
    cardType: CARD.UNKNOWN,
  });
  const virtualKeyboardModalInterface = useModalInterface({
    targetInput: "",
    charInsertion: "",
    charDeletion: false,
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
