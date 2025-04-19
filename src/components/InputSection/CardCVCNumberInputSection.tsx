import useCardCVCNumber from "../../hooks/useCardCVCNumber";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputField from "../common/InputField/InputField";
import InputSection from "../common/InputSection/InputSection";

const CardCVCNumberInputSection = () => {
  const { cardCVCNumber, handleCardCVCNumberChange, isError, errorMessage } =
    useCardCVCNumber();

  return (
    <>
      <InputSection
        title="CVC 번호를 입력해주세요"
        description=""
        subtitle="CVC"
      >
        <InputField
          value={cardCVCNumber}
          onChange={handleCardCVCNumberChange}
          isError={isError.cvcNumber}
          placeholder="123"
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardCVCNumberInputSection;
