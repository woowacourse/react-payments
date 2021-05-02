import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Styled from './BottomModal.style';

export const BottomModal = ({ closeModal, children, styles, dimmerStyles, ...props }) => {
  const $bottomModal = useRef(null);
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    $bottomModal.current.scrollIntoView();
  });

  return (
    <Styled.Dimmer onClick={handleModalClose} styles={dimmerStyles}>
      <Styled.BottomModal ref={$bottomModal} {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
};

BottomModal.propTypes = {
  closeModal: PropTypes.func,
  styles: PropTypes.object,
};
