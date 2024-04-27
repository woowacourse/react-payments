import { Button } from "./../atoms/Button/style";
import styled from "styled-components";

export const FormButton = styled(Button)<{ disabled: boolean }>`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.input : props.theme.colors.button};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.disabled ? "default" : "0.6")};
  }
`;
