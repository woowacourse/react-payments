import FormField from '../FormField';
import CardInput from './CardInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import useFocus from '../../hook/useFocus';
import { getFirstErrorMessage } from '../../util/getFirstErrorMessage';

interface ValueProps {
  [key: string]: string;
}

interface ErrorMessagesProps {
  [key: string]: string;
}

interface CardInputGroupProps {
  config: CardInputConfig;
  errorMessages: ErrorMessagesProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  value: ValueProps;
}

const CardLabeledInput = ({ config, errorMessages, handleCardInput, value }: CardInputGroupProps) => {
  const { inputRefsObject, handleFocus } = useFocus(config.inputKeys);

  return (
    <FormField label={config.label} errorMessage={getFirstErrorMessage(Object.values(errorMessages))} id={config.id}>
      {config.inputKeys.map((key) => {
        return (
          <CardInput
            key={key}
            inputKey={key}
            handleCardInput={handleCardInput}
            value={value[key]}
            placeholder={config.placeholder}
            maxLength={config.maxLength}
            ref={inputRefsObject[key]}
            handleFocus={handleFocus}
            isError={errorMessages[key].length > 0}
          />
        );
      })}
    </FormField>
  );
};

export default CardLabeledInput;
