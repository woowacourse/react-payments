import { createContext, Dispatch, SetStateAction } from 'react';

import { CardSide } from '../components/CardPreviewComponents/CardPreview';
import { UseCardInfoReducerReturn } from '../modules/useCardInfoReducer';

export interface CardFormContextType extends UseCardInfoReducerReturn {
  setCardSide: Dispatch<SetStateAction<CardSide>>;
}

const CardFormContext = createContext<CardFormContextType | null>(null);

export default CardFormContext;
