import styled from "styled-components";

export const ErrorCSS = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.red};
`;
