import CardCvc from '../cardInfo/CardCvc';
import CardNumber from '../cardInfo/CardNumber';
import CardExpiryDate from '../cardInfo/CardExpiryDate';
import CardPassword from '../cardInfo/CardPassword';
import CardIssuer from '../cardInfo/CardIssuer';
import Button from '../common/Button';

import type {
  CardStatus,
  CardExpiry,
  Cvc,
  CardIssuerType,
  Password,
} from '../../types/cardStausTypes';

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
  serverFieldErrors: {
    cvc: string;
  };
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
  serverFieldErrors,
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
          serverErrorMessage={serverFieldErrors.cvc}
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
