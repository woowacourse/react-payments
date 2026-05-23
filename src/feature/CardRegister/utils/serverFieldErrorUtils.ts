export type ServerFieldName = 'cardNumbers' | 'cardCompany' | 'cardExpiryDate' | 'cardCvc';

export type ServerFieldErrors = Record<ServerFieldName, string>;

export const createEmptyServerFieldErrors = (): ServerFieldErrors => ({
  cardNumbers: '',
  cardCompany: '',
  cardExpiryDate: '',
  cardCvc: '',
});

export const getServerFieldName = (code?: string): ServerFieldName | null => {
  if (code === 'INVALID_CARD_NUMBER') return 'cardNumbers';
  if (code === 'INVALID_CVC') return 'cardCvc';
  if (code === 'INVALID_EXPIRATION_DATE') return 'cardExpiryDate';
  if (code === 'INVALID_ISSUER_CODE') return 'cardCompany';

  return null;
};
