import styled from 'styled-components';

export const ErrorLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const ErrorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    text-align: center;
    line-height: 1.7;
    color: ${({ theme }) => theme.color.primary.light};
  }
`;

export const ConfirmButton = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.primary.main};
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  cursor: pointer;
`;
