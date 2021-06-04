import { useEffect, useState } from "react";
import PropType from "prop-types";
import { MODAL_DATA_KEY, MODAL_RESERVED_KEYWORD } from "../../constants";

const useModalVirtualKeyboardInput = ({
  targetInputType,
  maxLength,
  modalInterface,
}) => {
  const [inputData, setInputData] = useState("");
  const {
    closeModal,
    dataPassage: {
      passData,
      data: { targetInput: modalTargetInputType, charInsertion, charDeletion },
    },
  } = modalInterface;

  const insertInputChar = (value) => {
    setInputData((prevValue) => {
      const newValue = prevValue + value;

      if (newValue.length > maxLength) {
        closeModal();
        return prevValue;
      }

      if (newValue.length === maxLength) {
        closeModal();
      }

      return newValue;
    });
  };

  const deleteInputChar = () => {
    setInputData((prevValue) => prevValue.replace(/\d$/, ""));
  };

  useEffect(() => {
    if (
      charInsertion === MODAL_RESERVED_KEYWORD.WAIT_FOR_INSERTION ||
      charInsertion === null
    ) {
      return;
    }

    if (targetInputType !== modalTargetInputType) {
      return;
    }

    insertInputChar(charInsertion);
    passData(
      MODAL_DATA_KEY.CHAR_INSERTION,
      MODAL_RESERVED_KEYWORD.WAIT_FOR_INSERTION
    );
  }, [charInsertion]);

  useEffect(() => {
    if (!charDeletion) {
      return;
    }

    if (targetInputType !== modalTargetInputType) {
      return;
    }

    passData(MODAL_DATA_KEY.CHAR_DELETION, false);
    deleteInputChar();
  }, [charDeletion]);

  return { value: inputData };
};

export default useModalVirtualKeyboardInput;

useModalVirtualKeyboardInput.PropType = {
  targetInputType: PropType.string.isRequired,
  maxLength: PropType.string.isRequired,
  keyboardInterface: PropType.shape({
    isModalVisible: PropType.bool.isRequired,
    openModal: PropType.func.isRequired,
    closeModal: PropType.func.isRequired,
    dataPassage: PropType.shape({
      data: PropType.any.isRequired,
      passData: PropType.func.isRequired,
    }),
  }).isRequired,
};
