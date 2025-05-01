import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 72px 40px;
  background: ${theme.colors.white};
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.black};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  button {
    background-color: ${theme.colors.black};

    &:hover {
      background-color: ${theme.colors.darkGray};
    }

    &:active {
      background-color: ${theme.colors.black};
    }
  }
`;
