import useCardCVCNumber from '../../hooks/useCardCVCNumber';
import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';

const CARD_CVC_NUMBER_TEXT = {
  title: '카드 CVC 번호를 입력해 주세요',
  description: '카드 뒷면에 있는 3자리 숫자입니다',
  subtitle: 'CVC',
};

const CardCVCNumberInputSection = () => {
  const {
    cardCVCNumber,
    setCardCVCNumber,
    handleCardCVCBlur,
    isError,
    errorMessage,
  } = useCardCVCNumber();

  return (
    <>
      <InputSection
        title={CARD_CVC_NUMBER_TEXT.title}
        description={CARD_CVC_NUMBER_TEXT.description}
        subtitle={CARD_CVC_NUMBER_TEXT.subtitle}
      >
        <InputField
          value={cardCVCNumber}
          name="cvcNumber"
          onChange={setCardCVCNumber}
          isError={isError.cvcNumber}
          placeholder="123"
          onBlur={handleCardCVCBlur}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardCVCNumberInputSection;
