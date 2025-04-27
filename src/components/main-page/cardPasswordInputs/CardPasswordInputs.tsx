import Input from '../../common/input/Input';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../../styled-component/inputs';
import { CardPasswordSectionProps } from '../../../types/index.types';
import { ValidationProps } from '../../../hooks/useValidation';

const PASSWORD_NUMBER_LENGTH = 2;

function CardPasswordInputs({
  password,
  changePassword,
  getErrorMessage,
  isInvalid,
}: CardPasswordSectionProps & ValidationProps) {
  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          value={password}
          onChange={(e) => {
            changePassword(e.target.value);
          }}
          isError={isInvalid('password', password)}
          isPassword={true}
          width="100%"
          maxLength={PASSWORD_NUMBER_LENGTH}
          placeholder=""
        />
      </StyledInputWrap>
      <StyledErrorMessage>{getErrorMessage('password', password) ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardPasswordInputs;
