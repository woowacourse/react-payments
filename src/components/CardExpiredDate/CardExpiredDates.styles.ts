import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 4px;
  width: 140px;

  & > * {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  width: 16px;
`;

export const ErrorTextWrapper = styled.p`
  height: 18px;
  font-size: 14px;
  color: red;
`;
