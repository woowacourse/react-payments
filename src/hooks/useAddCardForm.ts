import { isAlphabet, isNumber, validateMonth, validateYear } from '../utils/validateInput';
import { InputCardInfo } from '../@types';
import useMoveFocus from './useMoveFocus';
import { useContext } from 'react';
import { CardInformationContext } from '../context/CardInformationContext';

const isCardExpirationDateKey = (key: string): key is Extract<ValidationKey, 'month' | 'year'> => {
  return Object.keys(validationMap).includes(key);
};

const isInputType = (type: string): type is Exclude<ValidationKey, 'month' | 'year'> => {
  return Object.keys(validationMap).includes(type);
};

const validationMap = {
  month: validateMonth,
  year: validateYear,
  number: isNumber,
  password: isNumber,
  text: isAlphabet,
};

type ValidationKey = keyof typeof validationMap;

const useAddCardForm = () => {
  const { insert, move } = useMoveFocus();
  const { CardInformationActions } = useContext(CardInformationContext);
  const { setCardCVC, setCardExpirationDate, setCardNumbers, setCardOwner, setCardPWD } =
    CardInformationActions;

  const inputActions = {
    cardNumbers: setCardNumbers,
    cardExpirationDate: setCardExpirationDate,
    cardOwner: setCardOwner,
    cardCVC: setCardCVC,
    cardPWD: setCardPWD,
  };

  const onChangeCardDateState =
    (infoType: InputCardInfo, type: string, key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isCardExpirationDateKey(key)) throw new Error('존재하지 않는 만료일 key입니다.');

      validationMap[key](e.target);

      onChangeState(infoType, type, key)(e);
    };

  const onChangeState =
    (infoType: InputCardInfo, type: string, key?: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isInputType(type)) throw new Error('존재하지 않는 InputType입니다.');

      if (!validationMap[type](e.target.value)) return;

      inputActions[infoType](e.target.value, key);

      if (e.target.value.length === 0) move(-1);
      if (e.target.value.length === e.target.maxLength) {
        move();
      }
    };

  return {
    onChangeCardDateState,
    onChangeState,
    insert,
  };
};

export default useAddCardForm;
