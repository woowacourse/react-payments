import React from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { CARD_BRANDS, OPTION_MESSAGE } from '../../constants/cardBrand';
import { INPUT_CONTAINER } from '../../constants/title';
import { useConfirmButton } from '../../hooks/confirmButtonContext';

type CardBrandInputProps = {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
};

const CardBrandInput = ({ brand, setBrand }: CardBrandInputProps) => {
  const { checkInputsComplete } = useConfirmButton();

  const updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
    const isValid = e.target.value !== '';
    console.log(isValid, brand);
    checkInputsComplete('brand', isValid);
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_BRAND.TITLE}
      subTitle={INPUT_CONTAINER.CARD_BRAND.SUBTITLE}
    >
      <select
        className="card-brand-selector"
        value={brand}
        onChange={updateBrand}
      >
        <option value="" disabled hidden>
          {OPTION_MESSAGE.SELECT_CARD_BRAND}
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
