import { useContext } from 'react';
import { MESSAGE } from '../constant/message';
import { CardContext } from '../context/CardContext';
import { CARD_ACTION } from '../Reducer/CardReducer';

function useCardAddForm(link) {
  const { inputtedInfo, cardDispatch } = useContext(CardContext);

  const checkFormValid = () => {
    return inputtedInfo.map(info => info.isValid).every(isValid => isValid);
  };

  const onAddFormSubmit = event => {
    event.preventDefault();

    if (checkFormValid()) {
      cardDispatch({
        type: CARD_ACTION.ADD,
        value: inputtedInfo,
      });
      return;
    }

    alert(MESSAGE.DENY_SAVE);
  };

  const isValidForm = Object.keys(inputtedInfo)
    .map(key => inputtedInfo[key].isValid)
    .every(isValid => isValid);

  return { isValidForm, onAddFormSubmit };
}

export default useCardAddForm;
