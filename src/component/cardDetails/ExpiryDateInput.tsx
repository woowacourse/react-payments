import React, { useState, useEffect } from 'react';
import Description from '../Description';
import InputGroup from '../InputGroup';
import Input from '../Input';

interface ExpiryDateInputProps {
  expiryValues: {
    MM: string;
    YY: string;
  };
  errorMessages: {
    MM: string;
    YY: string;
  };
  onExpiryDateChange: (field: 'MM' | 'YY', value: string) => void;
}

export const ExpiryDateInput: React.FC<ExpiryDateInputProps> = ({
  expiryValues,
  errorMessages,
  onExpiryDateChange,
}) => {
  const [localValues, setLocalValues] = useState(expiryValues);

  useEffect(() => {
    setLocalValues(expiryValues);
  }, [expiryValues]);

  const getErrorMessage = () => {
    return errorMessages.MM || errorMessages.YY || '';
  };

  const handleLocalChange = (field: 'MM' | 'YY', value: string) => {
    if (value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setLocalValues(prev => ({
      ...prev,
      [field]: value,
    }));

    onExpiryDateChange(field, value);
  };

  const expiryDateFields = [
    {
      key: 'MM' as const,
      placeholder: 'MM',
      maxLength: 2,
      value: localValues.MM,
      isError: !!errorMessages.MM,
    },
    {
      key: 'YY' as const,
      placeholder: 'YY',
      maxLength: 2,
      value: localValues.YY,
      isError: !!errorMessages.YY,
    },
  ];

  return (
    <>
      <Description
        headText="카드 유효기간을 입력해 주세요"
        detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputGroup label="유효기간" errorMessages={getErrorMessage()}>
        {expiryDateFields.map(
          ({ key, placeholder, maxLength, value, isError }) => (
            <Input
              key={key}
              maxLength={maxLength}
              placeholder={placeholder}
              value={value}
              onChange={value => handleLocalChange(key, value)}
              isError={isError}
              name={`expiry-${key}`}
            />
          ),
        )}
      </InputGroup>
    </>
  );
};
