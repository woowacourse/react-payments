import Input from '../../common/input/Input';
import { isValidLength, isValidNumber } from '../../../util/validation';
import { NO_ERROR } from '../../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../../styled-component/inputs';
import { CardPasswordSectionProps } from '../../../types/index.types';

const PASSWORD_NUMBER_LENGTH = 2;

const errorMessages = {
  length: '2자리만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
};

const isCardPasswordInvalid = (password: string): boolean => {
  if (password === '') return false;
  if (!isValidLength(password, PASSWORD_NUMBER_LENGTH)) return true;
  if (!isValidNumber(password)) return true;
  return false;
};

const getErrorMessage = (password: string) => {
  if (password === NO_ERROR) return NO_ERROR;
  if (!isValidLength(password, PASSWORD_NUMBER_LENGTH)) {
    return errorMessages.length;
  }
  if (!isValidNumber(password)) {
    return errorMessages.number;
  }
  return NO_ERROR;
};

function CardPasswordInputs({ password, changePassword, handleOpenButton }: CardPasswordSectionProps) {
  const errorMessage = getErrorMessage(password);

  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          value={password}
          onChange={(e) => {
            changePassword(e.target.value);

            const isComplete = e.target.value.length === PASSWORD_NUMBER_LENGTH;

            if (isComplete) {
              handleOpenButton();
            }
          }}
          isError={isCardPasswordInvalid(password)}
          isPassword={true}
          width="100%"
          maxLength={PASSWORD_NUMBER_LENGTH}
          placeholder=""
        />
      </StyledInputWrap>
      <StyledErrorMessage>{errorMessage ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardPasswordInputs;
