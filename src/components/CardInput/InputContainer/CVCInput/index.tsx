import { CARD_CVC_FORM_MESSAGE, ERROR_MESSAGE } from '../../../../constants';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

interface CVCInputProps {
  maxLength: number;
  CVCNumber: string;
  CVCNumberError: boolean;
  onCVCNumberChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

function CVCInput({
  maxLength,
  CVCNumber,
  CVCNumberError,
  onCVCNumberChange,
  onFocus,
  onBlur,
}: CVCInputProps) {
  const { title, subTitle, label, placeholder } = CARD_CVC_FORM_MESSAGE;

  const getErrorMessage = () => {
    if (!CVCNumberError) {
      return;
    }
    return ERROR_MESSAGE.CVCNumber;
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              type="number"
              name="CVC"
              value={CVCNumber}
              maxLength={maxLength}
              placeholder={placeholder}
              isError={CVCNumberError}
              onChange={(event) => onCVCNumberChange(event.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              autoFocus
            />
          </div>
          <InputErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </InputField>
    </InputWrap>
  );
}

export default CVCInput;
