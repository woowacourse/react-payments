import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function ModalToast({ children, onCloseModal }) {
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
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 220px;
    padding: 34px 0;
    border-radius: 5px 5px 0 0;
    background: #fff;
    z-index: 10;
    transition: bottom 0.4s linear;
  `,

  Backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  `,
};
