import { useRef, useState } from 'react';
import { isIncompleteRange, isInputValidate } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string }) => void;
}

const getMonthError = (month: string): string => {
  if (month === '') return '';
  if (isIncompleteRange(month, 2)) return '월/연은 2자리수여야 합니다!';

  const monthNum = Number(month);
  if (monthNum < 1 || monthNum > 12) return '월은 1월부터 12월 사이여야 합니다!';

  return '';
}

const getYearError = (year: string): string => {
  if (year === '') return '';
  if (isIncompleteRange(year, 2)) return '월/연은 2자리수여야 합니다!';

  return '';
}

const ExpirationDateSection = ({ value, setValue }: Props) => {
  const [errors, setErrors] = useState({ month: false, year: false });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOnChange = (inputValue: string, type: 'month' | 'year') => {
    if (!isInputValidate(inputValue, 2)) return;

    const newValue = { ...value, [type]: inputValue };
    setValue(newValue);

    if (type === 'month' && inputValue.length === 2) {
      inputRefs.current[1]?.focus();
    }
  }

  const handleOnBlur = (inputValue: string, type: 'month' | 'year') => {
    const isError = type === 'month' 
      ? getMonthError(inputValue) !== '' 
      : getYearError(inputValue) !== '';

    setErrors(prev => ({ ...prev, [type]: isError }));
  }

  const monthErrMsg = errors.month ? getMonthError(value.month) : '';
  const yearErrMsg = errors.year ? getYearError(value.year) : '';
  const finalErrorMessage = monthErrMsg || yearErrMsg;

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={finalErrorMessage}
    >
      <NumberInput
        value={value.month}
        onChange={(v) => handleOnChange(v, 'month')}
        onBlur={(v) => handleOnBlur(v, 'month')}
        placeholder="MM"
        isError={errors.month}
        ref={(el) => {inputRefs.current[0] = el;}}
      />
      <NumberInput
        value={value.year}
        onChange={(v) => handleOnChange(v, 'year')}
        onBlur={(v) => handleOnBlur(v, 'year')}
        placeholder="YY"
        isError={errors.year}
        ref={(el) => {inputRefs.current[1] = el;}}
      />
    </CommonSection>
  );
}

export default ExpirationDateSection;
