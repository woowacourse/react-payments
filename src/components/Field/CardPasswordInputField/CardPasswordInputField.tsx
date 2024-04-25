import { SyntheticEvent } from 'react';
import { PASSWORD_LENGTH } from '../../../constants/input';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';

type CardPasswordInputField = {
  password: string;
  errorMessage: string;
  handlePassword: (e: SyntheticEvent<HTMLInputElement>) => void;
};

const CardPasswordInputField = ({ password, errorMessage, handlePassword }: CardPasswordInputField) => {
  return (
    <>
      <div className={styles.label}>비밀번호 앞 2자리</div>
      <div className={styles.horizon__gap__container}>
        <Input
          autoFocus
          value={password}
          onChange={handlePassword}
          maxLength={PASSWORD_LENGTH}
          type='password'
          isError={errorMessage !== ''}
          onBlur={handlePassword}
        />
      </div>
      {errorMessage !== '' && <div className={styles.error_message}>{errorMessage}</div>}
    </>
  );
};

export default CardPasswordInputField;
