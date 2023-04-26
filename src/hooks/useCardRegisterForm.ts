import { useContext } from 'react';
import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';
import { cardRegisterValidator } from '../validation/cardRegister';
import { checkInputValdiation } from '../utils/checkInputValidation';
import { InputInfo } from '../type/input';

export function useCardRegisterForm() {
  const previewInfo = useContext(CardPreviewInfoContext);

  const cardPasswordInput = {
    ...passwordInput,
    ...useInput(cardRegisterValidator.cardPassword),
  };

  const cardRegisterForm = {
    ...previewInfo,
    CODE: {
      first: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.code),
      },
    },
    CARD_PASSWORD: {
      first: cardPasswordInput,
      second: cardPasswordInput,
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
  return { cardRegisterForm, isRequiredInputValid, isOptionalInputValid };
}
