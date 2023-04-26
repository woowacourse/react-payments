import { useContext } from 'react';
import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';
import { cardRegisterValidator } from '../validation/cardRegister';

export function useCardRegisterForm() {
  const previewInfo = useContext(CardPreviewInfoContext);

  const cardRegisterForm = {
    ...previewInfo,
    CODE: [
      {
        ...passwordInput,
        ...useInput(cardRegisterValidator.code),
      },
    ],
    CARD_PASSWORD: [
      {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardPassword),
      },
      {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardPassword),
      },
    ],
  };

  return cardRegisterForm;
}
