import styled from 'styled-components';

export const SecurityCodeInputBox = styled.div`
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
  justify-content: center;
  background-color: #e5e5e5;
  border-radius: 10px;

  width: 25%;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
