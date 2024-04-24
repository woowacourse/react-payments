import styled from 'styled-components';

export const FixedButtonContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: white;
  z-index: 10;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0 -4px 8px;
`;

export const FixedButton = styled.div`
  position: relative;
  inset: 50%;
  transform: translate(-50%, -50%);
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
