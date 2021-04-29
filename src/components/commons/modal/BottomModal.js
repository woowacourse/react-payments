import PropTypes from 'prop-types';
import Styled from './BottomModal.style';

export const BottomModal = ({ closeModal, children, styles, dimmerStyles, ...props }) => {
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Styled.Dimmer onClick={handleModalClose} styles={dimmerStyles}>
      <Styled.BottomModal {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
};

BottomModal.propTypes = {
  closeModal: PropTypes.func,
  styles: PropTypes.object,
};
