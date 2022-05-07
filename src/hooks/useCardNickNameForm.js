import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

function useCardNickNameForm(navigator, link) {
  const { inputtedInfo } = useContext(CardContext);
  console.log(inputtedInfo.nickName);
  const isValidForm = inputtedInfo.nickName.isValid;

  const onNickNameSubmit = event => {
    event.preventDefault();

    isValidForm ? navigator(link) : alert('카드 이름을 입력해주세요.');
  };

  return { isValidForm, onNickNameSubmit };
}

export default useCardNickNameForm;
