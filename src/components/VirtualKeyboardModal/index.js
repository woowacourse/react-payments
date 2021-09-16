import React from "react";
import Modal from "../@shared/Modal";
import VirtualKeyboard from "../VirtualKeyboard";
import PropTypes from "prop-types";
import { MODAL_DATA_KEY } from "../../constants";

const VirtualKeyboardModal = ({ isVisible, close, dataPassage }) => {
  const transferCharInsertionToInput = (value) => {
    dataPassage.passData(MODAL_DATA_KEY.CHAR_INSERTION, value);
  };

  const transferCharDeletionToInput = () => {
    dataPassage.passData(MODAL_DATA_KEY.CHAR_DELETION, true);
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
      targetInput: PropTypes.string,
      charInsertion: PropTypes.string,
      charDeletion: PropTypes.bool,
    }).isRequired,
    passData: PropTypes.func.isRequired,
  }),
};
