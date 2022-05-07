import styled from "styled-components";

const ModalButton = styled.button`
  width: 100px;
  height: 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.pageDefault};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03rem;
  color: ${({ theme }) => theme.colors.cardText};
  border: 1.5px solid
    ${({ theme, type }) =>
      type === "edit" ? theme.colors.scroll : theme.colors.errorMessage};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, type }) =>
      type === "edit" ? theme.colors.scroll : theme.colors.errorMessage};
    color: white;
  }
`;

export default ModalButton;
