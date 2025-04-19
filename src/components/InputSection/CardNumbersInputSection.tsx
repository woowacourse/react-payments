import { CardNumbersOptions } from "../../types/CardNumbers";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";

const CardNumbersInputSection = ({
  cardNumbers,
  handleCardNumbersChange,
  isError,
  errorMessage,
}: CardNumbersOptions) => {
  return (
    <>
      <InputSection
        title="결제할 카드번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다"
        subtitle="카드번호"
      >
        <InputField
          value={cardNumbers.firstNumber}
          onChange={handleCardNumbersChange("firstNumber")}
          isError={isError.firstNumber}
          placeholder="1234"
        ></InputField>
        <InputField
          value={cardNumbers.secondNumber}
          onChange={handleCardNumbersChange("secondNumber")}
          isError={isError.secondNumber}
          placeholder="1234"
        ></InputField>
        <InputField
          value={cardNumbers.thirdNumber}
          onChange={handleCardNumbersChange("thirdNumber")}
          isError={isError.thirdNumber}
          placeholder="1234"
        ></InputField>
        <InputField
          value={cardNumbers.fourthNumber}
          onChange={handleCardNumbersChange("fourthNumber")}
          isError={isError.fourthNumber}
          placeholder="1234"
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardNumbersInputSection;
