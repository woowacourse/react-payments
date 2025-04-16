import { INPUT_TYPE } from "../../constants/constants";
import Input from "../Input/Input";
import { InputGroupCSS } from "./InputGroup.styled";

export interface InputGroupProps {
  type: keyof typeof INPUT_TYPE;
}

const typeVariants = {
  [INPUT_TYPE.cardNumber]: () => {
    const placeholder = "1234";
    return (
      <>
        <Input placeholder={placeholder} />
        <Input placeholder={placeholder} />
        <Input placeholder={placeholder} />
        <Input placeholder={placeholder} />
      </>
    );
  },
  [INPUT_TYPE.expirationPeriod]: () => {
    const monthPlaceholder = "MM";
    const yearPlaceholder = "YY";
    return (
      <>
        <Input placeholder={monthPlaceholder} />
        <Input placeholder={yearPlaceholder} />
      </>
    );
  },
  [INPUT_TYPE.cvcNumber]: () => {
    const placeholder = "123";
    return <Input placeholder={placeholder} />;
  },
};

function InputGroup({ type }: InputGroupProps) {
  return <InputGroupCSS>{typeVariants[type]()}</InputGroupCSS>;
}

export default InputGroup;
