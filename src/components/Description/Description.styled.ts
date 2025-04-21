import styled from "styled-components";

export const DescriptionCSS = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  padding: 10px 0;
`;
