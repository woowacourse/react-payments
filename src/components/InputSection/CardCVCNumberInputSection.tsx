import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";

type CardCVCNumberInputSectionProps = {
  cardCVCNumber: string;
  handleCardCVCNumberChange: (value: string) => void;
  isError: {
    cvcNumber: boolean;
  };
  errorMessage: string;
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
  moveFocus: (index: number) => void;
};

const CardCVCNumberInputSection = ({
  cardCVCNumber,
  handleCardCVCNumberChange,
  isError,
  errorMessage,
  setRef,
  moveFocus,
}: CardCVCNumberInputSectionProps) => {

  return (
    <>
      <InputSection
        title="CVC 번호를 입력해주세요"
        description=""
        subtitle="CVC"
      >
        <InputField
          id={7}
          value={cardCVCNumber}
          onChange={(value) => {
            handleCardCVCNumberChange(value);
            if (cardCVCNumber.length === 3) moveFocus(7);
          }}
          isError={isError.cvcNumber}
          placeholder="123"
          setRef={setRef}
        />
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardCVCNumberInputSection;
