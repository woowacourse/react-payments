import { ChangeEvent } from 'react';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import { MAX_NAME_LENGTH, OWNER_NAME_PLACEHOLDER } from '../../../constants/input';

type CardOwnerNameInputField = {
  ownerName: string;
  handleOwnerName: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
};

export default function CardOwnerNameInputField({ ownerName, handleOwnerName, errorMessage }: CardOwnerNameInputField) {
  return (
    <>
      <div className={styles.label}>소유자 이름</div>
      <div className={styles.horizon__gap__container}>
        <Input
          autoFocus
          onChange={handleOwnerName}
          isError={errorMessage.length !== 0}
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={MAX_NAME_LENGTH}
          value={ownerName}
          onBlur={handleOwnerName}
        />
      </div>
      {errorMessage !== '' && <div className={styles.error_message}>{errorMessage}</div>}
    </>
  );
}
