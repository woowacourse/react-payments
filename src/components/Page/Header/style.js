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
  margin-right: 0.8rem;
  font-weight: bold;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export { Container, Button, Title };
