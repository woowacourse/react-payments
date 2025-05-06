import InputField from "../../../../../../components/common/inputField/InputField";
import Input from "../../../../../../components/common/inputField/input/Input";
import { CARD_INFO } from "../../constants/CardInfo";
import { useCardNumberInput } from "./useNumberInput";

interface CardNumberInputProps {
  handleCardNumbersChange: (cardNumbers: string[]) => void;
  onSuccessValidate: (isValid: boolean) => void;
  onSuccessNextInput: () => void;
}

function CardNumberInput({
  handleCardNumbersChange,
  onSuccessValidate,
  onSuccessNextInput,
}: CardNumberInputProps) {
  const { cardNumberInfo, inputRefs, onChangeHandler } = useCardNumberInput(
    onSuccessValidate,
    handleCardNumbersChange,
    onSuccessNextInput
  );

  return (
    <InputField
      feedbackMessage={cardNumberInfo.feedbackMessages.find((msg) => msg) || ""}
      title="결제할 카드 번호를 입력해주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      {cardNumberInfo.cardNumbers.map((number, i) => (
        <Input
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          key={i}
          type="tel"
          name={`cardNumber-${i}`}
          value={number}
          placeholder="1234"
          maxLength={CARD_INFO.NUMBER_LENGTH_PART}
          onChange={(e) => onChangeHandler(e, i)}
          isValid={cardNumberInfo.feedbackMessages[i] === ""}
          autoFocus={i === 0}
        />
      ))}
    </InputField>
  );
}

export default CardNumberInput;
