import Styled from './BottomModal.style';

export const BottomModal = ({ children, styles, ...props }) => {
  return (
    <Styled.Dimmer>
      <Styled.BottomModal {...props} styles={styles}>
        {children}
      </Styled.BottomModal>
    </Styled.Dimmer>
  );
};
