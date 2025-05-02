import CardNumbersView from './CardNumbersView';
import { useCardNumbers } from '../../hooks/useCardNumbers';
import { CardNumber } from '../../types';

export interface CardNumbersProps {
  cardNumbers: CardNumber;
  setCardNumbers: React.Dispatch<React.SetStateAction<CardNumber>>;
  onComplete?: () => void;
  setCardNumbersError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardNumbers = ({
  cardNumbers,
  setCardNumbers,
  onComplete,
  setCardNumbersError,
}: CardNumbersProps) => {
  const { errorMessage, errors, handleInputChange } = useCardNumbers({
    cardNumbers,
    setCardNumbers,
    setCardNumbersError,
  });

  return (
    <CardNumbersView
      cardNumbers={cardNumbers}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
      onComplete={onComplete}
    />
  );
};

export default CardNumbers;
