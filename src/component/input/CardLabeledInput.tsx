import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';

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
          />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
