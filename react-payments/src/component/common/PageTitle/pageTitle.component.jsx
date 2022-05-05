import styled, { css } from "styled-components";

const PageTitle = styled.h1`
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.pageTitle};
  ${({ type }) =>
    type === "header"
      ? css`
          font-size: 16px;
          line-height: 19px;
          font-weight: 500;
        `
      : css`
          font-size: 24px;
          line-height: 28px;
          font-weight: 400;
        `}
`;

export default PageTitle;
