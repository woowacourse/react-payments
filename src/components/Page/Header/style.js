import styled from 'styled-components';

const Container = styled.div`
  width: 23.4rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  align-items: center;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  color: black;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  margin-left: 0.8rem;
  align-items: center;
  text-align: center;
`;

export { Container, Button, Title };
