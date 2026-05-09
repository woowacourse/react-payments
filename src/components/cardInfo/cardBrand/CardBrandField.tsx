import { useState } from 'react';
import { Description, Field, Title } from '../CardInfo.styles';
import { Trigger, DropdownList, DropdownItem } from './CardBrandField.styles';
import { useCardForm } from '../../useCardForm';

const CARD_BRANDS: Record<string, string> = {
  BC: 'BC카드',
  SHINHAN: '신한카드',
  KAKAO: '카카오뱅크',
  HYUNDAI: '현대카드',
  WOORI: '우리카드',
  LOTTE: '롯데카드',
  HANA: '하나카드',
  KB: '국민카드',
};

interface Props {
  field: ReturnType<typeof useCardForm>['cardBrand'];
}

// 카드사를 선택할 수 있는 컴포넌트
export default function CardBrandField({ field }: Props) {
  const { value: cardBrand, set: setCardBrand } = field;
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (brand: string) => {
    setCardBrand(brand);
    setIsOpen(false);
  };

  return (
    <Field>
      <Title>카드사를 선택해 주세요</Title>
      <Description>현재 국내 카드사만 가능합니다</Description>
      <Trigger onClick={() => setIsOpen((prev) => !prev)}>
        <span>
          {cardBrand ? CARD_BRANDS[cardBrand] : '카드사를 선택해주세요'}
        </span>
        <span>{isOpen ? '∧' : '∨'}</span>
      </Trigger>
      {isOpen && (
        <DropdownList>
          {Object.entries(CARD_BRANDS).map(([brand, label]) => (
            <DropdownItem key={brand} onClick={() => handleSelect(brand)}>
              {label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Field>
  );
}
