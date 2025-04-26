import { useCardForm } from '../../contexts/CardFormContext';
import CardBrandSelectView from './BrandSelectView';

const BrandSelect = () => {
  const { brand, handleBrandSelectChange } = useCardForm();

  return (
    <CardBrandSelectView
      brand={brand}
      handleSelectChange={handleBrandSelectChange}
    />
  );
};

export default BrandSelect;
