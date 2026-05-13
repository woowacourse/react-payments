import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getEXPNumberErrorMessage } from "../../utils/getEXPNumberErrorMessage";
import { useFieldErrors } from "../../hooks/useFieldErrors";

type EXPNumber = { mm: string; yy: string };
interface Props {
  setEXPNumber: (value: EXPNumber) => void;
  value: EXPNumber;
  onComplete: (isCompleted: boolean) => void;
}

export default function EXPInputWrapper({
  setEXPNumber,
  value,
  onComplete,
}: Props) {
  const { inputErrors, setError, errorMessage } = useFieldErrors(["mm", "yy"]);

  const handelOnChange = (expKey: string) => (newValue: string) => {
    setError(expKey as keyof EXPNumber)(null);
    const newEXPNumbers = { ...value, [expKey]: newValue };
    setEXPNumber(newEXPNumbers);
    onComplete(
      Object.values(newEXPNumbers).every((value) => value.length === 2) &&
        Object.values(inputErrors).every((err) => err === null),
    );

    if (expKey === "mm" && newValue.length === 2) {
      const result = getEXPNumberErrorMessage({ mm: newValue, yy: value.yy });
      if (result === null || result.key !== "mm") {
        if (value.yy === "") inputRefs.current["yy"]?.focus();
      } else setError("mm")(result?.message);
    }
  };

  const handleOnBlur =
    (expKey: string) => (e: React.FocusEvent<HTMLInputElement>) => {
      const result = getEXPNumberErrorMessage({
        ...value,
        [expKey]: e.target.value,
      });
      const message = result && result.key === expKey ? result.message : null;
      setError(expKey as keyof EXPNumber)(message);
    };

  return (
    <InputGroup errorMessage={errorMessage}>
      {Object.entries(value).map(([expKey, expValue]) => (
        <NumberInput
          key={`${expKey}-input`}
          value={expValue}
          onChange={handelOnChange(expKey)}
          placeholder={expKey === "mm" ? "MM" : "YY"}
          autoFocus={expKey === "mm"}
          hasError={inputErrors[expKey as keyof EXPNumber] !== null}
          maxLength={2}
          onError={setError(expKey as keyof EXPNumber)}
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
