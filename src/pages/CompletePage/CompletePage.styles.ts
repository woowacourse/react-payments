import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2ac1bc;
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 320px;
`;
