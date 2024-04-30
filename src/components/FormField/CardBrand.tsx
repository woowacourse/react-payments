import React from 'react';
import FormField from './FormField';
import InputField from '../InputField/InputField';
import MESSAGE from '../../constants/Message';
import Select from '../Select/Select';

const { TITLE, CAPTION, PLACEHOLDER } = MESSAGE;

interface CardNumbersProps {
  cardBrandState: string | null;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { label: 'BC카드', value: 'BC카드' },
  { label: '신한카드', value: '신한카드' },
  { label: '카카오뱅크', value: '카카오뱅크' },
  { label: '현대카드', value: '현대카드' },
  { label: '우리카드', value: '우리카드' },
  { label: '롯데카드', value: '롯데카드' },
  { label: '하나카드', value: '하나카드' },
  { label: '국민카드', value: '국민카드' },
];

const CardBrand = ({ cardBrandState, onChange }: CardNumbersProps) => {
  return (
    <FormField title={TITLE.cardBrand} caption={CAPTION.cardBrand}>
      <InputField>
        <Select
          label="카드브랜드"
          value={cardBrandState}
          onChange={onChange}
          placeholder={PLACEHOLDER.cardBrand}
          options={options}
        />
      </InputField>
    </FormField>
  );
};

export default CardBrand;
