import styles from './AddCardForm.module.css';
import CardNumberInput from './CardNumberInput/CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from './CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput/CardPasswordInput';
import { useNavigate } from 'react-router-dom';
import type { CardInfo } from '../../types';
import FooterButton from '../common/FooterButton/FooterButton';
import type { FormInputValueType } from '../../types';

type AddCardFormProps = {
  updateCardNumber: (cardNumber: FormInputValueType) => void;
  updateExpirationDate: (expirationDate: FormInputValueType) => void;
  updateCardOwnerName: (cardOwnerName: FormInputValueType) => void;
  updateCardSecurityCode: (securityCode: FormInputValueType) => void;
  updateCardPassword: (password: FormInputValueType) => void;
  registerNewCard: (cardInfo: CardInfo) => void;
  isUnlocked: boolean;
};

const AddCardForm = ({
  updateCardNumber,
  updateExpirationDate,
  updateCardOwnerName,
  updateCardSecurityCode,
  updateCardPassword,
  registerNewCard,
  isUnlocked,
}: AddCardFormProps) => {
  const navigate = useNavigate();

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

    navigate('/');
  };

  return (
    <form onSubmit={handleCardInfo} className={styles.container}>
      <CardNumberInput updateCardNumber={updateCardNumber} />
      <ExpirationDateInput updateExpirationDate={updateExpirationDate} />
      <CardOwnerName updateCardOwnerName={updateCardOwnerName} />
      <CardSecurityCodeInput updateCardSecurityCode={updateCardSecurityCode} />
      <CardPasswordInput updateCardPassword={updateCardPassword} />
      <FooterButton title="다음" disabled={!isUnlocked} />
    </form>
  );
};

export default AddCardForm;
