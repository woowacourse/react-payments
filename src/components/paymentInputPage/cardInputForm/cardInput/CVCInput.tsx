import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { precise } from '../../../../utils/precise';
import useCardContext from '../../../../hooks/useCardContext';

export interface CVCInputProps {
  isCVCValid: boolean;
  setIsCVCValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function CVCInput({ isCVCValid, setIsCVCValid }: CVCInputProps) {
  const { cardCVC, setCardCVC } = useCardContext();

  function handleCVCNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;

    setCardCVC(value);
    validateCVCnumber(value);
  }

  function validateCVCnumber(cvcNumber: string) {
    if (!checkIsValidCVC(cvcNumber)) {
      setIsCVCValid(false);
    } else {
      setIsCVCValid(true);
    }
  }

  function checkIsValidCVC(cvcNumber: string) {
    return precise.isNumber(cvcNumber);
  }

  return (
    <>
      <InputForm
        title='CVC 번호를 입력해 주세요.'
        label='CVC'
        feedbackMessage={isCVCValid ? '' : '숫자만 입력 가능합니다.'}
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
