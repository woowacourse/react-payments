import styles from './style.module.css';
import { ChangeEvent, FormEvent, MouseEvent, useContext } from 'react';
import { CardFormData, CardFormValidation } from '../../types';
import CardIssuer from './CardIssuer/CardIssuer';
import CardNumber from './CardNumber/CardNumber';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import CardPassword from './CardPassword/CardPassword';
import Button from '../common/Button/Button';
import { useFormComplete } from '../../hooks/useFormComplete';

interface CardAddFormProps {
  cardInformation: CardFormData;
  cardValidation: CardFormValidation;
  onButtonInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  onSingleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMultipleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCardInformationSubmit: () => void;
}

function CardAddForm({
  cardInformation,
  cardValidation,
  onButtonInputChange,
  onSingleInputChange,
  onMultipleInputChange,
  handleCardInformationSubmit,
}: CardAddFormProps) {
  const isFormComplete = useFormComplete(cardValidation);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addCard(cardInformation);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <CardIssuer
        onInputChange={onButtonInputChange}
        value={cardInformation.issuer}
        isValid={cardValidation.issuer}
      />
      <CardNumber
        onInputChange={onSingleInputChange}
        value={cardInformation.cardNumber}
        isValid={cardValidation.cardNumber}
      />
      <CardExpirationDate
        onInputChange={onSingleInputChange}
        value={cardInformation.expirationDate}
        isValid={cardValidation.expirationDate}
      />
      <CardOwnerName onInputChange={onSingleInputChange} value={cardInformation.ownerName} />
      <CardSecurityCode
        onInputChange={onSingleInputChange}
        value={cardInformation.securityCode}
        isValid={cardValidation.securityCode}
      />
      <CardPassword
        onInputChange={onMultipleInputChange}
        values={cardInformation.password}
        isValid={cardValidation.password}
      />
      <Button className="submit-button" variant="primary" disabled={!isFormComplete}>
        다음
      </Button>
    </form>
  );
}

export default CardAddForm;
