import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber } from '../../../utils/validation';
import { InputType } from '../../../hooks/useValidatedInput';

interface CardCVCInputProps {
  cvc: InputType;
  handleIsCVCInput: (isCVCInput: boolean) => void;
}

const CardCVCInput = ({ cvc, handleIsCVCInput }: CardCVCInputProps) => {
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    cvc.handleValue(e.target.value);
  };

  const errorMessage = cvc.isClicked && !cvc.isValid ? 'CVC 번호는 세 자리 숫자여야 합니다.' : '';

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" inputCount={1} errorMessage={errorMessage}>
        <Input
          isValid={cvc.isClicked ? cvc.isValid : true}
          type="text"
          placeholder="123"
          value={cvc.value}
          maxLength={3}
          onFocus={() => handleIsCVCInput(true)}
          onBlur={() => handleIsCVCInput(false)}
          onChange={handleCVCChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardCVCInput;
