import { FC, MouseEvent } from 'react';
import { ModalContainer, ModalInner } from './styles';

export interface Props {
  onClose?: () => void;
  type?: 'bottom' | 'full';
}

const Modal: FC<Props> = ({ children, onClose, type }) => {
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
