import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 70%;

  & > *:not(:last-child) {
    margin-bottom: 28px;
  }
`;
