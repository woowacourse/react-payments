import InputText from "../components/InputText/InputText";
import CardNumberInput from "../components/Input/CardNumberInput";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardPasswordProps {
  handleChange: (value: string) => void;
  password: string;
  errorMessage: string;
}

const CONSTANT_CARD_PASSWORD = {
  INPUT_TITLE: "비밀번호를",
  INPUT_SUBTITLE: "비밀번호 앞 2자리",
  PLACE_HOLDER: "",
} as const;

export default function CardPassword({
  handleChange,
  password,
  errorMessage,
}: CardPasswordProps) {
  return (
    <section>
      <InputText
        inputValue={CONSTANT_CARD_PASSWORD.INPUT_TITLE}
        variant="title"
      />
      <InputText
        inputValue={CONSTANT_CARD_PASSWORD.INPUT_SUBTITLE}
        variant="subtitle"
      />
      <CardNumberInput
        onChange={handleChange}
        placeholder={CONSTANT_CARD_PASSWORD.PLACE_HOLDER}
        value={password}
        errorMessage={errorMessage}
        type="password"
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
