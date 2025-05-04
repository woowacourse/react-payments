import { NextStepArgs } from '@/hooks/useStep';
import ErrorMessage from '@commonComponents/ErrorMessage/ErrorMessage';
import InputField from '@commonComponents/InputField/InputField';
import InputSection from '@commonComponents/InputSection/InputSection';
import { MouseEventHandler } from 'react';

const CARD_CVC_NUMBER_TEXT = {
  title: '카드 CVC 번호를 입력해 주세요',
  description: '카드 뒷면에 있는 3자리 숫자입니다',
  subtitle: 'CVC',
};

type CardCVCNumberInputSectionProps = {
  cardCVCNumber: string;
  setCardCVCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardCVCBlur: () => void;
  isError: { cvcNumber: boolean };
  errorMessage: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleMouseDown: MouseEventHandler<HTMLInputElement>;
  setNextStep: (args: NextStepArgs) => void;
};

const CardCVCNumberInputSection = ({
  cardCVCNumber,
  setCardCVCNumber,
  handleCardCVCBlur,
  isError,
  errorMessage,
  inputRef,
  handleMouseDown,
  setNextStep,
}: CardCVCNumberInputSectionProps) => {
  const handleCVCNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardCVCNumber(e);
    if (e.target.value.length === 3) {
      setNextStep({ time: 'once', key: 'cardCVCNumber' });
    }
  };

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
          onChange={handleCVCNumberInputChange}
          isError={isError.cvcNumber}
          placeholder="123"
          onBlur={handleCardCVCBlur}
          onMouseDown={handleMouseDown}
          ref={inputRef}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardCVCNumberInputSection;
