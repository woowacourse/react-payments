import { useState } from 'react';

import Modal from 'components/@common/Modal';

import { MODAL_STATE } from 'constants';

function useModal() {
  const [modalState, setVisible] = useState(MODAL_STATE.HIDDEN);

  const handleVisible = () => setVisible(MODAL_STATE.VISIBLE);
  const handleDisappear = () => setVisible(MODAL_STATE.DISAPPEAR);
  const handleHidden = () => setVisible(MODAL_STATE.HIDDEN);

  return {
    Modal: ({ children }) => (
      <Modal className={modalState} handleClose={handleDisappear} handleHidden={handleHidden}>
        {children}
      </Modal>
    ),
    handleModalOpen: handleVisible,
    handleModalClose: handleDisappear,
  };
}

export default useModal;
