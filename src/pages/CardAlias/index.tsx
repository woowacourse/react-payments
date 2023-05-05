import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import useInput from '../../hooks/useInput';
import { isValidCardAlias } from '../AddCard/domain/validation';
import { registerCardAlias } from '../../utils/card';
import './index.css';
import useRedirection from '../../hooks/useRedirection';
import useLocalStorage from '../../hooks/useLocalStorage';

const CardAliasPage = () => {
  const navigate = useNavigate();
  const { value, onChange } = useInput(isValidCardAlias);
  const { value: cardList, postLocalStorage } = useLocalStorage('cardList', '[]');
  const currentCard = cardList[cardList.length - 1];

  useRedirection(cardList.length === 0 || currentCard.alias);

  const onConfirmButtonClick = () => {
    postLocalStorage(registerCardAlias(cardList, value, currentCard.cardNumber));
    navigate('/');
  };

  return (
    <div className="card-alias-page">
      <h2>카드 등록이 완료되었습니다.</h2>
      <Card
        cardCompany={currentCard.cardCompany}
        cardFirstNumber={currentCard.cardNumber.first}
        cardSecondNumber={currentCard.cardNumber.second}
        cardThirdNumber={currentCard.cardNumber.third}
        cardFourthNumber={currentCard.cardNumber.fourth}
        cardOwner={currentCard.cardOwner}
        expireMonth={currentCard.expireMonth}
        expireYear={currentCard.expireYear}
      />
      <input value={value} onChange={onChange} placeholder="별칭을 입력해주세요." />
      <div className="card-alias-footer">
        <button onClick={onConfirmButtonClick}>확인</button>
      </div>
    </div>
  );
};

export default CardAliasPage;
