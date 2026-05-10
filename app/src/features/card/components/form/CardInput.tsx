import { forwardRef } from "react";
import styled from "@emotion/styled";

export const CardInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof StyledCardInput>
>((props, ref) => {
  return <StyledCardInput ref={ref} {...props} inputMode="numeric" />;
});

type ErrorFlag = {
  isError?: boolean;
};

const StyledCardInput = styled.input<ErrorFlag>`
  border: solid 1px ${(props) => (props.isError ? "#FF3D3D" : "#acacac")};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  -moz-appearance: textfield;
  &::placeholder {
    color: #acacac;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
