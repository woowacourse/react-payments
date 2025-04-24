import FormField from '../FormField';
import CardSelect from './CardSelect';
import { CARD_BRANDS } from '../../constants/cardConstants';
import type { CardInputProps } from '../../types/CardInputTypes';

interface CardBrandSelectsProps {
  id: string;
  label: string;
  options: string[];
  defaultMessage: string;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  cardInput: CardInputProps;
}

const CardBrandSelects = ({ cardInput, handleCardInput, ...restProps }: CardBrandSelectsProps) => {
  return (
    <FormField label="카드브랜드" id="card-brand" errorMessage="">
      <CardSelect
        {...restProps}
        defaultMessage="카드사를 선택해 주세요"
        options={CARD_BRANDS}
        handleCardInput={handleCardInput}
        cardInput={cardInput}
      />
    </FormField>
  );
};

export default CardBrandSelects;
