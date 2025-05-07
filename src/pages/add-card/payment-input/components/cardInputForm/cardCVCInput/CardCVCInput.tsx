import Input from "../../../../../../components/common/inputField/input/Input";
import InputField from "../../../../../../components/common/inputField/InputField";
import { CARD_INFO } from "../../constants/CardInfo";
import { useCVCInput } from "./useCVCInput";

interface CardCVCInputProps {
  onSuccessValidate: (isValid: boolean) => void;
  onSuccessNextInput: () => void;
}

function CardCVCInput({
  onSuccessValidate,
  onSuccessNextInput,
}: CardCVCInputProps) {
  const { feedbackMessage, onChangeHandler } = useCVCInput(
    onSuccessValidate,
    onSuccessNextInput
  );

  return (
    <InputField
      title="CVC 번호를 입력해 주세요."
      label="CVC"
      feedbackMessage={feedbackMessage}
    >
      <Input
        autoFocus
        type="tel"
        name="cardCVC"
        placeholder="123"
        maxLength={CARD_INFO.CVC_LENGTH}
        onChange={onChangeHandler}
        isValid={feedbackMessage === ""}
      />
    </InputField>
  );
}

export default CardCVCInput;
