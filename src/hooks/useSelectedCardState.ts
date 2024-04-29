import { useEffect, useState } from 'react';
import theme from '../styles/theme';

export interface SelectedCardStateType {
  value: string;
  setValue: (value: string) => void;
  cardColor: string;
}

const useSelectedCardState = (defaultValue: string) => {
  const [selectedCard, setSelectedCard] = useState<string>(defaultValue);
  const [cardColor, setCardColor] = useState<string>(theme.color.darkGray);

  useEffect(() => {
    switch (selectedCard) {
      case 'BC카드':
        setCardColor(theme.color.magenta);
        break;
      case '신한카드':
        setCardColor(theme.color.blue);
        break;
      case '카카오뱅크':
        setCardColor(theme.color.yellow);
        break;
      case '현대카드':
        setCardColor(theme.color.black);
        break;
      case '우리카드':
        setCardColor(theme.color.brightBlue);
        break;
      case '롯데카드':
        setCardColor(theme.color.orange);
        break;
      case '하나카드':
        setCardColor(theme.color.teal);
        break;
      case '국민카드':
        setCardColor(theme.color.brownishGray);
        break;
      default:
        setCardColor(theme.color.darkGray);
    }
  }, [selectedCard]);

  return {
    selectedCardState: {
      value: selectedCard,
      setValue: (value: string) => {
        setSelectedCard(() => value);
      },
      cardColor,
    },
  };
};

export default useSelectedCardState;
