import { useEffect, useState } from "react";
import PropType from "prop-types";

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
    if (charInsertion === "" || charInsertion === null) {
      return;
    }

    if (targetInputType !== modalTargetInputType) {
      return;
    }

    //TODO: 키값 모두 상수화 하기
    insertInputChar(charInsertion);
    passData("charInsertion", "");
  }, [charInsertion]);

  useEffect(() => {
    if (!charDeletion) {
      return;
    }

    if (targetInputType !== modalTargetInputType) {
      return;
    }

    passData("charDeletion", false);
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
