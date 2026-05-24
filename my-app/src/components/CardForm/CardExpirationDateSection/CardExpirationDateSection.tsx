import { useRef } from 'react';
import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import { EXPIRATION_DATE_FIELD_MAX_LENGTH } from '../../../constants/form';
import useExpirationDateValidation from '../../../hooks/useExpirationDateValidation';
import useFocusOnError from '../../../hooks/useFocusOnError';
import useInitialFocus from '../../../hooks/useInitialFocus';

interface Props {
  value: {
    month: string;
    year: string;
  };
  updateValue: (value: { month: string; year: string }) => void;
  serverErrorMessage?: string;
}

export default function CardExpirationDateSection({
  value,
  updateValue,
  serverErrorMessage,
}: Props) {
  const monthInputRef = useInitialFocus<HTMLInputElement>();
  const yearInputRef = useRef<HTMLInputElement>(null);

  useFocusOnError(monthInputRef, serverErrorMessage);

  const { errors, errorMessage, handleOnChange, handleOnBlur } =
    useExpirationDateValidation({ value, updateValue });

  function handleMonthChange(inputValue: string) {
    handleOnChange(inputValue, 'month');

    if (
      /^[0-9]*$/.test(inputValue) &&
      inputValue.length === EXPIRATION_DATE_FIELD_MAX_LENGTH
    ) {
      requestAnimationFrame(() => {
        yearInputRef.current?.focus();
      });
    }
  }

  return (
    <CommonSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={errorMessage || serverErrorMessage}
    >
      <NumberInput
        type="text"
        value={value.month}
        onChange={handleMonthChange}
        onBlur={() => handleOnBlur('month')}
        placeholder="MM"
        isError={errors.month || !!serverErrorMessage}
        inputRef={monthInputRef}
        maxLength={EXPIRATION_DATE_FIELD_MAX_LENGTH}
      />
      <NumberInput
        type="text"
        value={value.year}
        onChange={(v) => handleOnChange(v, 'year')}
        onBlur={() => handleOnBlur('year')}
        placeholder="YY"
        isError={errors.year || !!serverErrorMessage}
        inputRef={yearInputRef}
        maxLength={EXPIRATION_DATE_FIELD_MAX_LENGTH}
      />
    </CommonSection>
  );
}
