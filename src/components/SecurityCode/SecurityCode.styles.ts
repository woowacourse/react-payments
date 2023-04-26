import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const QuestionButton = styled.button`
  width: 27px;
  height: 27px;
  margin-left: 12px;
  border: 1px solid #969696;
  color: #969696;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ToolTip = styled.p`
  width: 212px;
  height: 30px;
  margin-left: 12px;
  color: #969696;
  background-color: #ecebf1;
  border-radius: 4px;
  padding: 0 4px;
  font-size: 12px;
  cursor: pointer;
`;
