import React from "react";
import Modal from "../@shared/Modal";
import VirtualKeyboard from "../VirtualKeyboard";
import PropTypes from "prop-types";
import { VIRTUAL_KEYBOARD_DELETION_INPUT } from "../../constants";

const VirtualKeyboardModal = ({ isVisible, close, dataPassage }) => {
  const transferCharInsertionToInput = (value) => {
    dataPassage.passData("virtualKeyboardInput", value);
  };

  const transferCharDeletionToInput = () => {
    dataPassage.passData(
      "virtualKeyboardInput",
      VIRTUAL_KEYBOARD_DELETION_INPUT
    );
  };

  return (
    <Modal isVisible={isVisible} close={close}>
      <VirtualKeyboard
        insertInputChar={transferCharInsertionToInput}
        deleteInputChar={transferCharDeletionToInput}
      />
    </Modal>
  );
};

export default VirtualKeyboardModal;

VirtualKeyboardModal.propTypes = {
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
