import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../types';
import type { ExpirationPeriodErrorStatus } from '../../types';
import { EXPIRATION_PERIOD_ERROR_MESSAGES, PERIOD_LENGTH_PER_INPUT } from '../../constants';
import { useEffect, useEffectEvent } from 'react';

interface ExpirationPeriodFieldProps {
  value: CardInfo['expirationPeriod'];
  errorStatus: ExpirationPeriodErrorStatus[];
  onCompleted: () => void;
}

export default function ExpirationPeriodField({ value, errorStatus, onCompleted }: ExpirationPeriodFieldProps) {
  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v) => v.length === PERIOD_LENGTH_PER_INPUT)) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

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
            name="expirationPeriod"
            value={value[0]}
            variant={activeErrorIndex === 0 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            maxLength={PERIOD_LENGTH_PER_INPUT}
          />
          <Input
            name="expirationPeriod"
            value={value[1]}
            variant={activeErrorIndex === 1 ? 'error' : 'default'}
            type="text"
            inputMode="numeric"
            placeholder="YY"
            maxLength={PERIOD_LENGTH_PER_INPUT}
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
