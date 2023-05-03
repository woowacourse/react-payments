import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const QuestionButton = styled.button`
  width: 28px;
  height: 28px;
  margin-left: 12px;
  border: 1px solid #969696;
  color: #969696;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  background: #ecebf1;
  border-radius: 8px;
  width: 120px;

  & > * {
    width: 100%;
  }
`;

export const ToolTip = styled.p`
  width: 200px;
  height: 45px;
  margin-left: 12px;
  color: #969696;
  border-radius: 4px;
  padding: 8px;
  font-size: 13px;
  cursor: pointer;
`;

export const ErrorTextWrapper = styled.p`
  height: 18px;
  font-size: 14px;
  color: red;
`;
