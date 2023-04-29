import { useContext } from 'react';
import {
  CardInfoActionsContext,
  CardInfoValuesContext,
} from '../../components/cardInfoProvider';

export const useCardInfoValueContext = () => {
  const value = useContext(CardInfoValuesContext);

  return value;
};

export const useCardInfoActionContext = () => {
  const actions = useContext(CardInfoActionsContext);

  return actions;
};
