import InputErrorMessage from "../components/Input/InputErrorMessage";
import Input from "../components/Input/Input";
import InputDescription from "../components/Description/InputDescription";
import InputSubtitle from "../components/Subtitle/InputSubtitle";
import InputTitle from "../components/Title/InputTitle";
import styles from "./CardExpirationDate.module.css";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: string[];
  errorMessage: string[];
}

const CONSTANT_EXPIRATION_DATE = {
  INPUT_TITLE: "유효 기간을",
  INPUT_DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  INPUT_SUBTITLE: "유효기간",
  PLACE_HOLDER_YEAR: "YY",
  PLACE_HOLDER_MOMTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  return (
    <section className="card-expiration-date">
      <InputTitle inputValue={CONSTANT_EXPIRATION_DATE.INPUT_TITLE} />
      <InputDescription
        inputValue={CONSTANT_EXPIRATION_DATE.INPUT_DESCRIPTION}
      />
      <InputSubtitle inputValue={CONSTANT_EXPIRATION_DATE.INPUT_SUBTITLE} />
      <div className={styles["card-number__input"]}>
        <Input
          onChange={(value) => handleChange(value, 0)}
          placeholder={CONSTANT_EXPIRATION_DATE.PLACE_HOLDER_MOMTH}
          value={cardExpirationDate[0]}
          errorMessage={errorMessage[0]}
        />
        <Input
          onChange={(value) => handleChange(value, 1)}
          placeholder={CONSTANT_EXPIRATION_DATE.PLACE_HOLDER_YEAR}
          value={cardExpirationDate[1]}
          errorMessage={errorMessage[1]}
        />
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
