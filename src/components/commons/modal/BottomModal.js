import Styled from './BottomModal.style';

export const BottomModal = ({ children, ...props }) => {
  return (
    <Styled.Dimmer>
      <Styled.BottomModal styles={props}>{children}</Styled.BottomModal>
    </Styled.Dimmer>
  );
};
