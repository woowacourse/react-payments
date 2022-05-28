import { useContext, useState, useEffect, ChangeEventHandler, ChangeEvent } from 'react';
import { CardContext, CardContextValue } from 'context/CardContext';
import { noSpecialCharacters } from 'constant/regularExpression';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { NO_CARD_NAME } from 'constant';
import CardNameInput from 'components/Modules/CardNameInput';

function CardNameInputContainer() {
  const { inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;
  const [cardName, setCardName] = useState('');
  const [validation, setValidation] = useState(false);

  const onCardNameChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setCardName(target.value);
    setValidation(noSpecialCharacters.test(target.value));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CARD_NAME,
      value: cardName || NO_CARD_NAME,
      valid: validation,
    });
  }, [cardName, validation]);

  return (
    <CardNameInput
      cardName={cardName}
      validation={validation}
      onCardNameChange={onCardNameChange}
    />
  );
}

export default CardNameInputContainer;
