import NumberInput from "../Input/CardNumberInput";
import InputText from "../InputText/InputText";
import InputErrorMessage from "../Input/InputErrorMessage";
import styles from "./CardNumber.module.css";
import useCardNumberInputHandler from "../../hooks/useCardNumber/useCardNumberInputHandler";
import { CARD_NUMBER_KEYS } from "../../hooks/useCardNumber/useCardNumberInputHandler";
import { CardNumberKey } from "../../hooks/useCardNumber/useCardNumberInputHandler";

interface Props {
  handleChange: (value: string, key: CardNumberKey) => void;
  cardNumbers: Record<CardNumberKey, string>;
  errorMessage: Record<CardNumberKey, string>;
  onComplete: () => void;
}

const CARD_NUMBER = {
  TITLE: "결제할 카드 번호를 입력해 주세요.",
  DESCRIPTION: "본인 명의의 카드만 결제 가능합니다.",
  SUBTITLE: "카드 번호",
  MAX_LENGTH: 4,
} as const;

export default function CardNumber({
  handleChange,
  cardNumbers,
  errorMessage,
  onComplete,
}: Props) {
  const { inputRefs, handleCardNumberChange } = useCardNumberInputHandler(
    cardNumbers,
    handleChange,
    onComplete
  );

  return (
    <section className="card-company">
      <InputText inputValue={CARD_NUMBER.TITLE} variant="title" />
      <InputText inputValue={CARD_NUMBER.DESCRIPTION} variant="description" />
      <InputText inputValue={CARD_NUMBER.SUBTITLE} variant="subtitle" />
      <div className={styles["card-number__input"]}>
        {CARD_NUMBER_KEYS.map((key) => (
          <NumberInput
            key={key}
            ref={(el) => {
              inputRefs.current[key] = el;
            }}
            value={cardNumbers[key]}
            errorMessage={errorMessage[key]}
            onChange={(value) => handleCardNumberChange(value, key)}
            type="text"
          />
        ))}
      </div>
      <InputErrorMessage
        message={Object.values(errorMessage).find((msg) => msg) ?? ""}
      />
    </section>
  );
}
