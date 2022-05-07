import { useState, useContext, useEffect } from 'react';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { noSpecialCharacters } from '../../constant/regularExpression';

function useCardNameInput() {
  const { inputtedInfoDispatch } = useContext(CardContext);
  const [cardName, setCardName] = useState('');
  const [validation, setValidation] = useState(false);

  const onCardNameChange = ({ target }) => {
    setCardName(target.value);
    setValidation(noSpecialCharacters.test(target.value));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CARD_NAME,
      value: cardName,
      valid: validation,
    });
  }, [cardName, validation]);

  return {
    cardName,
    validation,
    onCardNameChange,
  };
}

export default useCardNameInput;
