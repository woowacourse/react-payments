import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CARD } from "../../constants";
import { Modal, CardTypeRadio } from "../../components";
import CardAdditionForm from "./CardAdditionForm";

const CardAddition = (props) => {
  const [isCardTypeModalVisible, setIsCardTypeModalVisible] = useState(false);
  const [isVirtualKeyboardVisible, setIsVirtualKeyboardVisible] = useState(
    false
  );
  const [cardType, setCardType] = useState(CARD.UNKNOWN);

  const onRadioChange = ({ target }) => {
    setCardType(JSON.parse(target.value));
    setIsCardTypeModalVisible(false);
  };

  return (
    <>
      <CardAdditionForm
        cardType={cardType}
        setCardTypeModalVisibility={setIsCardTypeModalVisible}
        setVirtualKeyboardModalVisibility={setIsVirtualKeyboardVisible}
        onNewCardAdd={props.onNewCardAdd}
      />

      <Modal
        isVisible={isCardTypeModalVisible}
        close={() => {
          setIsCardTypeModalVisible(false);
        }}
      >
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

      <Modal
        isVisible={isVirtualKeyboardVisible}
        close={() => {
          setIsVirtualKeyboardVisible(false);
        }}
      >
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
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
