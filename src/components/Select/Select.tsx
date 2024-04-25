import { JSXElementConstructor, ReactElement } from "react";
import S from "./Select.styled";

type TypeOrArray<T> = T | T[];
interface SelectProp extends React.HTMLProps<HTMLSelectElement> {
  children: TypeOrArray<ReactElement<any, JSXElementConstructor<HTMLOptionElement>>>;
}

const Select = ({ children, ...restProps }: SelectProp) => {
  return <S.Select {...restProps}>{children}</S.Select>;
};

export default Select;
