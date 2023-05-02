import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 16px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  margin: 32px 0 48px 0;
  font-size: 14px;
`;

export const CardLabelWrapper = styled.div`
  height: 20px;
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#969696' : '#000')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ErrorTextWrapper = styled.p`
  margin-top: 12px;
  width: 100%;
  height: 18px;
  font-size: 14px;
  color: red;
  text-align: center;
`;
