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
  onSingleInputFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMultipleInputFieldsChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCardInformationSubmit: () => void;
}

function CardAddForm({
  cardInformation,
  onSingleInputFieldChange,
  onMultipleInputFieldsChange,
  handleCardInformationSubmit,
}: CardAddFormProps) {
  const [cardInputValidation, handleValidationChange] = useCardValidator();
  const isFormComplete = useFormComplete(cardInputValidation);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && formRef.current[0] instanceof HTMLInputElement) {
      formRef.current[0].focus();
    }
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormComplete) return;

    handleCardInformationSubmit();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} tabIndex={0}>
      <CardNumber
        onInputChange={onSingleInputFieldChange}
        handleValidationChange={handleValidationChange}
        value={cardInformation.cardNumber}
      />
      <CardExpirationDate
        onInputChange={onSingleInputFieldChange}
        handleValidationChange={handleValidationChange}
        value={cardInformation.expirationDate}
      />
      <CardOwnerName onInputChange={onSingleInputFieldChange} value={cardInformation.ownerName} />
      <CardSecurityCode
        onInputChange={onSingleInputFieldChange}
        handleValidationChange={handleValidationChange}
        value={cardInformation.securityCode}
      />
      <CardPassword
        onInputChange={onMultipleInputFieldsChange}
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
