import type { SendingData } from '../api/cardApi';
import {
  ISSUER_CODES,
  type CardCompany,
} from '../components/cardCompanySection/CardCompanyConstants';
import type { FormState } from '../pages/CardAddPage/useCardFormState';

export const sendingDataFormatter = (formState: FormState): SendingData => ({
  number: formState.cardNumber.join(''),
  expirationDate: `${formState.expirationDate.month}/${formState.expirationDate.year}`,
  cvc: formState.cvc,
  issuerCode: ISSUER_CODES[formState.cardCompany as CardCompany],
});
