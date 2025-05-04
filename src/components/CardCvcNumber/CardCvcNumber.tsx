import NumberInput from "../Input/CardNumberInput";
import InputErrorMessage from "../Input/InputErrorMessage";
import InputText from "../InputText/InputText";
import useCvcInputHandler from "../../hooks/useCvcNumber/useCvcInputHandler";

interface CardCvcNumberProps {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  onComplete: () => void;
}

const CARD_CVC_NUMBER = {
  TITLE: "CVC 번호를 입력해 주세요.",
  SUBTITLE: "CVC",
  PLACEHOLDER: "123",
} as const;

export default function CardCvcNumber({
  setCompleted,
  onComplete,
}: CardCvcNumberProps) {
  const { handleCardCvcNumberChange, numbers, error } = useCvcInputHandler(
    setCompleted,
    onComplete
  );

  return (
    <section>
      <InputText inputValue={CARD_CVC_NUMBER.TITLE} variant="title" />
      <InputText inputValue={CARD_CVC_NUMBER.SUBTITLE} variant="subtitle" />
      <NumberInput
        onChange={handleCardCvcNumberChange}
        placeholder={CARD_CVC_NUMBER.PLACEHOLDER}
        value={numbers}
        errorMessage={error}
        type="text"
      />
      <InputErrorMessage message={error} />
    </section>
  );
}
