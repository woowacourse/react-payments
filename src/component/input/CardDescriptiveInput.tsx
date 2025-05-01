import Description from '../Description';
import CardLabeledInput from './CardLabeledInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import { FormSectionContainer } from '../../styles/FormSectionStyle';

interface ValueProps {
  [key: string]: string | string;
}

interface ErrorMessageProps {
  [key: keyof ErrorMessageProps]: string;
}

interface DescriptionTextProps {
  headText: string;
  detailText: string;
}

interface CardDescriptiveInputProps {
  config: CardInputConfig;
  descriptionText: DescriptionTextProps;
  value: ValueProps;
  errorMessages: ErrorMessageProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const CardDescriptiveInput = ({
  config,
  descriptionText,
  value,
  errorMessages,
  handleCardInput,
}: CardDescriptiveInputProps) => {
  return (
    <FormSectionContainer>
      <Description headText={descriptionText.headText} detailText={descriptionText.detailText} />
      <CardLabeledInput config={config} value={value} errorMessages={errorMessages} handleCardInput={handleCardInput} />
    </FormSectionContainer>
  );
};

export default CardDescriptiveInput;
