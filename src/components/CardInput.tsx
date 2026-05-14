import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardPassword from './CardPassword';

import type {
  CardStatus,
  CardExpiry,
  Cvc,
  CardIssuerType,
  Password,
} from '../types/cardStausTypes';
import CardIssuer from './CardIssuer';
import Button from './common/Button';

type CardInputProps = {
  cardStatus: CardStatus;
  onChangeCardNumber: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidateCardNumber: () => void;
  cardExpiry: CardExpiry;
  onChangeCardExpiryDate: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurMonth: () => void;
  onBlurYear: () => void;
  cardCvc: Cvc;
  onChangeCardCvc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurCardCvc: () => void;
  cardPassword: Password;
  onChangeCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurCardPassword: () => void;
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
  step: number;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
};

export default function CardInput({
  cardStatus,
  onChangeCardNumber,
  onValidateCardNumber,
  cardExpiry,
  onChangeCardExpiryDate,
  onBlurMonth,
  onBlurYear,
  cardCvc,
  onChangeCardCvc,
  onBlurCardCvc,
  cardPassword,
  onChangeCardPassword,
  onBlurCardPassword,
  cardIssuer,
  handleCardIssuer,
  step,
  handleSubmit,
  isFormValid,
}: CardInputProps) {
  return (
    <form onSubmit={handleSubmit} css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {step >= 4 && (
        <CardPassword
          cardPassword={cardPassword}
          onChangeCardPassword={onChangeCardPassword}
          onBlurCardPassword={onBlurCardPassword}
        />
      )}
      {step >= 3 && (
        <CardCvc
          cardCvc={cardCvc}
          onChangeCardCvc={onChangeCardCvc}
          onBlurCardCvc={onBlurCardCvc}
        />
      )}
      {step >= 2 && (
        <CardExpiryDate
          cardExpiry={cardExpiry}
          onChangeCardExpiryDate={onChangeCardExpiryDate}
          onBlurMonth={onBlurMonth}
          onBlurYear={onBlurYear}
        />
      )}
      {step >= 1 && <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />}
      <CardNumber
        cardStatus={cardStatus}
        onChangeCardNumber={onChangeCardNumber}
        onValidateCardNumber={onValidateCardNumber}
      />
      {isFormValid && <Button type="submit">확인</Button>}
    </form>
  );
}
