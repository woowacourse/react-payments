import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CARD, SECURE_CODE_LENGTH } from "../../constants";
import { Modal, CardTypeRadio, VirtualKeyboard } from "../../components";
import CardAdditionForm from "./CardAdditionForm";
import { useVirtualKeyboardInput } from "../../hooks";

const CardAddition = (props) => {
  const [isCardTypeModalVisible, setIsCardTypeModalVisible] = useState(false);
  const [isVirtualKeyboardVisible, setIsVirtualKeyboardVisible] = useState(
    false
  );
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [
    secureCode,
    insertSecureCode,
    deleteSecureCode,
  ] = useVirtualKeyboardInput("", SECURE_CODE_LENGTH);

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
        secureCode={secureCode}
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
        <VirtualKeyboard
          insertInputChar={insertSecureCode}
          deleteInputChar={deleteSecureCode}
        />
      </Modal>
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
