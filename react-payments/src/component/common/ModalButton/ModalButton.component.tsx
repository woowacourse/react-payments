import styled from "styled-components";

const ModalButton = styled.button<{ styleType?: "edit" | "delete" }>`
  width: 120px;
  height: 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.pageDefault};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03rem;
  color: ${({ theme }) => theme.colors.cardText};
  border: 1.5px solid
    ${({ theme, styleType }) =>
      styleType === "edit"
        ? theme.colors.twitterBlue
        : theme.colors.errorMessage};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, styleType }) =>
      styleType === "edit"
        ? theme.colors.twitterBlue
        : theme.colors.errorMessage};
    color: white;
  }
`;

export default ModalButton;
