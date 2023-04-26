import { useContext } from 'react';
import { REGEX } from '../constants';
import { useInput } from './useInput';
import { CardPreviewInfoContext, passwordInput } from '../contexts/cardInfo';

export function useCardRegisterForm() {
  const previewInfo = useContext(CardPreviewInfoContext);

  const cardRegisterForm = {
    ...previewInfo,
    CODE: [
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CODE,
      },
    ],
    CARD_PASSWORD: [
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_PASSWORD,
      },
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_PASSWORD,
      },
    ],
  };

  return cardRegisterForm;
}
