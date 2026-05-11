import { CardIssuerType } from '../components/Form/PaymentForm';
import { CARD_ISSUER_CONFIG } from '../constants';

export const getCardIssuerBackgroundColor = (value: CardIssuerType | null): string => {
  return (
    Object.values(CARD_ISSUER_CONFIG).find((issuer) => issuer.name === value)?.color ?? '#333333'
  );
};
