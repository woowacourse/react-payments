import { useContext } from 'react';

import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';
import { InputInfo } from '../type/input';
import { checkInputValdiation } from '../utils/checkInputValidation';
import { cardRegisterValidator } from '../validation/cardRegister';

export function useCardRegisterForm() {
  const previewInfo = useContext(CardPreviewInfoContext);
  const { company, ...previewInfoWithForm } = previewInfo;

  const cardRegisterForm = {
    ...previewInfoWithForm,
    code: {
      first: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.code),
      },
    },
    password: {
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
    company,
    isRequiredInputValid,
    isOptionalInputValid,
  };
}
