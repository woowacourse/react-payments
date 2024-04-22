import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_OWNER } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangeOwner() {
  const [owner, setOwner] = useState('');
  const [ownerValid, setOwnerValid] = useState({ isValid: true, errorMessage: '' });

  const handleChangeOwner = (value: string) => {
    const isValidOwner = validateOwner(value);
    setOwnerValid(isValidOwner);

    if (!isValidOwner.isValid && value !== '') return;

    setOwner(value);
  };

  return { owner, ownerValid, handleChangeOwner };
}

function validateOwner(value: string) {
  if (!Validation.isEnglishWithSpace(value)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_CHARACTER };
  }

  if (value.length > CARD_OWNER.MAX_LENGTH) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_LENGTH };
  }

  return { isValid: true, errorMessage: '' };
}
