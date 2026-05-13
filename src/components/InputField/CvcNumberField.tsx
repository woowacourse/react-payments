import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import useCvcNumberField from "../../hooks/useCvcNumberField";

interface Props {
  onChange: (value: string) => void;
  value: string;
  onComplete: (isCompleted: boolean) => void;
}

export default function CvcNumberField({ onChange, value, onComplete }: Props) {
  const { inputError, setInputError, handleOnChange, handleOnBlur } =
    useCvcNumberField(onChange, value, onComplete);
  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        value={value}
        onChange={handleOnChange}
        placeholder="123"
        autoFocus
        hasError={inputError !== null}
        maxLength={3}
        onError={setInputError}
        onBlur={handleOnBlur}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
