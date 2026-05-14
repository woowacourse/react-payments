import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ExpirationPeriodErrorStatus } from '../../types';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, EXPIRATION_PERIOD_LENGTH } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { sanitizeNumber } from '../../utils';
import { validates } from '../../validates.ts';
import { useInputs } from '../../hooks/useInputs.ts';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  errorStatus: ExpirationPeriodErrorStatus[];
  setFieldValue: (field: 'expirationPeriod', value: string, index: number) => void;
  setFieldError: (field: 'expirationPeriod', error: ExpirationPeriodErrorStatus, index: number) => void;
  onCompleted: () => void;
}

export default function ExpirationPeriodField({
  value,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: ExpirationPeriodFieldProps) {
  const { registerInputRefs, moveToNext, handleKeyDown } = useInputs();

  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v, index) => v.length === EXPIRATION_PERIOD_LENGTH[index])) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const validate = (eventType: 'change' | 'blur', inputValue: string, index: number) => {
    if (validates['required'](inputValue)) {
      return 'required';
    }

    if (eventType === 'change' && validates['numberOnly'](inputValue)) {
      return 'numberOnly';
    }

    const isInvalidLength = validates['invalidLength'](inputValue, EXPIRATION_PERIOD_LENGTH[index]);

    if (index === 0 && !isInvalidLength && validates['invalidMonth'](inputValue)) {
      return 'invalidMonth';
    }

    if (index === 1 && !isInvalidLength && validates['invalidYear'](inputValue)) {
      return 'invalidYear';
    }

    if (eventType === 'blur' && isInvalidLength) {
      return 'invalidLength';
    }

    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const sanitizedValue = sanitizeNumber(inputValue);
    const error = validate('change', inputValue, index);

    setFieldError('expirationPeriod', error, index);
    setFieldValue('expirationPeriod', sanitizedValue, index);

    if (sanitizedValue.length === EXPIRATION_PERIOD_LENGTH[index]) {
      moveToNext(index);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const error = validate('blur', inputValue, index);

    setFieldError('expirationPeriod', error, index);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    error: !!activeErrorStatus,
    errorMessage: EXPIRATION_PERIOD_ERROR_MESSAGES[activeErrorStatus] ?? '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>유효기간</legend>
        <div css={inputGroupStyle}>
          <Input
            autoFocus
            ref={(el) => registerInputRefs(el, 0)}
            name="expirationPeriod"
            value={value[0]}
            onChange={(e) => handleChange(e, 0)}
            onBlur={(e) => handleBlur(e, 0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            variant={activeErrorIndex === 0 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            maxLength={EXPIRATION_PERIOD_LENGTH[0]}
          />
          <Input
            ref={(el) => registerInputRefs(el, 1)}
            name="expirationPeriod"
            value={value[1]}
            onChange={(e) => handleChange(e, 1)}
            onBlur={(e) => handleBlur(e, 1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            variant={activeErrorIndex === 1 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={EXPIRATION_PERIOD_LENGTH[1]}
          />
        </div>
      </fieldset>
    </FormField>
  );
}

const legendStyle = css`
  margin-bottom: 8px;
`;

const inputGroupStyle = css`
  display: flex;
  gap: 10px;
`;
