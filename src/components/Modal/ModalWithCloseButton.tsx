import { DialogHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  buttonText: string;
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalWithCloseButton({ isOpen, buttonText, children, setIsOpen, ...props }: Props) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...props}>
      {children}
      <Style.ButtonWrapper>
        <Button
          type={'button'}
          onClick={closeModal}
          width={'368px'}
          height={'45px'}
          backgroundColor=' #75c4d2;'
          fontSize={'14px'}
        >
          {buttonText}
        </Button>
      </Style.ButtonWrapper>
    </Modal>
  );
}

const Style = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 20px;

    font-size: 20px;

    cursor: pointer;
  `,
};
