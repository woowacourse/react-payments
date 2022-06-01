import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface Props {
  onCloseModal(): void;
}

export default function ModalOverlay({ children, onCloseModal }: PropsWithChildren<Props>) {
  return (
    <>
      {ReactDOM.createPortal(
        <Styled.Backdrop onClick={onCloseModal} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Styled.Modal>{children}</Styled.Modal>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

const Styled = {
  Modal: styled.div`
    height: 100%;
    width: 400px;
    padding: 16px 24px;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  `,

  Backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: #f5f5f5;
  `,
};
