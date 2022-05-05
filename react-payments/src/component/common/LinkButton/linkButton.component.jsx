import styled, { css } from "styled-components";

const LinkButton = styled.div`
  cursor: pointer;
  ${({ type }) =>
    type === "submit"
      ? css`
          font-weight: 700;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.defaultText};
          align-self: flex-end;
        `
      : css`
          font-weight: 500;
          font-size: 22px;
          color: ${({ theme }) => theme.colors.header};
        `}
`;

export default LinkButton;
