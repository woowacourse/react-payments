import { useEffect, useState } from 'react';
import CardNumberInputsView from './CardNumberInputsView';
import { CardNumberInfo } from '../../types/models';
import { isNumeric, isValidSegment } from '../../utils/cardValidation';

interface CardNumberInputsProps {
  cardNumbers: string[];
  handleCardNumbersChange: (newCardNumbers: string[]) => void;
}

const CARD_NUMBERS_LENGTH = 4;

const CardNumberInputs = ({
  cardNumbers,
  handleCardNumbersChange,
}: CardNumberInputsProps) => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState<CardNumberInfo[]>(() =>
    cardNumbers.map((number) => ({
      number,
      isError: false,
      placeholder: '1234',
      numberSegmentLength: CARD_NUMBERS_LENGTH,
    }))
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const valid =
      isNumeric(value) && isValidSegment(value, CARD_NUMBERS_LENGTH);

    setCardNumbersInfo((prev) =>
      prev.map((info, i) =>
        i === index
          ? {
              ...info,
              number: valid ? value : info.number,
              isError: !valid,
            }
          : info
      )
    );
  };

  useEffect(() => {
    handleCardNumbersChange(cardNumbersInfo.map((info) => info.number));
  }, [cardNumbersInfo]);

  return (
    <CardNumberInputsView
      cardNumbersInfo={cardNumbersInfo}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardNumberInputs;
