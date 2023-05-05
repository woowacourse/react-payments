import {
  Attributes,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  useContext,
} from "react";
import styled from "styled-components";
import { InputContext } from "../../../contexts/inputContext";
import { getCustomElement } from "../../../utils/custumElement";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactElement[] | React.ReactElement;
  asChild?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const { name, asChild = false, children, ...restProps } = props;
  const inputState = useContext(InputContext);
  const { handleChange } = inputState;
  const customElement = getCustomElement<InputProps>(asChild, children, {
    name,
    asChild,
    onChange: handleChange,
    ref,
    ...restProps,
  });

  if (customElement) return customElement;

  return (
    <DefaultInputStyle
      name={name}
      ref={ref}
      onChange={handleChange}
      {...restProps}
    />
  );
});

const DefaultInputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;
