import Styled from './BottomModal.style';

export const BottomModal = ({ closeModal, children, styles, ...props }) => {
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Styled.Dimmer onClick={handleModalClose}>
      <Styled.BottomModal {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
};
