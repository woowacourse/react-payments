import CardBrandSelectView from './BrandSelectView';

interface BrandSelectProps {
  brand: string;
  handleBrandChange: (newCardBrand: string) => void;
}

const BrandSelect = ({ brand, handleBrandChange }: BrandSelectProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleBrandChange(e.target.value);
  };

  return (
    <CardBrandSelectView
      brand={brand}
      handleSelectChange={handleSelectChange}
    />
  );
};

export default BrandSelect;
