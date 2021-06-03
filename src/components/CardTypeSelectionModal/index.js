import React from "react";
import Modal from "../@shared/Modal";
import CardTypeRadio from "../CardTypeRadio";
import PropTypes from "prop-types";
import { CARD } from "../../constants";

const CardTypeSelectionModal = ({ isVisible, close, dataPassage }) => {
  const onCardTypeRadioSelected = ({ target }) => {
    dataPassage.passData("cardType", JSON.parse(target.value));
    close();
  };

  return (
    <Modal isVisible={isVisible} close={close}>
      <form className="card-type-radio-box">
        {Object.values(CARD)
          .filter((value) => value.name !== "")
          .map((value) => (
            <CardTypeRadio
              key={value.name + value.color}
              cardType={value}
              groupName="card-type"
              isChecked={value.name === ""}
              onChange={onCardTypeRadioSelected}
            />
          ))}
      </form>
    </Modal>
  );
};

export default CardTypeSelectionModal;

CardTypeSelectionModal.propTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  dataPassage: PropTypes.shape({
    data: PropTypes.shape({
      targetInput: PropTypes.string.isRequired,
      virtualKeyboardInput: PropTypes.string.isRequired,
    }).isRequired,
    passData: PropTypes.func.isRequired,
  }),
};
