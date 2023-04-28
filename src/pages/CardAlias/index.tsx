import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import { useCurrentCardContext } from '../../context/CurrentCardProvider';
import useInput from '../../hooks/useInput';
import { isValidCardAlias } from '../AddCard/domain/dispatcher';
import { useIsAccessAliasPageContext } from '../../context/IsAccessAliasPageProvider';
import { CardNumber, CardType } from '../../type';
import { fetchLocalStorage, getSerialNumber } from '../../utils/applicationUtil';
import './index.css';

const registerCardAlias = (alias: string, cardNumber: CardNumber) => {
  const registerdCardNumber = getSerialNumber(cardNumber);
  const cardList = fetchLocalStorage('cardList', '[]');
  const currentCard = cardList.find(
    (card: CardType) => getSerialNumber(card.cardNumber) === registerdCardNumber
  );
  const addedAliasCard = { alias, ...currentCard };
  const restCardList = cardList.filter(
    (card: CardType) => getSerialNumber(card.cardNumber) !== registerdCardNumber
  );

  const newCardList = [...restCardList, addedAliasCard];

  localStorage.setItem('cardList', JSON.stringify(newCardList));
};

const CardAliasPage = () => {
  const navigate = useNavigate();
  const { currentCard } = useCurrentCardContext();
  const { value, onChange } = useInput(isValidCardAlias);
  const { setIsAccessAliasPage } = useIsAccessAliasPageContext();
  const onClick = () => {
    registerCardAlias(value, currentCard.cardNumber);
    setIsAccessAliasPage(false);
    navigate('/');
  };
  return (
    <div className="card-alias-page">
      <h2>카드 등록이 완료되었습니다.</h2>
      <Card
        cardType={currentCard.cardType}
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
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default CardAliasPage;
