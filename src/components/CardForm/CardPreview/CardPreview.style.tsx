import styled, { css, keyframes } from 'styled-components';

const wave = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Card = styled.div<{ $face: string; $background: string }>`
  position: relative;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: ${(props) => props.$face === 'front' && '8px 12px'};
  animation: ${(props) =>
    props.$face === 'front' &&
    props.$background &&
    css`
      ${wave} 4s ease infinite
    `};
  background: ${(props) =>
    props.$background
      ? `linear-gradient(-60deg, ${props.$background}, ${props.$background}90, ${props.$background}, ${props.$background}90)`
      : ({ theme }) => theme.color.primary.main};
  background-size: 400% 400%;

  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ChipBox = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
`;

export const LogoBox = styled.div`
  width: 36px;
  height: 22px;
`;

export const CVCBox = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 24px;
  background: #cbba64;
  padding: 0 16px;

  p {
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-style: italic;
    letter-spacing: 0.15em;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 14px 5px;
`;

export const InfoBox = styled.p<{ $length?: number }>`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: ${(props) => props.$length && `calc(100% / ${props.$length})`};
  height: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  word-break: break-all;

  img {
    width: 4px;
    margin: 0px 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;
