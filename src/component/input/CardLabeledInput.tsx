import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';

interface ValueProps {
  [key: string]: string;
}

interface isErrorsProps {
  [key: string]: boolean;
}

interface CardInputGroupProps {
  id: string;
  label: string;
  InputKeys: (keyof CardInputProps)[];
  errorMessage: string;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  isErrors: isErrorsProps;
  value: ValueProps;
}

const CardLabeledInput = ({
  id,
  label,
  InputKeys,
  errorMessage,
  handleCardInput,
  isErrors,
  value,
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
            value={value[key]}
            {...restProps}
          />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
