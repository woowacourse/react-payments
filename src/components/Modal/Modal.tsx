import { DialogHTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export function Modal({ isOpen, setIsOpen, children, ...props }: Props) {
  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <>
      <Style.Backdrop isOpen={isOpen} onClick={closeModal} />
      <Style.Container open={isOpen} {...props}>
        {children}
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
};
