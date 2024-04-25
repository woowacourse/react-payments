import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH, OWNER_NAME_PLACEHOLDER } from '../../../constants/input';

type CardOwnerNameInputField = {
  ownerName: string;
  handleOwnerName: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
};

export default function CardOwnerNameInputField({ ownerName, handleOwnerName, errorMessage }: CardOwnerNameInputField) {
  const [isFocus, setIsFocus] = useState(false);

  const handleEnterKey = (handleOwnerName: (e: ChangeEvent<HTMLInputElement>, isKeyEnter: boolean) => void) => {
    return (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleOwnerName(event as unknown as ChangeEvent<HTMLInputElement>, true);
      }
    };
  };

  const isInfoMessageVisible = () => {
    return ownerName.length >= MIN_NAME_LENGTH && errorMessage === '' && isFocus;
  };

  return (
    <>
      <div className={styles.label}>소유자 이름</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onFocus={() => setIsFocus(true)}
          autoFocus
          onChange={handleOwnerName}
          isError={errorMessage.length !== 0}
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={MAX_NAME_LENGTH}
          value={ownerName}
          onBlur={(e) => {
            handleOwnerName(e);
            setIsFocus(false);
          }}
          onKeyDown={handleEnterKey(handleOwnerName)}
        />
      </div>
      {errorMessage !== '' && <div className={styles.error_message}>{errorMessage}</div>}
      {isInfoMessageVisible() && <div className={styles.info_message}>입력 완료시 enter를 눌러주세요</div>}
    </>
  );
}
