import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { InputType } from '../../../hooks/useInput';
import { isNumber } from '../../../utils/validation';
import { CARD_PASSWORD } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

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

  const errorMessage = password.isError ? ERROR_MESSAGE.INVALID_CARD_PASSWORD : '';

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해 주세요." />
      <InputField label="비밀번호 앞 2자리" inputCount={CARD_PASSWORD.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          isError={password.isError}
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password.value}
          maxLength={CARD_PASSWORD.MAX_LENGTH}
          onChange={handlePasswordChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardPasswordInput;
