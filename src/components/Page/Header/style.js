import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  align-items: start;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  color: black;
  background: transparent;
  border: none;
  font-weight: bold;
`;

const Title = styled.div`
  height: 100%;
  text-align: center;
`;

export { Container, Button, Title };
