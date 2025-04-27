import { Dispatch, SetStateAction } from "react";
import Input from "../../../../../../components/common/inputField/input/Input";
import InputField from "../../../../../../components/common/inputField/InputField";
import { useExpirationDateInput } from "./useExpirationDateInput";

interface CardExpirationDateInputProps {
  handleExpirationDateChange: (expirationDate: string[]) => void;
  onSuccessValidate: (isValid: boolean) => void;
  onSuccessNextInput: () => void;
}
function CardExpirationDateInput({
  handleExpirationDateChange,
  onSuccessValidate,
  onSuccessNextInput,
}: CardExpirationDateInputProps) {
  const { expiration, onChangeHandler, inputRefs } = useExpirationDateInput(
    onSuccessValidate,
    onSuccessNextInput,
    handleExpirationDateChange
  );

  return (
    <InputField
      feedbackMessage={
        expiration.feedbackMessage.month || expiration.feedbackMessage.year
      }
      title="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {["MONTH", "YEAR"].map((field, i) => {
        const name = field.toLowerCase() as "month" | "year";
        const isValid = expiration.feedbackMessage[name] === "";

        return (
          <Input
            ref={(el) => {
              if (el) inputRefs.current[i] = el;
            }}
            key={name}
            type="tel"
            name={name}
            value={expiration[name]}
            isValid={isValid}
            placeholder={field === "MONTH" ? "MM" : "YY"}
            onChange={(e) => onChangeHandler(e, i)}
            maxLength={2}
          />
        );
      })}
    </InputField>
  );
}

export default CardExpirationDateInput;
