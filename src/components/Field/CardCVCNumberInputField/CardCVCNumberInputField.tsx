import { SyntheticEvent, useState } from 'react';
import { CVC_LENGTH } from '../../../constants/input';
import Input from '../../common/Input/Input';
import styles from '../../../App.module.css';
import { useFocusContext } from '../../../providers/FocusProvider';

type CardCVCNumberInputField = {
  CVCNumber: string;
  errorMessage: string;
  handleCVCNumber: (e: SyntheticEvent<HTMLInputElement>) => void;
};

const CardCVCNumberInputField = ({ CVCNumber, errorMessage, handleCVCNumber }: CardCVCNumberInputField) => {
  const { setFocusedInputId } = useFocusContext();

  return (
    <>
      <div className={styles.label}>CVC</div>
      <div className={styles.horizon__gap__container}>
        <Input
          autoFocus
          onFocus={() => {
            setFocusedInputId('CVCNumberInput');
          }}
          value={CVCNumber}
          onBlur={(e) => {
            handleCVCNumber(e);
            setFocusedInputId(null);
          }}
          maxLength={CVC_LENGTH}
          onChange={handleCVCNumber}
          isError={errorMessage !== ''}
        />
      </div>
      {errorMessage !== '' && <div className={styles.error_message}>{errorMessage}</div>}
    </>
  );
};

export default CardCVCNumberInputField;
