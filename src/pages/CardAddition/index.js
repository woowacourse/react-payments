import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CARD } from "../../constants";
import { Modal, CardTypeRadio } from "../../components";
import CardAdditionForm from "./CardAdditionForm";

const CardAddition = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardType, setCardType] = useState(CARD.UNKNOWN);

  const onModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setIsModalVisible(false);
      return;
    }
  };

  const onRadioChange = ({ target }) => {
    setCardType(JSON.parse(target.value));
    setIsModalVisible(false);
  };

  return (
    <>
      <CardAdditionForm
        cardType={cardType}
        setCardTypeModalVisibility={(visibility) => {
          setIsModalVisible(visibility);
        }}
        onNewCardAdd={props.onNewCardAdd}
      />

      {isModalVisible && (
        <Modal onClick={onModalClick}>
          <form className="card-type-radio-box">
            {Object.values(CARD)
              .filter((value) => value.name !== "")
              .map((value) => (
                <CardTypeRadio
                  key={value.name + value.color}
                  cardType={value}
                  groupName="card-type"
                  isChecked={value.name === cardType.name}
                  onChange={onRadioChange}
                />
              ))}
          </form>
        </Modal>
      )}
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
