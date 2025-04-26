import CardBrandSelectView from './CardBrandSelectView';

interface CardBrandSelectProps {
  cardBrand: string;
  handleCardBrandChange: (newCardBrand: string) => void;
}

const CardBrandSelect = ({
  cardBrand,
  handleCardBrandChange,
}: CardBrandSelectProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCardBrandChange(e.target.value);
  };

  return (
    <CardBrandSelectView
      cardBrandInfo={cardBrand}
      handleSelectChange={handleSelectChange}
    />
  );
};

export default CardBrandSelect;
