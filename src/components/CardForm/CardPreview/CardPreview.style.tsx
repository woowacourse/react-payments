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

export const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.999s;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div<{ $isCVCInput: boolean; $background: string }>`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 8px 12px;
  animation: ${(props) =>
    props.$background &&
    css`
      ${wave} 4s ease infinite
    `};
  background: ${(props) =>
    props.$background
      ? `linear-gradient(-60deg, ${props.$background}, ${props.$background}90, ${props.$background}, ${props.$background}90)`
      : ({ theme }) => theme.color.primary.main};
  background-size: 400% 400%;
  transform: ${(props) => (props.$isCVCInput ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const CardBack = styled.div<{ $isCVCInput: boolean }>`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #d5d5d5;
  transform: ${(props) => (props.$isCVCInput ? 'rotateY(0deg)' : 'rotateY(180deg)')};
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
  background: repeating-linear-gradient(45deg, #cbba64, #cbba64 10px, #cbba6480 10px, #cbba6480 20px);
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
