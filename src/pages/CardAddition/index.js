import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CARD,
  SECURE_CODE_LENGTH,
  PASSWORD_INPUT_LENGTH,
  VIRTUAL_KEYBOARD_TARGET_INPUT,
} from "../../constants";
import { Modal, CardTypeRadio, VirtualKeyboard } from "../../components";
import CardAdditionForm from "./CardAdditionForm";
import { useVirtualKeyboardInput } from "../../hooks";

const CardAddition = (props) => {
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [isModalVisible, setIsModalVisible] = useState({
    cardTypeSelection: false,
    virtualKeyboard: false,
  });
  const [virtualKeyboardInterface, setVirtualKeyboardInterface] = useState({
    insertInputChar: null,
    deleteInputChar: null,
  });

  const [
    secureCode,
    insertSecureCode,
    deleteSecureCode,
  ] = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: SECURE_CODE_LENGTH,
    onInputFullfilled: () => {
      setIsModalVisible({
        virtualKeyboard: false,
      });
    },
  });

  const [
    firstPassword,
    insertFirstPassword,
    deleteFirstPassword,
  ] = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: PASSWORD_INPUT_LENGTH,
    onInputFullfilled: () => {
      setIsModalVisible({
        virtualKeyboard: false,
      });
    },
  });

  const [
    secondPassword,
    insertSecondPassword,
    deleteSecondPassword,
  ] = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: PASSWORD_INPUT_LENGTH,
    onInputFullfilled: () => {
      setIsModalVisible({
        virtualKeyboard: false,
      });
    },
  });

  const changeVirtualKeyboardInterface = (key) => {
    const interfaceMap = {
      [VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE]: [
        insertSecureCode,
        deleteSecureCode,
      ],
      [VIRTUAL_KEYBOARD_TARGET_INPUT.FIRST_PASSWORD]: [
        insertFirstPassword,
        deleteFirstPassword,
      ],
      [VIRTUAL_KEYBOARD_TARGET_INPUT.SECOND_PASSWORD]: [
        insertSecondPassword,
        deleteSecondPassword,
      ],
    };

    if (!interfaceMap[key]) {
      return;
    }

    const [insertInputChar, deleteInputChar] = interfaceMap[key];

    setVirtualKeyboardInterface({
      insertInputChar,
      deleteInputChar,
    });
  };

  const onCardTypeRadioSelected = ({ target }) => {
    setCardType(JSON.parse(target.value));
    setIsModalVisible({
      cardTypeSelection: false,
    });
  };

  return (
    <>
      <CardAdditionForm
        setIsModalVisible={setIsModalVisible}
        setVirtualKeyboardTarget={changeVirtualKeyboardInterface}
        onNewCardAdd={props.onNewCardAdd}
        cardType={cardType}
        secureCode={secureCode}
        firstPassword={firstPassword}
        secondPassword={secondPassword}
      />

      <Modal
        isVisible={isModalVisible.cardTypeSelection}
        close={() => {
          setIsModalVisible({
            cardTypeSelection: false,
          });
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
                onChange={onCardTypeRadioSelected}
              />
            ))}
        </form>
      </Modal>

      <Modal
        isVisible={isModalVisible.virtualKeyboard}
        close={() => {
          setIsModalVisible({
            virtualKeyboard: false,
          });
        }}
      >
        <VirtualKeyboard
          insertInputChar={virtualKeyboardInterface.insertInputChar}
          deleteInputChar={virtualKeyboardInterface.deleteInputChar}
        />
      </Modal>
    </>
  );
};

CardAddition.propTypes = {
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAddition;
