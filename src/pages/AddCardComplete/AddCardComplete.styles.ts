import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 480px;
  height: 100vh;
  margin: 0 auto;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 72px 32px 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CompleteIconCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompleteCardInfoBox = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
`;

export const CompleteCardInfoText = styled.span`
  text-align: center;
  width: 100%;
  display: flex;
  font-size: 24px;
  line-height: 34px;
`;

export const CompleteCardButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
`;
