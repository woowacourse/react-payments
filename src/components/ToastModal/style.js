import styled from 'styled-components';

const ToastModalStyled = styled.div`
  position: fixed;
  left: 0;
  bottom: ${({ show }) => (show ? 0 : -100)}%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 220px;
  padding: 34px 0;
  border-radius: 5px 5px 0 0;
  background: var(--toast-background-color);
  z-index: 10;
  transition: bottom 0.4s linear;
`;

export default ToastModalStyled;
