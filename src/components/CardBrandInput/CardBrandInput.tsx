import React from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { CARD_BRANDS, OPTION_MESSAGE } from '../../constants/cardBrand';
import { INPUT_CONTAINER } from '../../constants/title';
import { useConfirmButton } from '../../context/ConfirmButtonContext';
import { useCardFormContext } from '../../context/CardFormContext';

const CardBrandInput = () => {
  const { brand, setBrand } = useCardFormContext();
  const { updateInputState, inputsState } = useConfirmButton();

  const updateBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setBrand(value);
    const isValid = value !== '';
    updateInputState('brand', { isComplete: isValid });
    if (isValid) updateInputState('expiry', { isVisible: true });
  };

  if (!inputsState.brand.isVisible) {
    return;
  }
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
