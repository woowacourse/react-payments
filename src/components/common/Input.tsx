import {
  Children,
  cloneElement,
  InputHTMLAttributes,
  isValidElement,
  PropsWithChildren,
  useContext,
} from "react";
import styled from "styled-components";
import { InputContext } from "../../contexts/inputContext";
import { useCheckLength } from "../../hooks/useCheckLength";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: any;
  name: string;
  asChild?: boolean;
}

export function Input(props: PropsWithChildren<InputProps>) {
  const { name, inputRef, asChild = false, children, ...restProps } = props;
  const inputState = useContext(InputContext);
  const { handleChange } = inputState;
  const childrenList = Children.toArray(children);

  return asChild &&
    isValidElement<{ name: string; inputRef: any }>(childrenList[0]) ? (
    <>
      {cloneElement(childrenList[0], {
        name,
        inputRef,
        onChange: handleChange,
        ...restProps,
      })}
    </>
  ) : (
    <>
      <InputUnit
        onChange={handleChange}
        name={name}
        ref={(elem) => {
          inputRef.current[name] = elem;
        }}
        {...restProps}
      />
    </>
  );
}

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

const ErrorMessage = styled.strong`
  ${({ theme }) => theme.fonts.label};
  color: ${({ theme }) => theme.colors.error};
`;
