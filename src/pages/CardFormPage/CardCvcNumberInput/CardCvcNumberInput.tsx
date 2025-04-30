import styles from "./CardCvcNumberInput.module.css";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { CARD_STEP } from "../../../constants/CardStep";
import { CARD_INPUT_LIMIT } from "../../../constants/CardInputLimit";

interface CardCvcNumberProps {
  handleChange: (value: string) => void;
  handleStep: () => void;
  step: number;
  cvcNumbers: string;
  errorMessage: string;
}

const CARD_CVC_NUMBER_LABEL = {
  TITLE: "CVC 번호를 입력해주세요.",
  SUBTITLE: "CVC",
  PLACE_HOLDER: "123",
} as const;

export default function CardCvcNumberInput({
  handleChange,
  handleStep,
  step,
  cvcNumbers,
  errorMessage,
}: CardCvcNumberProps) {
  const handleInputChange = (value: string) => {
    handleChange(value);
    if (canGoToNextStep(step, value, errorMessage)) {
      handleStep();
    }
  };

  return (
    <section className={styles["card-cvc"]}>
      <Text textType="title">{CARD_CVC_NUMBER_LABEL.TITLE}</Text>
      <Text textType="subtitle">{CARD_CVC_NUMBER_LABEL.SUBTITLE}</Text>
      <Input
        onChange={handleInputChange}
        placeholder={CARD_CVC_NUMBER_LABEL.PLACE_HOLDER}
        value={cvcNumbers}
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
    currentStep === CARD_STEP.CVC &&
    value.length === CARD_INPUT_LIMIT.CVC_NUMBER_MAX_LENGTH &&
    errorMessage === ""
  );
}
