import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  background: #ecebf1;
  border-radius: 8px;
  margin-right: 8px;

  & > * {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  width: 45px;
  text-align: center;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ErrorTextWrapper = styled.p`
  height: 18px;
  font-size: 14px;
  color: red;
`;
