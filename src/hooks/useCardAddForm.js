import { useContext } from 'react';
import { MESSAGE } from '../constant/message';
import { CardContext } from '../context/CardContext';
import { CARD_ACTION } from '../Reducer/CardReducer';

function useCardAddForm(navigator, link) {
  const { inputtedInfo, cardDispatch } = useContext(CardContext);

  const isValidForm = Object.keys(inputtedInfo)
    .map(key => inputtedInfo[key].isValid)
    .every(isValid => isValid);

  const onAddFormSubmit = event => {
    event.preventDefault();

    if (isValidForm) {
      cardDispatch({
        type: CARD_ACTION.ADD,
        value: inputtedInfo,
      });
      navigator(link);
      return;
    }

    alert(MESSAGE.DENY_SAVE);
  };

  return { isValidForm, onAddFormSubmit };
}

export default useCardAddForm;
