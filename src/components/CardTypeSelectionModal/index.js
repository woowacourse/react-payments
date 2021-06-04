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
              isChecked={value.name === dataPassage.data.cardType?.name}
              onChange={onCardTypeRadioSelected}
            />
          ))}
      </form>
    </Modal>
  );
};

export default CardTypeSelectionModal;

CardTypeSelectionModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  dataPassage: PropTypes.shape({
    data: PropTypes.shape({
      cardType: PropTypes.any,
    }).isRequired,
    passData: PropTypes.func.isRequired,
  }),
};
