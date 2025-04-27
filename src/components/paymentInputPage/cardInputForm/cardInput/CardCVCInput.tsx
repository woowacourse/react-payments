import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { precise } from '../../../../utils/precise';

export interface CardCVCInputProps {
  cardCVC: string;
  setCardCVC: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardCVCInput({
  cardCVC,
  setCardCVC,
  isValid,
  setIsValid,
}: CardCVCInputProps) {
  function handleCVCNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;

    setCardCVC(value);
    validateCVCnumber(value);
  }

  function validateCVCnumber(cvcNumber: string) {
    if (!checkIsValidCVC(cvcNumber)) {
      setIsValid(false);
    } else {
      setIsValid(true);
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
        feedbackMessage={isValid ? '' : '숫자만 입력 가능합니다.'}
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
          isValidInput={isValid}
        />
      </InputForm>
    </>
  );
}

export default CardCVCInput;
