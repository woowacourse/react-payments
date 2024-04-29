import styled from 'styled-components';

export const RegisterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const RegisterText = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #353c49;
  text-align: center;
  line-height: 36px;
`;

export const CompletedTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const CheckImageWrapper = styled.div`
  #check-mark {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: draw 1s forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
