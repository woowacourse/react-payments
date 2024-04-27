import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${(props) => props.theme.colors.button};
  font-family: NotoSansKR, Regular;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 0;
  cursor: "pointer";
  transition: opacity 0.3s ease;

  &:hover {
    opacity: "0.6";
  }
`;
