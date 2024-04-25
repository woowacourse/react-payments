import { JSXElementConstructor, ReactElement } from "react";
import S from "./Select.styled";

type TypeOrArray<T> = T | T[];
interface SelectProp {
  children: TypeOrArray<ReactElement<any, JSXElementConstructor<HTMLOptionElement>>>;
}

const Select = ({ children }: SelectProp) => {
  return <S.Select>{children}</S.Select>;
};

export default Select;
