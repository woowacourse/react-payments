import { useCardForm } from '../../contexts/CardFormContext';
import CardBrandSelectView from './BrandSelectView';

const BrandSelect = () => {
  const { brand, handleBrandSelectChange, brandSelectRef } = useCardForm();

  return (
    <CardBrandSelectView
      brand={brand}
      handleSelectChange={handleBrandSelectChange}
      inputRef={brandSelectRef}
    />
  );
};

export default BrandSelect;
