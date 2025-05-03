import React, { useState, useEffect } from 'react';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';

interface CardNumberInputProps {
  cardNumberValues: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  errorMessages: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  onCardNumberChange: (
    field: 'first' | 'second' | 'third' | 'fourth',
    value: string,
  ) => void;
}

export const CardNumberInput: React.FC<CardNumberInputProps> = ({
  cardNumberValues,
  errorMessages,
  onCardNumberChange,
}) => {
  const [localValues, setLocalValues] = useState(cardNumberValues);

  useEffect(() => {
    setLocalValues(cardNumberValues);
  }, [cardNumberValues]);

  const cardNumberFields = [
    { key: 'first', placeholder: '1234' },
    { key: 'second', placeholder: '1234' },
    { key: 'third', placeholder: '1234' },
    { key: 'fourth', placeholder: '1234' },
  ] as const;

  const handleLocalCardNumberChange = (
    fieldKey: keyof typeof localValues,
    value: string,
  ) => {
    if (value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setLocalValues(prev => ({
      ...prev,
      [fieldKey]: value,
    }));

    onCardNumberChange(fieldKey, value);
  };

  const getErrorMessage = () => {
    for (const field of cardNumberFields) {
      if (errorMessages[field.key]) {
        return errorMessages[field.key];
      }
    }
    return '';
  };

  return (
    <>
      <Description
        headText="결제할 카드 번호를 입력해 주세요."
        detailText="본인 명의의 카드만 결제 가능합니다."
      />
      <InputGroup label="카드 번호" errorMessages={getErrorMessage()}>
        {cardNumberFields.map(({ key, placeholder }) => (
          <Input
            key={key}
            maxLength={4}
            placeholder={placeholder}
            value={localValues[key]}
            onChange={value => handleLocalCardNumberChange(key, value)}
            isError={!!errorMessages[key]}
            onComplete={() => {}}
            name={`cardNumber-${key}`}
          />
        ))}
      </InputGroup>
    </>
  );
};
