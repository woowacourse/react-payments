import useCardCVCNumber from '../../hooks/useCardCVCNumber';
import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';

const CardCVCNumberInputSection = () => {
  const { cardCVCNumber, setCardCVCNumber, isError, errorMessage } =
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
          onChange={setCardCVCNumber}
          isError={isError.cvcNumber}
          placeholder="123"
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardCVCNumberInputSection;
