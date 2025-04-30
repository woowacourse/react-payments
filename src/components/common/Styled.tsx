import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.error};
  height: ${({ theme }) => theme.fontSizes.caption};
`;

const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBrandColors.default};
  color: ${({ theme }) => theme.colors.cardText};
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  text-align: center;
  border: none;
`;

export { Container, ErrorMessage, Button };
