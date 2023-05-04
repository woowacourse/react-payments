import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import useInput from '../../hooks/useInput';
import { useCurrentCardContext } from '../../context/CurrentCardProvider';
import { useIsAccessAliasPageContext } from '../../context/IsAccessAliasPageProvider';
import { isValidCardAlias } from '../AddCard/domain/validation';
import './index.css';
import registerCardAlias from './registerCardAlias';

const CardAliasPage = () => {
  const navigate = useNavigate();
  const { currentCard } = useCurrentCardContext();
  const { value, onChange } = useInput(isValidCardAlias);
  const { setIsAccessAliasPage } = useIsAccessAliasPageContext();

  const onConfirmButtonClick = () => {
    registerCardAlias(value, currentCard.cardNumber);
    setIsAccessAliasPage(false);
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
