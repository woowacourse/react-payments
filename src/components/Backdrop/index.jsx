import styled from 'styled-components';

export default function Backdrop() {
  return <Styled.Backdrop />;
}

const Styled = {
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
