import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_OWNER } from '../constants/conditions';
import Validation from '../utils/Validation';

import useChangeInput from './useChangeInput';

export default function useChangeOwner() {
  const {
    value: owner,
    validationResult: ownerValid,
    handleChange: handleChangeOwner,
    handleSubmit: handleSubmitOwner,
  } = useChangeInput('', validateOwner, () => onSubmitOwner);

  const onSubmitOwner = () => {
    const isCompleted = Validation.isNotEmpty(owner);
    return { isValid: ownerValid.isValid, isCompleted, errorMessage: ownerValid.errorMessage };
  };

  return { owner, ownerValid, handleChangeOwner, handleSubmitOwner };
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
