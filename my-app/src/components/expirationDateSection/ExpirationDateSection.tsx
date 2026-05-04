import { useRef, useState } from 'react';
import { isInputValidate, isValidRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: {
    month: string;
    year: string;
  };
  setValue: (value: { month: string; year: string }) => void;
}

export default function ExpirationDateSection({ value, setValue }: Props) {
  const [errors, setErrors] = useState({ month: false, year: false });
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleOnChange(inputValue: string, type: 'month' | 'year') {
    if (!isInputValidate(inputValue, 2)) return;

    const newValue = { ...value, [type]: inputValue };
    setValue(newValue);

    if (type === 'month' && inputValue.length === 2) {
      inputRefs.current[1]?.focus();
    }
  }

  function handleOnBlur(inputValue: string, type: 'month' | 'year') {
    const newError = { ...errors };
    if (type === 'month') {
      const monthNum = Number(inputValue);
      if (!isValidRange(inputValue, 2) || monthNum < 1 || monthNum > 12) {
        newError.month = true;
      } else {
        newError.month = false;
      }
    } else {
      if (!isValidRange(inputValue, 2)) {
        newError.year = true;
      } else {
        newError.year = false;
      }
    }

    let monthErrMsg = '';
    let yearErrMsg = '';

    if (newError.month) {
      const targetMonthStr = type === 'month' ? inputValue : value.month;
      const targetMonthNum = Number(targetMonthStr);
      if (!isValidRange(targetMonthStr, 2)) {
        monthErrMsg = '월/연은 2자리수여야 합니다!';
      } else if (targetMonthNum < 1 || targetMonthNum > 12) {
        monthErrMsg = '월은 1월부터 12월 사이여야 합니다!';
      }
    }

    if (newError.year) {
      yearErrMsg = '월/연은 2자리수여야 합니다!';
    }

    let newErrorMessage = '';

    if (type === 'month') {
      newErrorMessage = monthErrMsg || yearErrMsg;
    } else {
      newErrorMessage = yearErrMsg || monthErrMsg;
    }

    setErrors(newError);
    setErrorMessage(newErrorMessage);
  }

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={errorMessage}
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
