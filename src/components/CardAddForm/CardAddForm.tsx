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
import CardIssuer from './CardIssuer/CardIssuer';

interface CardAddFormProps {
  cardInformation: Card;
  onSingleInputFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSingleInputFieldChange: (name: string, value: string) => void;
  onMultipleInputFieldsChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCardInformationSubmit: () => void;
}

function CardAddForm({
  cardInformation,
  onSingleInputFieldChange,
  handleSingleInputFieldChange,
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
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <CardIssuer onInputChange={handleSingleInputFieldChange} value={cardInformation.issuer} />
      <CardNumber
        onInputChange={onSingleInputFieldChange}
        changeInputValidation={handleValidationChange}
        value={cardInformation.cardNumber}
      />
      <CardExpirationDate
        onInputChange={onSingleInputFieldChange}
        changeInputValidation={handleValidationChange}
        value={cardInformation.expirationDate}
      />
      <CardOwnerName onInputChange={onSingleInputFieldChange} value={cardInformation.ownerName} />
      <CardSecurityCode
        onInputChange={onSingleInputFieldChange}
        changeInputValidation={handleValidationChange}
        value={cardInformation.securityCode}
      />
      <CardPassword
        onInputChange={onMultipleInputFieldsChange}
        changeInputValidation={handleValidationChange}
        values={cardInformation.password}
      />
      <Button className="submit-button" variant="primary" disabled={!isFormComplete}>
        완료
      </Button>
    </form>
  );
}

export default CardAddForm;
