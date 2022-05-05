import styled from "styled-components";

const PageTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.pageTitle};
`;

export default PageTitle;
