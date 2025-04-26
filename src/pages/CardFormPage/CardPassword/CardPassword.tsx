import styles from "./CardPassword.module.css";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";

interface CardPasswordProps {
  handleChange: (value: string) => void;
  handleStep: () => void;
  step: number;
  password: string;
  errorMessage: string;
}

const CARD_PASSWORD_LABEL = {
  TITLE: "비밀번호를 입력해주세요",
  DESCRIPTION: "앞의 2자리를 입력해주세요",
  SUBTITLE: "비밀번호 앞 2자리",
} as const;

export default function CardPassword({
  handleChange,
  handleStep,
  step,
  password,
  errorMessage,
}: CardPasswordProps) {
  const handleInputChange = (value: string) => {
    handleChange(value);
    if (canGoToNextStep(step, value, errorMessage)) {
      handleStep();
    }
  };

  return (
    <section className={styles["card-password"]}>
      <Text textType="title">{CARD_PASSWORD_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_PASSWORD_LABEL.DESCRIPTION}</Text>
      <Text textType="subtitle">{CARD_PASSWORD_LABEL.SUBTITLE}</Text>
      <Input
        onChange={handleInputChange}
        value={password}
        textType="password"
        placeholder=""
        errorMessage={errorMessage}
        autoFocus={true}
      />
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}

function canGoToNextStep(step: number, value: string, errorMessage: string) {
  return step === 4 && value.length === 2 && errorMessage === "";
}
