import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  align-items: center;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  color: #04c09e;
  background: transparent;
  border: none;
  font-weight: bold;
`;

export { Container, Button };
