import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { ComponentProps } from 'react';

interface isErrorsProps {
  [key: string]: boolean;
}

interface CardInputGroupProps extends ComponentProps<'input'> {
  id: string;
  label: string;
  InputKeys: (keyof CardInputProps)[];
  errorMessage: string;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  isErrors: isErrorsProps;
}

const CardLabeledInput = ({
  id,
  label,
  InputKeys,
  errorMessage,
  handleCardInput,
  isErrors,
  ...restProps
}: CardInputGroupProps) => {
  return (
    <FormField label={label} errorMessage={errorMessage} id={id}>
      {InputKeys.map((key) => {
        return (
          <CardInput
            key={key}
            inputKey={key}
            isError={isErrors[key]}
            handleCardInput={handleCardInput}
            {...restProps}
          />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
