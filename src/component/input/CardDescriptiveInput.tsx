import Description from '../Description';
import CardLabeledInput from './CardLabeledInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import { FormSectionContainer } from '../../styles/FormSectionStyle';

interface ValueProps {
  [key: string]: string | string;
}

interface IsErrorProps {
  [key: string]: boolean;
}

interface DescriptionTextProps {
  headText: string;
  detailText: string;
}

interface CardDescriptiveInputProps {
  config: CardInputConfig;
  descriptionText: DescriptionTextProps;
  value: ValueProps;
  errorMessage: string;
  isErrors: IsErrorProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const CardDescriptiveInput = ({
  config,
  descriptionText,
  value,
  errorMessage,
  isErrors,
  handleCardInput,
}: CardDescriptiveInputProps) => {
  return (
    <FormSectionContainer>
      <Description headText={descriptionText.headText} detailText={descriptionText.detailText} />
      <CardLabeledInput
        config={config}
        value={value}
        errorMessage={errorMessage}
        handleCardInput={handleCardInput}
        isErrors={isErrors}
      />
    </FormSectionContainer>
  );
};

export default CardDescriptiveInput;
