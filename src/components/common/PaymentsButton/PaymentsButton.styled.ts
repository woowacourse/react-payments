import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ size: ButtonSize }>`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 48px;
  border-radius: 24px;
  color: white;
  background-color: #333333;

  &:hover {
    background-color: #666666;
  }
`;

export const ButtonText = styled.p`
  height: 16px;
  position: relative;
  inset: 50%;
  transform: translate(-50%, -50%);
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;
