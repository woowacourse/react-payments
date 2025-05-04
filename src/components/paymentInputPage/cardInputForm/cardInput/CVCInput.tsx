import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import useCardContext from '../../../../hooks/useCardContext';
import { validate } from '../../../../utils/validate';
import { useState } from 'react';

export interface CVCInputProps {
  isCVCValid: boolean;
  setIsCVCValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function CVCInput({ isCVCValid, setIsCVCValid }: CVCInputProps) {
  const { cardCVC, setCardCVC } = useCardContext();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleCVCNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;

    setCardCVC(value);
    validateCVCnumber(value);
  }

  function validateCVCnumber(cvcNumber: string) {
    const { isValid, message } = validate.checkNumberInput(cvcNumber);
    setIsCVCValid(isValid);
    setFeedbackMessage(message);
  }

  return (
    <>
      <InputForm
        title='CVC 번호를 입력해 주세요.'
        label='CVC'
        feedbackMessage={feedbackMessage}
      >
        <Input
          type='tel'
          name='cardCVC'
          placeholder='123'
          minLength={3}
          maxLength={3}
          value={cardCVC}
          handleInputChange={handleCVCNumberChange}
          autoFocus={true}
          isRequired={true}
          isValidInput={isCVCValid}
        />
      </InputForm>
    </>
  );
}

export default CVCInput;
