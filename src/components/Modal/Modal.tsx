import { DialogHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  isModalOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export function Modal({ isModalOpen, children, closeModal, ...props }: Props) {
  return (
    <>
      <Style.Backdrop isModalOpen={isModalOpen} onClick={closeModal} />
      <Style.Container open={isModalOpen} isModalOpen={isModalOpen} {...props}>
        {children}
      </Style.Container>
    </>
  );
}

const Style = {
  Backdrop: styled.div<{ isModalOpen: boolean }>`
    display: 'block';

    width: 100%;
    height: 100%;

    position: fixed;
    left: 0;
    bottom: 0;
    border: none;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);

    ${(props) => {
      if (props.isModalOpen) return 'animation:  modal-backdrop-show 1s;';
      return 'animation:  modal-backdrop-close 1s forwards;';
    }}

    @keyframes modal-backdrop-show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes modal-backdrop-close {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    z-index: 999;
  `,

  Container: styled.dialog<{ isModalOpen: boolean }>`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 227px;

    position: fixed;
    left: 0;
    bottom: 0;
    padding: 30px;
    border: none;
    border-radius: 5px 5px 0 0;
    box-sizing: border-box;
    background-color: #fdfdfd;

    ${(props) => {
      if (props.isModalOpen) return 'animation:  modal-show 1s;';
      return 'animation:  modal-close 1s forwards;';
    }}

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

    @keyframes modal-close {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(100%);
      }
    }

    z-index: 1000;
  `,
};
