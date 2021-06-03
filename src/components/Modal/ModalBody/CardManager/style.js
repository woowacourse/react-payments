import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  height: 70%;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

const DeleteButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #fd9daa;
  font-size: large;
  font-weight: 600;
  color: #333333;
  border: none;
  border-radius: 0.5rem;
  padding: 0;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #94dacd;
  font-size: large;
  font-weight: 600;
  color: #333333;
  border: none;
  border-radius: 0.5rem;
  padding: 0;
  cursor: pointer;
`;

export { Container, DeleteButton, UpdateButton };
