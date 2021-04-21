import Styled from './BottomModal.style';

export const BottomModal = ({ children, ...props }) => {
  return (
    <Styled.Dimmer>
      <Styled.BottomModal {...props}>{children}</Styled.BottomModal>
    </Styled.Dimmer>
  );
};
