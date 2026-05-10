import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus } from '../../types';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  errorStatus: ErrorStatus[];
  onCompleted: () => void;
}

export default function CardNumbersField({ value, errorStatus, onCompleted }: CardNumbersFieldProps) {
  const activeErrorStatus = errorStatus.filter((error) => !!error)[0];
  const activeErrorIndex = errorStatus.findIndex((error) => error === activeErrorStatus);

  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!activeErrorStatus && value.every((v) => v.length === CARD_NUMBER_LENGTH_PER_INPUT)) {
      onCompletedEvent();
    }
  }, [activeErrorStatus, value]);

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    error: !!activeErrorStatus,
    errorMessage: ERROR_MESSAGES[activeErrorStatus] ?? '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>카드 번호</legend>
        <div css={inputGroupStyle}>
          {value.map((number, index) => (
            <Input
              key={index}
              name="cardNumbers"
              autoFocus={index === 0}
              variant={activeErrorIndex === index ? 'error' : 'default'}
              value={number}
              type="text"
              inputMode="numeric"
              placeholder="1234"
              maxLength={CARD_NUMBER_LENGTH_PER_INPUT}
            />
          ))}
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
