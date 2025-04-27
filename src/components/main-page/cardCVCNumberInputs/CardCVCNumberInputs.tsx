import Input from '../../common/input/Input';
import { CardCVCNumberSectionProps } from '../../../types/index.types';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../../styled-component/inputs';
import { isValidNumber } from '../../../util/validation';
import { ValidationProps } from '../../../hooks/useValidation';

const CVC_NUMBER_LENGTH = 3;

function CardCVCNumberInputs({
  CVCNumber,
  changeCVCNumber,
  viewNextInput,
  getErrorMessage,
  isInvalid,
}: CardCVCNumberSectionProps & ValidationProps) {
  return (
    <StyledContainer>
      <label htmlFor="">CVC</label>
      <StyledInputWrap>
        <Input
          value={CVCNumber}
          onChange={(e) => {
            changeCVCNumber(e.target.value);

            const isComplete = e.target.value.length === CVC_NUMBER_LENGTH && isValidNumber(e.target.value);

            if (isComplete) {
              viewNextInput();
            }
          }}
          isError={isInvalid('CVC', CVCNumber)}
          isPassword={false}
          width="100%"
          maxLength={CVC_NUMBER_LENGTH}
          placeholder="123"
        />
      </StyledInputWrap>
      <StyledErrorMessage>{getErrorMessage('CVC', CVCNumber) ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardCVCNumberInputs;
