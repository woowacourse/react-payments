import InputErrorMessage from "../components/Input/InputErrorMessage";
import NumberInput from "../components/Input/CardNumberInput";
import InputText from "../components/InputText/InputText";
import styles from "./CardExpirationDate.module.css";
import {
  USE_EXPIRATION_DATE,
  getExpirationErrorMessage,
} from "../hooks/useExpirationDate";
interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: string[];
  errorMessage: string[];
  onComplete: () => void;
}

const EXPIRATION_DATE = {
  TITLE: "카드 유효기간을 입력해 주세요.",
  DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  SUBTITLE: "유효기간",
  PLACEHOLDER_YEAR: "YY",
  PLACEHOLDER_MONTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
  onComplete,
}: CardExpirationDateProps) {
  const [monthValue, yearValue] = cardExpirationDate;
  const [monthErrorMessage, yearErrorMessage] = errorMessage;

  const checkNextStep = ({
    monthValue,
    yearValue,
    monthErrorMessage,
    yearErrorMessage,
  }: Record<string, string>) => {
    if (
      monthValue.length !== USE_EXPIRATION_DATE.MAX_LENGTH ||
      yearValue.length !== USE_EXPIRATION_DATE.MAX_LENGTH
    ) {
      return;
    }

    // console.log(monthErrorMessage, yearErrorMessage);
    if (monthErrorMessage !== "" || yearErrorMessage !== "") {
      return;
    }
    onComplete();
  };

  const handleCardExpirationDateChange = (value: string, index: number) => {
    handleChange(value, index);

    const updatedExpirationDate = [...cardExpirationDate];
    updatedExpirationDate[index] = value;

    const updatedErrorMessages = [...errorMessage];
    updatedErrorMessages[index] = getExpirationErrorMessage(value, index);

    checkNextStep({
      monthValue: updatedExpirationDate[0],
      yearValue: updatedExpirationDate[1],
      monthErrorMessage: updatedErrorMessages[0],
      yearErrorMessage: updatedErrorMessages[1],
    });
  };

  return (
    <section className="card-expiration-date">
      <InputText inputValue={EXPIRATION_DATE.TITLE} variant="title" />
      <InputText
        inputValue={EXPIRATION_DATE.DESCRIPTION}
        variant="description"
      />
      <InputText inputValue={EXPIRATION_DATE.SUBTITLE} variant="subtitle" />
      <div className={styles["card-number__input"]}>
        <NumberInput
          onChange={(value) => handleCardExpirationDateChange(value, 0)}
          placeholder={EXPIRATION_DATE.PLACEHOLDER_MONTH}
          value={monthValue}
          errorMessage={monthErrorMessage}
          type="text"
        />
        <NumberInput
          onChange={(value) => handleCardExpirationDateChange(value, 1)}
          placeholder={EXPIRATION_DATE.PLACEHOLDER_YEAR}
          value={yearValue}
          errorMessage={yearErrorMessage}
          type="text"
        />
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
