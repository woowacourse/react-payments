import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  PropsWithChildren,
  useContext,
} from "react";
import styled from "styled-components";
import { InputContext } from "../../../contexts/inputContext";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  asChild?: boolean;
}
export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>(function Input(props, ref) {
  const { name, asChild = false, children, ...restProps } = props;
  const inputState = useContext(InputContext);
  const { handleChange } = inputState;
  const childrenList = Children.toArray(children);

  return asChild &&
    isValidElement<{ name: string; ref: ForwardedRef<HTMLInputElement> }>(
      childrenList[0]
    ) ? (
    <>
      {cloneElement(childrenList[0], {
        name,
        onChange: handleChange,
        ref,
        ...restProps,
      })}
    </>
  ) : (
    <InputUnit onChange={handleChange} name={name} ref={ref} {...restProps} />
  );
});

const InputUnit = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;
