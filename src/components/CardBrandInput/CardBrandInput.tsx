import InputContainer from '../InputContainer/InputContainer';
import { CARD_BRANDS, OPTION_MESSAGE } from '../../constants/cardBrand';
import { INPUT_CONTAINER } from '../../constants/title';
import { useCardFormContext } from '../../context/CardFormContext';

const CardBrandInput = () => {
  const { brand, updateBrand } = useCardFormContext();

  // if (!inputsState.brand.isVisible) {
  //   return;
  // }
  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_BRAND.TITLE}
      subTitle={INPUT_CONTAINER.CARD_BRAND.SUBTITLE}
    >
      <select
        data-testid="card-brand-select"
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
