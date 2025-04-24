import FormField from '../FormField';
import CardSelect from './CardSelect';
import { cardBrands } from '../../constants/cardConstants';
import type { CardInputProps } from '../../types/CardInputTypes';

interface CardBrandSelectsProps {
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  cardInput: CardInputProps;
}

const CardBrandSelects = ({ cardInput, handleCardInput }: CardBrandSelectsProps) => {
  return (
    <FormField label="카드브랜드" id="card-brand" errorMessage="">
      <CardSelect
        defaultMessage="카드사를 선택해 주세요"
        options={cardBrands}
        handleCardInput={handleCardInput}
        cardInput={cardInput}
      />
    </FormField>
  );
};

export default CardBrandSelects;
