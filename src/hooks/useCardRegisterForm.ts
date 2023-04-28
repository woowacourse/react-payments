import { useContext } from 'react';

import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';
import { InputInfo } from '../type/input';
import { checkInputValdiation } from '../utils/checkInputValidation';
import { cardRegisterValidator } from '../validation/cardRegister';

export function useCardRegisterForm() {
  const previewInfo = useContext(CardPreviewInfoContext);
  const { COMPANY, ...previewInfoWithForm } = previewInfo;

  const cardRegisterForm = {
    ...previewInfoWithForm,
    CODE: {
      first: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.code),
      },
    },
    CARD_PASSWORD: {
      first: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardPassword),
      },
      second: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardPassword),
      },
    },
  };

  const allInputs = [];

  for (const [_, cardInfos] of Object.entries(cardRegisterForm)) {
    const inputs = Object.values(cardInfos);
    allInputs.push(...inputs);
  }

  const { isRequiredInputValid, isOptionalInputValid } = checkInputValdiation(
    allInputs as InputInfo[]
  );
  return {
    cardRegisterForm,
    COMPANY,
    isRequiredInputValid,
    isOptionalInputValid,
  };
}
