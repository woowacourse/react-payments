import { useId } from 'react';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';
import { useExpirationDate } from './useExpirationDate';

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string }) => void;
}

const ExpirationDateSection = ({ value, setValue }: Props) => {
  const expirationDateIds = useId();
  const { errors, monthRef, yearRef, handleOnChange, handleOnBlur, finalErrorMessage } = useExpirationDate({value, setValue});

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={finalErrorMessage}
      htmlFor={`${expirationDateIds}-month`}
    >
      <NumberInput
        id={`${expirationDateIds}-month`}
        value={value.month}
        onChange={(v) => handleOnChange(v, 'month')}
        onBlur={(v) => handleOnBlur(v, 'month')}
        placeholder="MM"
        isError={errors.month}
        maxLength={2}
        ref={monthRef}
      />
      <NumberInput
        id={`${expirationDateIds}-year`}
        value={value.year}
        onChange={(v) => handleOnChange(v, 'year')}
        onBlur={(v) => handleOnBlur(v, 'year')}
        placeholder="YY"
        isError={errors.year}
        maxLength={2}
        ref={yearRef}
      />
    </CommonSection>
  );
}

export default ExpirationDateSection;
