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
        <Input placeholder={placeholder} maxLength={4} />
        <Input placeholder={placeholder} maxLength={4} />
        <Input placeholder={placeholder} maxLength={4} />
        <Input placeholder={placeholder} maxLength={4} />
      </>
    );
  },
  [INPUT_TYPE.expirationPeriod]: () => {
    const monthPlaceholder = "MM";
    const yearPlaceholder = "YY";
    return (
      <>
        <Input placeholder={monthPlaceholder} maxLength={2} />
        <Input placeholder={yearPlaceholder} maxLength={2} />
      </>
    );
  },
  [INPUT_TYPE.cvcNumber]: () => {
    const placeholder = "123";
    return <Input placeholder={placeholder} maxLength={3} />;
  },
};

function InputGroup({ type }: InputGroupProps) {
  return <InputGroupCSS>{typeVariants[type]()}</InputGroupCSS>;
}

export default InputGroup;
