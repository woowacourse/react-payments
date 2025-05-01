import FormField from '../FormField';
import CardSelect from './CardSelect';
import type { CardInputProps } from '../../types/CardInputTypes';
import type { CardSelectConfig } from '../../types/CardConfigTypes';

interface CardLabeledSelectProps {
  config: CardSelectConfig;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  value: string;
}

const CardLabeledSelect = ({ value, handleCardInput, config }: CardLabeledSelectProps) => {
  return (
    <FormField label={config.label} id={config.id} errorMessage="">
      <CardSelect config={config} handleCardInput={handleCardInput} value={value} />
    </FormField>
  );
};

export default CardLabeledSelect;
