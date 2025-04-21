import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 480px;
  height: 100vh;
  margin: 0 auto;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 72px 32px;
  overflow-y: scroll;
`;

export const CardPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardInfoForm = styled.form`
  display: flex;
  gap: 32px;
  flex-direction: column;
  height: calc(100% - 265px);
  overflow-y: scroll;
`;
