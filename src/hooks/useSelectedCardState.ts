import { useState } from 'react';

export interface SelectedCardStateType {
  value: string;
  setValue: (value: string) => void;
}

const useSelectedCardState = (defaultValue: string) => {
  const [selectedCard, setSelectedCard] = useState<string>(defaultValue);

  return {
    selectedCardState: {
      value: selectedCard,
      setValue: (value: string) => {
        setSelectedCard(() => value);
      },
    },
  };
};

export default useSelectedCardState;
