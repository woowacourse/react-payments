import styles from './style.module.css';
import { ChangeEvent, FormEvent, MouseEvent, memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardFormData, CardFormValidation } from '../../types';
import { PATH } from '../../constants';
import CardIssuer from './CardIssuer/CardIssuer';
import CardNumber from './CardNumber/CardNumber';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import CardPassword from './CardPassword/CardPassword';
import Button from '../common/Button/Button';
import { CardListContext } from '../../contexts/CardListContext';
import { useFormComplete } from '../../hooks/useFormComplete';

interface CardAddFormProps {
  cardInformation: CardFormData;
  cardInputValidation: CardFormValidation;
  onButtonInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  onSingleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMultipleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CardAddForm({
  cardInformation,
  cardInputValidation,
  onButtonInputChange,
  onSingleInputChange,
  onMultipleInputChange,
}: CardAddFormProps) {
  const { cardList, addCard } = useContext(CardListContext);
  const isFormComplete = useFormComplete(cardInputValidation);
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newId = (cardList[cardList.length - 1]?.id ?? 0) + 1;
    const newCard = {
      ...cardInformation,
      id: newId,
      cardName: `카드 ${cardList.length + 1}`,
    };
    addCard(newCard);
    navigate(`${PATH.REGISTER}/${newCard.id}`, { state: newCard });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <CardIssuer
        onInputChange={onButtonInputChange}
        value={cardInformation.issuer}
        isValid={cardInputValidation.issuer}
      />
      <CardNumber
        onInputChange={onSingleInputChange}
        value={cardInformation.cardNumber}
        isValid={cardInputValidation.cardNumber}
      />
      <CardExpirationDate
        onInputChange={onSingleInputChange}
        value={cardInformation.expirationDate}
        isValid={cardInputValidation.expirationDate}
      />
      <CardOwnerName onInputChange={onSingleInputChange} value={cardInformation.ownerName} />
      <CardSecurityCode
        onInputChange={onSingleInputChange}
        value={cardInformation.securityCode}
        isValid={cardInputValidation.securityCode}
      />
      <CardPassword
        onInputChange={onMultipleInputChange}
        values={cardInformation.password}
        isValid={cardInputValidation.password}
      />
      <Button className="submit-button" variant="primary" disabled={!isFormComplete}>
        다음
      </Button>
    </form>
  );
}

export default memo(CardAddForm);
