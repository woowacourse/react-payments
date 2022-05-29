import styled, { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
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

export interface LinkButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  type?: "submit" | "button" | undefined;
}

const LinkButton = ({ children, onClick, type }: LinkButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default LinkButton;
