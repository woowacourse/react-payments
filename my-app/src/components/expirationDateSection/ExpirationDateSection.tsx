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
  const { errors, inputRefs, handleOnChange, handleOnBlur, finalErrorMessage } = useExpirationDate({value, setValue});

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
        onChange={(v) => handleOnChange(v, 0)}
        onBlur={(v) => handleOnBlur(v, 0)}
        placeholder="MM"
        isError={errors[0]}
        maxLength={2}
        ref={(el) => {inputRefs.current[0] = el;}}
      />
      <NumberInput
        id={`${expirationDateIds}-year`}
        value={value.year}
        onChange={(v) => handleOnChange(v, 1)}
        onBlur={(v) => handleOnBlur(v, 1)}
        placeholder="YY"
        isError={errors[1]}
        maxLength={2}
        ref={(el) => {inputRefs.current[1] = el;}}
      />
    </CommonSection>
  );
}

export default ExpirationDateSection;
