import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import usePasswordNumberField from "../../hooks/usePasswordNumberField";

interface Props {
  setPassWord: (value: string) => void;
  value: string;
}

export default function PasswordNumberField({ setPassWord, value }: Props) {
  const { inputError, setInputError, handleOnChange, handleOnBlur } =
    usePasswordNumberField(setPassWord, value);
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
