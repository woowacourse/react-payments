import { DialogHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { useModal } from '../../hooks/useModal';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  buttonText: string;
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalWithCloseButton({ isOpen, buttonText, children, setIsOpen, ...props }: Props) {
  const closeModal = useModal(setIsOpen);

  return (
    <>
      <Style.Backdrop isOpen={isOpen} onClick={closeModal} />
      <Style.Container open={isOpen} {...props}>
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
      </Style.Container>
    </>
  );
}

const Style = {
  Backdrop: styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};

    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    bottom: 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);

    animation: modal-backdrop-show 1s;
    @keyframes modal-backdrop-show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    z-index: 999;
  `,

  Container: styled.dialog<{ open: boolean }>`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 227px;

    position: fixed;
    left: 0;
    bottom: 0;
    padding: calc(20% / 3);
    border: none;
    border-radius: 5px 5px 0 0;
    background-color: #fdfdfd;

    animation: modal-show 1s;
    @keyframes modal-show {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    z-index: 1000;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 20px;

    font-size: 20px;

    cursor: pointer;
  `,
};
