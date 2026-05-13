import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import usePassWordNumberField from "../../hooks/usePassWordNumberField";

interface Props {
  setPassWord: (value: string) => void;
  value: string;
}

export default function PassWordNumberField({ setPassWord, value }: Props) {
  const { inputError, setInputError, handleOnChange, handleOnBlur } =
    usePassWordNumberField(setPassWord, value);
  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        type="password"
        autoFocus
        value={value}
        onChange={handleOnChange}
        placeholder="123"
        hasError={inputError !== null}
        maxLength={2}
        onError={setInputError}
        onBlur={handleOnBlur}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
