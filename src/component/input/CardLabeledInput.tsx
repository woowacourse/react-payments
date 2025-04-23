import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { isErrorProps } from '../../types/isErrorTypes';
import type { ComponentProps } from 'react';

interface CardInputGroupProps extends ComponentProps<'input'> {
  id: string;
  label: string;
  InputKeys: (keyof CardInputProps)[];
  errorMessage: string;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  isError: isErrorProps;
}

const CardLabeledInput = ({
  id,
  label,
  InputKeys,
  errorMessage,
  handleCardInput,
  isError,
  ...restProps
}: CardInputGroupProps) => {
  return (
    <FormField label={label} errorMessage={errorMessage} id={id}>
      {InputKeys.map((key) => {
        return (
          <CardInput key={key} inputKey={key} isError={isError} handleCardInput={handleCardInput} {...restProps} />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
