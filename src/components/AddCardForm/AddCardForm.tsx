import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CardInfo } from '../../types';
import { CardInfoContext } from '../../CardInfoProvider';
import { cardSelectButtonInfos } from '../../pages/cardImages';
import styles from './AddCardForm.module.css';
import CardSwitchButton from './CardSwitchButton/CardSwitchButton';
import CardNumberInput from './CardNumberInput/CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from './CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput/CardPasswordInput';
import FooterButton from '../common/FooterButton/FooterButton';
import CardSelectButtonPack from '../CardSelectButtonPack/CardSelectButtonPack';

type AddCardFormProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const AddCardForm = ({ registerNewCard }: AddCardFormProps) => {
  const navigate = useNavigate();
  const { cardNumber, cardOwnerName, cardPassword, cardSecurityCode, cardExpirationDate } = useContext(CardInfoContext);

  const isNextButtonUnlocked = [cardNumber, cardOwnerName, cardPassword, cardSecurityCode, cardExpirationDate].every(
    currentInputValue => currentInputValue.isValid
  );

  const handleCardInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cardNumberInput = event.currentTarget.elements.namedItem('cardNumber');
    const expirationDateInput = event.currentTarget.elements.namedItem('expirationDate');
    const cardOwnerNameInput = event.currentTarget.elements.namedItem('cardOwnerName');

    if (
      !(
        cardNumberInput instanceof HTMLInputElement &&
        expirationDateInput instanceof HTMLInputElement &&
        cardOwnerNameInput instanceof HTMLInputElement
      )
    ) {
      alert('폼 전송에 실패했습니다.');
      return false;
    }

    const cardInfo: CardInfo = {
      cardNumber: cardNumberInput.value,
      cardExpirationDate: expirationDateInput.value,
      cardOwnerName: cardOwnerNameInput.value,
    };

    registerNewCard(cardInfo);
    navigate('/card-name-decision');
  };

  return (
    <form onSubmit={handleCardInfo} className={styles.container}>
      <CardSwitchButton
        modalContent={<CardSelectButtonPack width="290px" cardSelectButtonInfos={cardSelectButtonInfos} />}
      />
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <FooterButton title="다음" disabled={!isNextButtonUnlocked} />
    </form>
  );
};

export default AddCardForm;
