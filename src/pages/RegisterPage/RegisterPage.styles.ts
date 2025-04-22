import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 72px 40px;
  background: #ffffff;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const CardInfoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  button {
    margin-top: 8px;
  }
`;
