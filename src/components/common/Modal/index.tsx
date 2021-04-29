import { FC, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';

interface Props {
  modalClose?: () => void;
  type?: 'bottom' | 'full';
}

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${PALETTE.TRANSLUCENT_BLACK_9};
`;

const bottomType = css`
  margin-top: auto;
  height: 16rem;
  border-radius: 1rem 1rem 0 0;
`;

const fullType = css`
  height: 100vh;
`;

const ModalInner = styled.div<Pick<Props, 'type'>>`
  position: relative;
  width: 100%;
  background: white;
  ${({ type }) => (type === 'full' ? fullType : bottomType)};
`;

const Modal: FC<Props> = ({ children, modalClose, type }) => {
  const onClickDimmed = ({ target, currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (!modalClose || target !== currentTarget) return;

    modalClose();
  };

  return (
    <ModalContainer onClick={onClickDimmed}>
      <ModalInner type={type}>{children}</ModalInner>
    </ModalContainer>
  );
};

export default Modal;
