import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

function useCardNickNameForm(navigator, link) {
  const {
    inputtedInfo: { nickName },
  } = useContext(CardContext);

  const isValidForm = nickName ? nickName.isValid : false;

  const onNickNameSubmit = event => {
    event.preventDefault();

    isValidForm ? navigator(link) : alert('카드 이름을 입력해주세요.');
  };

  return { isValidForm, onNickNameSubmit };
}

export default useCardNickNameForm;
