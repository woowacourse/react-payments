import InputText from "../components/InputText/InputText";
import NumberInput from "../components/Input/CardNumberInput";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardPasswordProps {
  handleChange: (value: string) => void;
  password: string;
  errorMessage: string;
  onComplete: () => void;
}

const CARD_PASSWORD = {
  TITLE: "비밀번호를 입력해 주세요.",
  DESCRIPTION: "앞의 2자리를 입력해주세요",
  SUBTITLE: "비밀번호 앞 2자리",
  PLACEHOLDER: "",
} as const;

export default function CardPassword({
  handleChange,
  password,
  errorMessage,
  onComplete,
}: CardPasswordProps) {
  const handleCardPasswordChange = (value: string) => {
    handleChange(value);

    if (value.length === 2) {
      onComplete();
      console.log("finished");
    }
  };

  return (
    <section>
      <InputText inputValue={CARD_PASSWORD.TITLE} variant="title" />
      <InputText inputValue={CARD_PASSWORD.DESCRIPTION} variant="description" />
      <InputText inputValue={CARD_PASSWORD.SUBTITLE} variant="subtitle" />
      <NumberInput
        onChange={handleCardPasswordChange}
        placeholder={CARD_PASSWORD.PLACEHOLDER}
        value={password}
        errorMessage={errorMessage}
        type="password"
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
