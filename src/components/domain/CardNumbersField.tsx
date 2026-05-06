import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo, ErrorStatus } from '../../types';
import { isNumber, sanitizeNumber } from '../../utils';
import { useState } from 'react';
import { CARD_NUMBER_LENGTH_PER_INPUT, ERROR_MESSAGES } from '../../constants';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  onUpdated: (value: CardInfo['cardNumbers']) => void;
}

type ErrorStatusList = [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus];

export default function CardNumbersField({ value, onUpdated }: CardNumbersFieldProps) {
  const [errorStatusList, setErrorStatusList] = useState<ErrorStatusList>([null, null, null, null]);
  const activeErrorStatus = errorStatusList.filter((errorStatus) => !!errorStatus)[0];
  const activeErrorIndex = errorStatusList.findIndex((errorStatus) => errorStatus === activeErrorStatus);

  const setErrorStatus = (index: number, status: ErrorStatus) => {
    setErrorStatusList((prev) => {
      const updated = [...prev] as ErrorStatusList;
      updated[index] = status;
      return updated;
    });
  };

  const updateFormValue = (index: number, inputValue: string) => {
    const newValue = [...value] as CardInfo['cardNumbers'];
    newValue[index] = sanitizeNumber(inputValue);
    onUpdated(newValue);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setErrorStatus(index, 'required');
      updateFormValue(index, inputValue);
      return;
    }

    if (!isNumber(inputValue)) {
      setErrorStatus(index, 'numberOnly');
      updateFormValue(index, inputValue);
      return;
    }

    setErrorStatus(index, null);
    updateFormValue(index, inputValue);
  };

  const handleBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setErrorStatus(index, 'required');
      return;
    }

    if (inputValue.length < CARD_NUMBER_LENGTH_PER_INPUT) {
      setErrorStatus(index, 'invalidLength');
    }
  };

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
              variant={activeErrorIndex === index ? 'error' : 'default'}
              value={number}
              type="text"
              inputMode="numeric"
              placeholder="1234"
              maxLength={CARD_NUMBER_LENGTH_PER_INPUT}
              onChange={(e) => handleChange(index, e)}
              onBlur={(e) => handleBlur(index, e)}
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
