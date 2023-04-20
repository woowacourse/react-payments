import styled from 'styled-components';

export const PasswordInputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  span {
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  display: inline-block;
  border-radius: 10px;

  & > input:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
