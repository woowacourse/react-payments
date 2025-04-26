import { CardNumbersOptions } from "../../types/CardNumbers";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";

interface CardNumbersInputSectionProps extends CardNumbersOptions {
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
  moveFocus: (index: number) => void;
}

const CardNumbersInputSection = ({
  cardNumbers,
  handleCardNumbersChange,
  isError,
  errorMessage,
  setRef,
  moveFocus,
}: CardNumbersInputSectionProps) => {
  const handleChange = (field: string, index: number) => (value: string) => {
    handleCardNumbersChange(field)(value);
    if (cardNumbers[field].length === 4) {
      moveFocus(index);
    }
  };

  return (
    <>
      <InputSection
        title="결제할 카드번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다"
        subtitle="카드번호"
      >
        {[
          { field: "firstNumber", index: 0 },
          { field: "secondNumber", index: 1 },
          { field: "thirdNumber", index: 2 },
          { field: "fourthNumber", index: 3 },
        ].map(({ field, index }) => (
          <InputField
            key={index}
            id={index}
            value={cardNumbers[field]}
            onChange={handleChange(field, index)}
            isError={isError[field]}
            placeholder="1234"
            setRef={setRef}
          />
        ))}
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardNumbersInputSection;
