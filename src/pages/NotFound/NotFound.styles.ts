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

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Description = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #aaa;
`;
