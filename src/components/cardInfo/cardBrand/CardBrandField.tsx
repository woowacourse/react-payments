import { useState } from 'react';
import { Description, Field, Title } from '../CardInfo.styles';
import { Trigger, DropdownList, DropdownItem } from './CardBrandField.styles';

const CARD_BRANDS = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

interface Props {
  value: string;
  onChange: (brand: string) => void;
}

// 카드사를 선택할 수 있는 컴포넌트
export default function CardBrandField({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (brand: string) => {
    onChange(brand);
    setIsOpen(false);
  };

  return (
    <Field>
      <Title>카드사를 선택해 주세요</Title>
      <Description>현재 국내 카드사만 가능합니다</Description>
      <Trigger onClick={() => setIsOpen((prev) => !prev)}>
        <span>{value || '카드사를 선택해주세요'}</span>
        <span>{isOpen ? '∧' : '∨'}</span>
      </Trigger>
      {isOpen && (
        <DropdownList>
          {CARD_BRANDS.map((brand) => (
            <DropdownItem key={brand} onClick={() => handleSelect(brand)}>
              {brand}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Field>
  );
}
