import InputText from "../components/InputText/InputText";
import NumberInput from "../components/Input/CardNumberInput";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardCvcNumberProps {
  handleChange: (value: string) => void;
  cvcNumbers: string;
  errorMessage: string;
  onComplete: () => void;
}

const CARD_CVC_NUMBER = {
  TITLE: "CVC 번호를",
  SUBTITLE: "CVC",
  PLACEHOLDER: "123",
} as const;

export default function CardCvcNumber({
  handleChange,
  cvcNumbers,
  errorMessage,
  onComplete,
}: CardCvcNumberProps) {
  const handleCardCvcNumberChange = (value: string) => {
    handleChange(value);

    if (value.length === 3) {
      onComplete();
    }
  };

  return (
    <section>
      <InputText inputValue={CARD_CVC_NUMBER.TITLE} variant="title" />
      <InputText inputValue={CARD_CVC_NUMBER.SUBTITLE} variant="subtitle" />
      <NumberInput
        onChange={handleCardCvcNumberChange}
        placeholder={CARD_CVC_NUMBER.PLACEHOLDER}
        value={cvcNumbers}
        errorMessage={errorMessage}
        type="text"
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
