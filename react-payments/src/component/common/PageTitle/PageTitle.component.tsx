import styled, { css } from "styled-components";

const PageTitle = styled.h1<{ type?: string }>`
  ${({ type }) =>
    type === "header"
      ? css`
          font-size: 16px;
          line-height: 19px;
          font-weight: 500;
        `
      : css`
          font-size: 24px;
          line-height: 25px;
          font-weight: 400;
          margin-bottom: 50px;
        `}
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.pageTitle};
`;

export default PageTitle;
