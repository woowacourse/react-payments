import styled from 'styled-components';
import Description from './Description';
import CardLabeledInput from './input/CardLabeledInput';
import type { CardInputProps } from '../types/CardInputTypes';
import type { CardInputConfig, CardSelectConfig } from '../types/CardConfigTypes';

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

interface FormSectionProps {
  config: CardInputConfig;
  descriptionText: DescriptionTextProps;
  value: ValueProps;
  errorMessage: string;
  isErrors: IsErrorProps;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const FormSection = ({ config, descriptionText, value, errorMessage, isErrors, handleCardInput }: FormSectionProps) => {
  return (
    <>
      <Description headText={descriptionText.headText} detailText={descriptionText.detailText} />
      <CardLabeledInput
        config={config}
        value={value}
        errorMessage={errorMessage}
        handleCardInput={handleCardInput}
        isErrors={isErrors}
      />
    </>
  );
};

const Container = styled.div``;

export default FormSection;
