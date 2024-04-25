import { ChangeEvent, useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import filterEnglish from '../utils/filterEnglish';
import normalizeSpaces from '../utils/normalizeSpaces';
import { MIN_NAME_LENGTH } from '../constants/input';

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

  // TODO: 하나의 함수에서 키 입력까지 다루는게 맞는가? 지금 설계가 함수를 추가하기가 form훅때문에 어려움. 수정요망
  const handleOwnerNameChange = (e: ChangeEvent<HTMLInputElement>, isKeyEnter?: boolean) => {
    const upperCaseName = e.target.value.toUpperCase();
    const engName = filterEnglish(upperCaseName);
    const normalizedOwnerName = normalizeSpaces(engName);

    const errorMessage = getErrorMessage(upperCaseName, engName, normalizedOwnerName);

    setErrorMessage(errorMessage);
    setOwnerName(normalizedOwnerName);

    if (isKeyEnter) setIsValid(true);
  };

  return {
    value: ownerName,
    errorMessage,
    handleOwnerNameChange,
    isValid,
  };
};

export default useOwnerName;
