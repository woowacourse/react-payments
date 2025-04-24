import React from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { CARD_BRANDS } from '../../constants/cardBrand';

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
      <select
        className="card-brand-selector"
        value={brand}
        onChange={updateBrand}
      >
        <option value="" disabled hidden>
          카드사를 선택해주세요.
        </option>
        {Object.entries(CARD_BRANDS).map(([key, value], index) => (
          <option key={index} value={key}>
            {value}
          </option>
        ))}
      </select>
      <p className="helperText" data-testid="helper-text"></p>
    </InputContainer>
  );
};

export default CardBrandInput;
