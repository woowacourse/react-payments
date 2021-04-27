import styled from 'styled-components';

const Form = styled.form`
  width: 23.4rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  align-items: center;
`;

export { Form, InputContainer, ButtonContainer };
