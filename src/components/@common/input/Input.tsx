import {
  Children,
  cloneElement,
  InputHTMLAttributes,
  isValidElement,
  PropsWithChildren,
  RefAttributes,
  useContext,
} from "react";
import styled from "styled-components";
import { InputContext } from "../../../contexts/inputContext";
import { Ref } from "../../../type/ref";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    RefAttributes<HTMLInputElement> {
  inputRef: React.MutableRefObject<Ref>;
  name: string;
  asChild?: boolean;
}
export function Input(props: PropsWithChildren<InputProps>) {
  const { name, inputRef, asChild = false, children, ...restProps } = props;
  const inputState = useContext(InputContext);
  const { handleChange } = inputState;
  const childrenList = Children.toArray(children);

  return asChild &&
    isValidElement<{ name: string; inputRef: React.MutableRefObject<Ref> }>(
      childrenList[0]
    ) ? (
    <>
      {cloneElement(childrenList[0], {
        name,
        inputRef,
        onChange: handleChange,
        ...restProps,
      })}
    </>
  ) : (
    <InputUnit
      onChange={handleChange}
      name={name}
      ref={(elem) => {
        if (inputRef !== null && elem instanceof HTMLInputElement) {
          inputRef.current[name] = elem;
        }
      }}
      {...restProps}
    />
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
