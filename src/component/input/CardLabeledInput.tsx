import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import useFocus from '../../hook/useFocus';

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
  const { inputRefsObject, handleFocus } = useFocus(config.inputKeys);

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
