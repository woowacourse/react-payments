import { INPUT_TYPE } from "../../constants/constants";
import Input from "../Input/Input";
import { InputGroupCSS } from "./InputGroup.styled";

export interface InputGroupProps {
  type: keyof typeof INPUT_TYPE;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputGroup({ type, error, setError }: InputGroupProps) {
  const renderInputByType = () => {
    switch (type) {
      case INPUT_TYPE.cardNumbers:
        const carNumberPlaceholder = "1234";
        return (
          <>
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
            />
          </>
        );

      case INPUT_TYPE.expirationPeriod:
        const monthPlaceholder = "MM";
        const yearPlaceholder = "YY";
        return (
          <>
            <Input
              placeholder={monthPlaceholder}
              maxLength={2}
              isError={error}
            />
            <Input
              placeholder={yearPlaceholder}
              maxLength={2}
              isError={error}
            />
          </>
        );

      case INPUT_TYPE.cvcNumber:
        const cvcPlaceholder = "123";
        return (
          <Input placeholder={cvcPlaceholder} maxLength={3} isError={error} />
        );

      default:
        null;
    }
  };

  return <InputGroupCSS>{renderInputByType()}</InputGroupCSS>;
}

export default InputGroup;
