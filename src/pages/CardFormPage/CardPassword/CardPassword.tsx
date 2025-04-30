import styles from "./CardPassword.module.css";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { CARD_STEP } from "../../../constants/CardStep";
import { CARD_INPUT_LIMIT } from "../../../constants/CardInputLimit";

interface CardPasswordProps {
  handleChange: (value: string) => void;
  handleStep: () => void;
  step: number;
  password: string;
  errorMessage: string;
}

const CARD_PASSWORD_LABEL = {
  TITLE: "비밀번호를 입력해주세요",
  DESCRIPTION: `앞의 ${CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH}자리를 입력해주세요`,
  SUBTITLE: `비밀번호 앞 ${CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH}자리`,
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

function canGoToNextStep(
  currentStep: number,
  value: string,
  errorMessage: string
) {
  return (
    currentStep === CARD_STEP.PASSWORD &&
    value.length === CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH &&
    errorMessage === ""
  );
}
