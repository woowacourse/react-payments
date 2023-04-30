import useModal from '../../hooks/useModal';
import styled from 'styled-components';

type TooTipProps = {
  message: string;
};

const TooTip = ({ children, message }: React.PropsWithChildren<TooTipProps>) => {
  const { isModalOpen: isToolTipOpen, openModal: openToolTip, closeModal: closeTooTip } = useModal(false);

  return (
    <>
      <ToolTipBox onMouseOver={openToolTip} onMouseLeave={closeTooTip}>
        {children}
      </ToolTipBox>
      {isToolTipOpen && <Styled.ToolTipMessage>{message}</Styled.ToolTipMessage>}
    </>
  );
};

export default TooTip;

const ToolTipBox = styled.div`
  cursor: pointer;
`;

const ToolTipMessage = styled.div`
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
`;

const Styled = {
  ToolTipBox,
  ToolTipMessage,
};
