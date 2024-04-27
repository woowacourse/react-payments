import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_OWNER } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangeOwner() {
  const [owner, setOwner] = useState('');
  const [ownerValid, setOwnerValid] = useState({ isValid: true, isCompleted: false, errorMessage: '' });

  const handleChangeOwner = (value: string) => {
    const isValidOwner = validateOwner(value);
    setOwnerValid(isValidOwner);
    setOwner(value);
  };

  const handleBlurOwner = () => {
    const isCompleted = Validation.isNotEmpty(owner);
    setOwnerValid((prevState) => {
      return { ...prevState, isCompleted }
    });
  }

  return { owner, ownerValid, handleChangeOwner, handleBlurOwner };
}

function validateOwner(value: string) {
  if (!Validation.isEnglishWithSpace(value)) {
    return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_CHARACTER };
  }

  if (value.length > CARD_OWNER.MAX_LENGTH) {
    return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_OWNER_LENGTH };
  }

  return { isValid: true, isCompleted: false, errorMessage: '' };
}
