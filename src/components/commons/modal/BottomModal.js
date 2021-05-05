import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Styled from './BottomModal.style';

export const BottomModal = ({ closeModal, children, styles, ...props }) => {
  const $modalRef = useRef(null);

  useEffect(() => {
    $modalRef.current?.scrollIntoView();
  }, []);

  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Styled.Dimmer onClick={handleModalClose}>
      <Styled.BottomModal ref={$modalRef} {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
};

BottomModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  styles: PropTypes.object,
};
