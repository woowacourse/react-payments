import Input from "../../../../../../components/common/inputField/input/Input";
import InputField from "../../../../../../components/common/inputField/InputField";
import { CARD_INFO } from "../../constants/CardInfo";
import { usePasswordInput } from "./usePasswordInput";

function CardPasswordInput({
  onSuccessValidate,
}: {
  onSuccessValidate: (isValid: boolean) => void;
}) {
  const { feedbackMessage, onChangeHandler } =
    usePasswordInput(onSuccessValidate);

  return (
    <InputField
      title="비밀번호를 입력해 주세요."
      label="비밀번호 앞 2자리"
      feedbackMessage={feedbackMessage}
    >
      <Input
        type="password"
        name="cardPassword"
        maxLength={CARD_INFO.PASSWORD_LENGTH}
        onChange={onChangeHandler}
        isValid={feedbackMessage === ""}
      />
    </InputField>
  );
}

export default CardPasswordInput;
