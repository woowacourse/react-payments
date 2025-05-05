import { useNavigate } from 'react-router';
import { DateType } from '../../../../../domain/card/CardExpirationDate/types';
import { SequenceType } from '../../../../../domain/card/CardNumber/types';
import { validateErrorMessages } from '../../../../../utils';
import { PAGE_ROUTES } from '../../../../../constants';
import { FormEvent } from 'react';
import { useCardFormContext } from '../../../context/useCardFormContext';

export const useCardFormSubmit = () => {
  const {
    cardNumber,
    cardBrandTypeState,
    cardNumberErrorMessage,
    cardExpirationDateErrorMessage,
    cardCVCNumberErrorMessage,
    cardPasswordErrorMessage,
  } = useCardFormContext();

  const navigate = useNavigate();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(PAGE_ROUTES.COMPLETE, {
      state: {
        cardNumber,
        cardBrandTypeState,
      },
    });
  };

  const isCardNumberValid = validateErrorMessages<SequenceType, Record<SequenceType, string>>(cardNumberErrorMessage);
  const isCardExpirationDateValid = validateErrorMessages<DateType, Record<DateType, string>>(
    cardExpirationDateErrorMessage,
  );
  const isCardCVCNumberValid = validateErrorMessages<string, string>(cardCVCNumberErrorMessage);
  const isCardPasswordValid = validateErrorMessages<string, string>(cardPasswordErrorMessage);
  const isFormValid = isCardNumberValid && isCardExpirationDateValid && isCardCVCNumberValid && isCardPasswordValid;

  return { isFormValid, handleFormSubmit };
};
