import { useState, useContext, useEffect } from 'react';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { noSpecialCharacters } from '../../constant/regularExpression';

function useNickNameInput() {
  const { inputtedInfoDispatch } = useContext(CardContext);
  const [nickName, setNickname] = useState('');
  const [validation, setValidation] = useState(false);

  const onNickNameChange = ({ target }) => {
    setNickname(target.value);
    setValidation(noSpecialCharacters.test(target.value));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.NICK_NAME,
      value: nickName,
      valid: validation,
    });
  }, [nickName, validation]);

  return {
    nickName,
    validation,
    onNickNameChange,
  };
}

export default useNickNameInput;
