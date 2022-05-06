import styled from 'styled-components';

export default function Modal({ children }) {
  return <Styled.Modal>{children}</Styled.Modal>;
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
};
