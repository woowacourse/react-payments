import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import { useRef, useEffect } from 'react';

interface ValueProps {
  [key: string]: string;
}

interface isErrorsProps {
  [key: string]: boolean;
}

interface CardInputGroupProps {
  config: CardInputConfig;
  errorMessage: string;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  isErrors: isErrorsProps;
  value: ValueProps;
}

const CardLabeledInput = ({ config, errorMessage, handleCardInput, isErrors, value }: CardInputGroupProps) => {
  const inputRefsArray = config.inputKeys.map((key) => [key, useRef<HTMLInputElement>(null)]);
  const inputRefsObject = Object.fromEntries(inputRefsArray);

  const handleFocus = (key: keyof CardInputProps, maxLength: number) => {
    const currentIndex = config.inputKeys.indexOf(key);
    const nextKey = config.inputKeys[currentIndex + 1];

    if (!nextKey) return;
    if (inputRefsObject[key].current.value.length === maxLength) {
      inputRefsObject[nextKey].current?.focus();
    }
  };

  return (
    <FormField label={config.label} errorMessage={errorMessage} id={config.id}>
      {config.inputKeys.map((key) => {
        return (
          <CardInput
            key={key}
            inputKey={key}
            isError={isErrors[key]}
            handleCardInput={handleCardInput}
            value={value[key]}
            placeholder={config.placeholder}
            maxLength={config.maxLength}
            ref={inputRefsObject[key]}
            handleFocus={handleFocus}
          />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
