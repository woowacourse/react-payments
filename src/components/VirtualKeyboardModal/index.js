import React from "react";
import Modal from "../@shared/Modal";
import VirtualKeyboard from "../VirtualKeyboard";
import PropTypes from "prop-types";

const VirtualKeyboardModal = ({ isVisible, close, dataPassage }) => {
  const transferCharInsertionToInput = (value) => {
    dataPassage.passData("charInsertion", value);
  };

  const transferCharDeletionToInput = () => {
    dataPassage.passData("charDeletion", true);
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
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  dataPassage: PropTypes.shape({
    data: PropTypes.shape({
      targetInput: PropTypes.string.isRequired,
      charInsertion: PropTypes.string.isRequired,
      charDeletion: PropTypes.bool.isRequired,
    }).isRequired,
    passData: PropTypes.func.isRequired,
  }),
};
