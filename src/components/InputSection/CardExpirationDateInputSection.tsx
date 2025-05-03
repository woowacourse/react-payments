import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";
import { CardExpirationDateOptions } from "../../types/CardExpirationDateOptions";

type CardExpirationDateInputSectionProps = {
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
  moveFocus: (index: number) => void;
} & CardExpirationDateOptions;

const CardExpirationDateInputSection = ({
  cardExpirationDate,
  handleCardExpirationDateChange,
  isError,
  errorMessage,
  setRef,
  moveFocus,
}: CardExpirationDateInputSectionProps) => {
  return (
    <>
      <InputSection
        title="카드 유효기간을 입력해 주세요"
        description="월/년도(MM/YY) 순서대로 입력해 주세요"
        subtitle="유효기간"
      >
        <InputField
          id={5}
          value={cardExpirationDate.month}
          onChange={(value) => {
            handleCardExpirationDateChange("month")(value, 5, moveFocus);
            if (cardExpirationDate["month"].length === 2) moveFocus(5);
          }}
          isError={isError.month}
          placeholder="MM"
          setRef={setRef}
        />
        <InputField
          id={6}
          value={cardExpirationDate.year}
          onChange={(value) => {
            handleCardExpirationDateChange("year")(value, 6, moveFocus);
            if (cardExpirationDate["year"].length === 2) moveFocus(6);
          }}
          isError={isError.year}
          placeholder="YY"
          setRef={setRef}
        />
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardExpirationDateInputSection;
