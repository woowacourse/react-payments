import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import normalizeSpaces from '../../../utils/normalizeSpaces';
import filterEnglish from '../../../utils/filterEnglish';
import { ERROR_MESSAGES } from '../../../constants/errorMessages';
import { MAX_NAME_LENGTH, OWNER_NAME_PLACEHOLDER } from '../../../constants/input';

type CardOwnerNameInputField = {
  ownerName: string;
  setOwnerName: Dispatch<SetStateAction<string>>;
};

export default function CardOwnerNameInputField({ ownerName, setOwnerName }: CardOwnerNameInputField) {
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const upperCaseName = e.target.value.toUpperCase();
    const engName = filterEnglish(upperCaseName);
    const normalizedOwnerName = normalizeSpaces(engName);

    const errorMessage = getErrorMessage(upperCaseName, engName, normalizedOwnerName);

    setErrorMessage(errorMessage);
    setOwnerName(normalizedOwnerName);
  };

  const handleMissingName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setErrorMessage(ERROR_MESSAGES.MISSING_NAME);
      return;
    }

    setErrorMessage('');
  };

  return (
    <>
      <div className={styles.label}>소유자 이름</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          isError={errorMessage.length !== 0}
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={MAX_NAME_LENGTH} // 비자 21자, 마스터카드 26자!
          value={ownerName}
          onBlur={handleMissingName}
        />
      </div>
      {errorMessage !== '' && <div className={styles.error_message}>{errorMessage}</div>}
    </>
  );
}
