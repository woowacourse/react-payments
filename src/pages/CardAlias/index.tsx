import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import { useCurrentCardContext } from '../../context/CurrentCardProvider';
import useInput from '../../hooks/useInput';
import { isValidCardAlias } from '../AddCard/domain/dispatcher';
import { useIsAccessAliasPageContext } from '../../context/IsAccessAliasPageProvider';

const CardAliasPage = () => {
  const navigate = useNavigate();
  const { currentCard } = useCurrentCardContext();
  const { value, onChange } = useInput(isValidCardAlias);
  const { setIsAccessAliasPage } = useIsAccessAliasPageContext();
  const onClick = () => {
    // 별칭 등록
    setIsAccessAliasPage(false);
    navigate('/');
  };
  return (
    <div>
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
      <input value={value} onChange={onChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default CardAliasPage;
