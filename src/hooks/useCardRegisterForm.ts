import { useContext } from 'react';
import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';
import { cardRegisterValidator } from '../validation/cardRegister';
import { checkInputValdiation } from '../utils/checkInputValidation';
import { InputInfo } from '../type/input';

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

  const allInputs = [];

  for (const [key, inputs] of Object.entries(cardRegisterForm)) {
    allInputs.push(...inputs);
  }

  const { isRequiredInputValid, isOptionalInputValid } = checkInputValdiation(
    allInputs as InputInfo[]
  );
  return { cardRegisterForm, isRequiredInputValid, isOptionalInputValid };
}
