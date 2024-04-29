import { ChangeEvent, useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import filterEnglish from '../utils/filterEnglish';
import normalizeSpaces from '../utils/normalizeSpaces';

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  const getErrorMessage = (name: string, engName: string, normalizedOwnerName: string) => {
    const isExcessiveWhiteSpace = engName.length > normalizedOwnerName.length;

    if (isExcessiveWhiteSpace && normalizedOwnerName.length !== 0) {
      return ERROR_MESSAGES.EXCESSIVE_WHITE_SPACE;
    }

    if (engName.length < name.length) {
      return ERROR_MESSAGES.NOT_ENG;
    }

    return '';
  };

  const handleOwnerNameChange = (e: ChangeEvent<HTMLInputElement>, isKeyEnter?: boolean) => {
    const upperCaseName = e.target.value.toUpperCase();
    const engName = filterEnglish(upperCaseName);
    const normalizedOwnerName = normalizeSpaces(engName);

    const errorMessage = getErrorMessage(upperCaseName, engName, normalizedOwnerName);

    setErrorMessage(errorMessage);
    setOwnerName(normalizedOwnerName);

    if (isKeyEnter) setIsValid(true);
  };

  const reset = () => {
    setOwnerName('');
  };

  return {
    value: ownerName,
    errorMessage,
    handleOwnerNameChange,
    isValid,
    reset,
  };
};

export default useOwnerName;
