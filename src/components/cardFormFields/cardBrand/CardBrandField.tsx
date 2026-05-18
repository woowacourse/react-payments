import { Description, Field, Title } from '../CardFormFields.styles';
import { Select } from './CardBrandField.styles';
import { useCardForm } from '../../useCardForm';
import { CARD_BRANDS } from '../../../constants/constants';

interface Props {
  field: ReturnType<typeof useCardForm>['cardBrand'];
}

// 카드사를 선택할 수 있는 컴포넌트
export default function CardBrandField({ field }: Props) {
  const { value: cardBrand, set: setCardBrand } = field;

  return (
    <Field>
      <Title>카드사를 선택해 주세요</Title>
      <Description>현재 국내 카드사만 가능합니다</Description>
      <Select value={cardBrand} onChange={(e) => setCardBrand(e.target.value)}>
        <option value="" disabled>
          카드사를 선택해주세요
        </option>
        {Object.entries(CARD_BRANDS).map(([brand, { label }]) => (
          <option key={brand} value={brand}>
            {label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
