import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber } from '../../../utils/validation';
import { InputType } from '../../../hooks/useValidatedInput';

interface CardPasswordInputProps {
  password: InputType;
}

const CardPasswordInput = ({ password }: CardPasswordInputProps) => {
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    password.handleValue(e.target.value);
  };

  const errorMessage = password.isClicked && !password.isValid ? '두 자리 숫자여야 합니다.' : '';

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해 주세요." />
      <InputField label="비밀번호 앞 2자리" inputCount={1} errorMessage={errorMessage}>
        <Input
          isValid={password.isClicked ? password.isValid : true}
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password.value}
          maxLength={2}
          onChange={handlePasswordChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardPasswordInput;
