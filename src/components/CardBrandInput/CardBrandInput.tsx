import React from 'react';
import InputContainer from '../InputContainer/InputContainer';

const CARD_BRANDS = {
  BC: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오뱅크',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kb: '국민카드',
} as const;

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
        {Object.entries(CARD_BRANDS).map(([key, value], index) => (
          <option key={index} value={key}>
            {value}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};

export default CardBrandInput;
