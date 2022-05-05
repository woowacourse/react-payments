import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
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

const LinkButton = ({ children, path, onClick, type }) => {
  return (
    <StyledLink to={path || "/"} onClick={onClick} type={type}>
      {children}
    </StyledLink>
  );
};

export default LinkButton;
