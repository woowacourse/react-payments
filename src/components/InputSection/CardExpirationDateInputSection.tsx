import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";
import { CardExpirationDateOptions } from "../../types/CardExpirationDateOptions";

const CardExpirationDateInputSection = ({
  cardExpirationDate,
  handleCardExpirationDateChange,
  isError,
  errorMessage,
}: CardExpirationDateOptions) => {
  return (
    <>
      <InputSection
        title="카드 유효기간을 입력해 주세요"
        description="월/년도(MM/YY) 순서대로 입력해 주세요"
        subtitle="유효기간"
      >
        <InputField
          value={cardExpirationDate.month}
          onChange={handleCardExpirationDateChange("month")}
          isError={isError.month}
          placeholder="MM"
        ></InputField>
        <InputField
          value={cardExpirationDate.year}
          onChange={handleCardExpirationDateChange("year")}
          isError={isError.year}
          placeholder="YY"
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardExpirationDateInputSection;
