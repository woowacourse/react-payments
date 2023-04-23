import styles from './style.module.css';
import { FormEvent, useEffect, useRef } from 'react';
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
  handleSingleInputFieldChange: (name: string, value: string) => void;
  handleMultipleInputFieldChange: (name: string, value: string, index: number) => void;
  handleCardInformationSubmit: () => void;
}

function CardAddForm({
  cardInformation,
  handleSingleInputFieldChange,
  handleMultipleInputFieldChange,
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
      <CardIssuer
        handleInputChange={handleSingleInputFieldChange}
        validateInput={handleValidationChange}
        value={cardInformation.issuer}
      />
      <CardNumber
        handleInputChange={handleSingleInputFieldChange}
        validateInput={handleValidationChange}
        value={cardInformation.cardNumber}
      />
      <CardExpirationDate
        handleInputChange={handleSingleInputFieldChange}
        validateInput={handleValidationChange}
        value={cardInformation.expirationDate}
      />
      <CardOwnerName
        handleInputChange={handleSingleInputFieldChange}
        value={cardInformation.ownerName}
      />
      <CardSecurityCode
        handleInputChange={handleSingleInputFieldChange}
        validateInput={handleValidationChange}
        value={cardInformation.securityCode}
      />
      <CardPassword
        handleInputChange={handleMultipleInputFieldChange}
        validateInput={handleValidationChange}
        values={cardInformation.password}
      />
      <Button className="submit-button" variant="primary" disabled={!isFormComplete}>
        완료
      </Button>
    </form>
  );
}

export default CardAddForm;
