import useModal from '../../hooks/useModal';
import styled from 'styled-components';

type ToolTipProps = {
  message: string;
};

const ToolTip = ({ children, message }: React.PropsWithChildren<ToolTipProps>) => {
  const {
    isModalOpen: isToolTipOpen,
    openModal: openToolTip,
    closeModal: closeToolTip,
  } = useModal({ defaultVisible: false });

  return (
    <>
      <ToolTipBox onMouseOver={openToolTip} onMouseLeave={closeToolTip}>
        {children}
      </ToolTipBox>
      {isToolTipOpen && <Styled.ToolTipMessage>{message}</Styled.ToolTipMessage>}
    </>
  );
};

export default ToolTip;

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
