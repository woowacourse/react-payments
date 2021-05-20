import { MouseEvent } from 'react';
import { ModalContainer, ModalInner } from './styles';

export interface Props {
  children: React.ReactNode;
  onClose?: () => void;
  type?: 'bottom' | 'full';
}

const Modal = ({ children, onClose, type }: Props) => {
  const onClickDimmed = ({ target, currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (!onClose || target !== currentTarget) return;

    onClose();
  };

  return (
    <ModalContainer onClick={onClickDimmed}>
      <ModalInner type={type}>{children}</ModalInner>
    </ModalContainer>
  );
};

export default Modal;
