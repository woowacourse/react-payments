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
  display: flex;
  border-radius: 10px;

  & > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const HiddenPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: inherit;
  width: 45px;

  div {
    height: 5px;
    width: 5px;

    background-color: black;

    border-radius: 50%;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
