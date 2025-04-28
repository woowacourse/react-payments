import { useBrandContext } from '../../contexts/BrandContext';
import CardBrandSelectView from './BrandSelectView';

const BrandSelect = () => {
  const { brand, handleBrandChange, brandSelectRef } = useBrandContext();

  return (
    <CardBrandSelectView
      brand={brand}
      handleSelectChange={handleBrandChange}
      inputRef={brandSelectRef}
    />
  );
};

export default BrandSelect;
