import { useRef, useState } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { validateCVC } from '../../domain/validate';
import { INPUT_CONTAINER } from '../../constants/title';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';

type CVCInputProps = {
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
};

const CVCInput = ({ CVC, setCVC }: CVCInputProps) => {
  const [helperText, setHelperText] = useState('');
  const inputRef = useRef<HTMLElement | null>(null);

  const updateCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCVC(e.target.value);
      validateCVC(e.target.value, 3);
      setHelperText('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setHelperText(error.message);
        inputRef.current?.focus();
      }
    }
  };

  return (
    <InputContainer title={INPUT_CONTAINER.CVC.TITLE}>
      <h4 className="label">CVC</h4>
      <div className="inputContainer">
        <input
          name="cvc"
          placeholder="123"
          value={CVC}
          onChange={updateCVC}
          ref={(element) => {
            inputRef.current = element;
          }}
          className={`input ${helperText !== '' && 'errorInput'}`}
          maxLength={CARD_VALIDATION_INFO.CVC_MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {helperText}
      </p>
    </InputContainer>
  );
};

export default CVCInput;
