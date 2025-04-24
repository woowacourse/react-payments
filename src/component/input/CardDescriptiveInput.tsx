import styled from 'styled-components';
import Description from '../Description';
import CardLabeledInput from './CardLabeledInput';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardInputConfig } from '../../types/CardConfigTypes';

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

export default CardDescriptiveInput;
