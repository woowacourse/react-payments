import React, { useState } from 'react';
import InputContainer from '../InputContainer/InputContainer';

const CARD_BRANDS = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

type CardBrandInputProps = {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
};

const CardBrandInput = ({ brand, setBrand }: CardBrandInputProps) => {
  const updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  return (
    <InputContainer
      title="카드사를 선택해 주세요"
      subTitle="현재 국내 카드사만 가능합니다."
    >
      <select value={brand} onChange={updateBrand}>
        <option value="" disabled hidden>
          카드사를 선택해주세요.
        </option>
        {CARD_BRANDS.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};

export default CardBrandInput;
