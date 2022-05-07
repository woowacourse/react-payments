import { useState, useContext, useEffect } from 'react';
import { CardContext } from '../context/CardContext';
import { INPUT_ACTION } from '../Reducer/InputtedInfoReducer';

function useNickNameInput() {
  const { inputtedInfoDispatch } = useContext(CardContext);
  const [nickName, setNickname] = useState('');
  const [validation, setValidation] = useState(false);

  const onNickNameChange = ({ target }) => {
    setNickname(target.value);
    setValidation(/[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z]/.test(target.value));
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
