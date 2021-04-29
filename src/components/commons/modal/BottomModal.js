import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Styled from './BottomModal.style';

export const BottomModal = forwardRef(({ closeModal, children, styles, ...props }, ref) => {
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Styled.Dimmer onClick={handleModalClose}>
      <Styled.BottomModal ref={ref} {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
});

BottomModal.propTypes = {
  closeModal: PropTypes.func,
  styles: PropTypes.object,
};
