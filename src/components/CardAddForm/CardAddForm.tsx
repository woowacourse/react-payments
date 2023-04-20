import styles from './style.module.css';
import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { Card } from '../../types';
import CardNumber from './CardNumber/CardNumber';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import CardPassword from './CardPassword/CardPassword';
import Button from '../common/Button/Button';
import { useFormComplete } from '../../hooks/useFormComplete';
import { useCardValidator } from '../../hooks/useCardValidation';

interface CardAddFormProps {
  cardInformation: Card;
  onCardNumberChange: ({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => void;
  onOwnerNameChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  onExpirationDateChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  onSecurityCodeChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: ({ target: { value, dataset } }: ChangeEvent<HTMLInputElement>) => void;
  onCardInformationSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function CardAddForm({
  cardInformation,
  onCardNumberChange,
  onOwnerNameChange,
  onExpirationDateChange,
  onSecurityCodeChange,
  onPasswordChange,
  onCardInformationSubmit,
}: CardAddFormProps) {
  const [cardInputValidation, handleValidationChange] = useCardValidator();
  const isFormComplete = useFormComplete(cardInputValidation);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && formRef.current[0] instanceof HTMLInputElement) {
      formRef.current[0].focus();
    }
  }, []);

  return (
    <form ref={formRef} className={styles.form} onSubmit={onCardInformationSubmit} tabIndex={0}>
      <CardNumber
        onChange={onCardNumberChange}
        handleValidationChange={handleValidationChange}
        values={cardInformation.cardNumber}
      />
      <CardExpirationDate
        onChange={onExpirationDateChange}
        handleValidationChange={handleValidationChange}
        value={cardInformation.expirationDate}
      />
      <CardOwnerName onChange={onOwnerNameChange} value={cardInformation.ownerName} />
      <CardSecurityCode
        onChange={onSecurityCodeChange}
        handleValidationChange={handleValidationChange}
        value={cardInformation.securityCode}
      />
      <CardPassword
        onChange={onPasswordChange}
        handleValidationChange={handleValidationChange}
        values={cardInformation.password}
      />
      <Button id="submitButton" className={isFormComplete ? '' : 'hide'} primary>
        완료
      </Button>
    </form>
  );
}

export default CardAddForm;
