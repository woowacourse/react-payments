import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import useEXPNumberField, {
  type EXPNumber,
} from "../../hooks/useEXPNumberField";

interface Props {
  setEXPNumber: (value: EXPNumber) => void;
  value: EXPNumber;
  onComplete: (isCompleted: boolean) => void;
}

export default function EXPNumberField({
  setEXPNumber,
  value,
  onComplete,
}: Props) {
  const {
    inputRefs,
    inputErrors,
    setError,
    errorMessage,
    handleOnChange,
    handleOnBlur,
  } = useEXPNumberField(setEXPNumber, value, onComplete);
  return (
    <InputGroup errorMessage={errorMessage}>
      {Object.entries(value).map(([expKey, expValue]) => (
        <NumberInput
          key={`${expKey}-input`}
          value={expValue}
          onChange={handleOnChange(expKey)}
          placeholder={expKey === "mm" ? "MM" : "YY"}
          autoFocus={expKey === "mm"}
          hasError={inputErrors[expKey] !== null}
          maxLength={2}
          onError={setError(expKey)}
          onBlur={handleOnBlur(expKey)}
          ref={(el) => {
            if (expKey !== "mm") inputRefs.current[expKey] = el;
          }}
          style={{ width: "152px" }}
        />
      ))}
    </InputGroup>
  );
}
