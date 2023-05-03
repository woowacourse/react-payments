import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../../contexts/CardInfoProvider';
import { CardInfo } from '../../types';
import styles from './CardNameDecisionForm.module.css';
import FooterButton from '../common/FooterButton/FooterButton';
import UnderlinedInput from '../common/UnderlinedInput/UnderlinedInput';

const CardNameDecisionForm = () => {
  const navigate = useNavigate();
  const { cardIssuer, cardNumber, cardExpirationDate, cardOwnerName, cardSecurityCode, cardPassword, reset, saveCard } =
    useContext(CardInfoContext);

  const registerCardOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cardName = event.currentTarget.elements.namedItem('cardName');

    if (!(cardName instanceof HTMLInputElement)) {
      return false;
    }

    const newCard: CardInfo = {
      cardName: cardName.value,
      cardIssuer: cardIssuer,
      cardNumber: cardNumber.value,
      cardExpirationDate: cardExpirationDate.value,
      cardOwnerName: cardOwnerName.value,
      cardSecurityCode: cardSecurityCode.value,
      cardPassword: cardPassword.value,
    };

    saveCard(newCard);
    reset();
    navigate('/');
  };

  return (
    <form className={styles.container} onSubmit={registerCardOnSubmit}>
      <UnderlinedInput width="250px" name="cardName" placeholder="카드 이름을 입력해주세요" />
      <FooterButton title="확인" />
    </form>
  );
};

export default CardNameDecisionForm;
