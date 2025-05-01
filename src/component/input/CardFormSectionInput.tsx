import Description from '../Description';
import CardInputGroup from './CardInputGroup';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';
import { FormSectionContainer } from '../../styles/FormSectionStyle';

interface ValueProps {
  [key: string]: string;
}

interface ErrorMessageProps {
  [key: string]: string;
}

interface DescriptionTextProps {
  headText: string;
  detailText: string;
}

interface CardFormSectionInputProps {
  config: CardInputConfig;
  descriptionText: DescriptionTextProps;
  value: ValueProps;
  errorMessages: ErrorMessageProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const CardFormSectionInput = ({
  config,
  descriptionText,
  value,
  errorMessages,
  handleCardInput,
}: CardFormSectionInputProps) => {
  return (
    <FormSectionContainer>
      <Description headText={descriptionText.headText} detailText={descriptionText.detailText} />
      <CardInputGroup config={config} value={value} errorMessages={errorMessages} handleCardInput={handleCardInput} />
    </FormSectionContainer>
  );
};

export default CardFormSectionInput;
