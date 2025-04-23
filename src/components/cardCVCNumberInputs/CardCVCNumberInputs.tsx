import Input from '../input/Input';
import { CardCVCNumberSectionProps } from '../../types/index.types';
import { isValidLength, isValidNumber } from '../../util/validation';
import { NO_ERROR } from '../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../styled-component/inputs';

const CVC_NUMBER_LENGTH = 3;

const errorMessages = {
  length: '3자리만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
};

const isCardCVCNumberInvalid = (CVCNumber: string): boolean => {
  if (CVCNumber === '') return false;
  if (!isValidLength(CVCNumber, CVC_NUMBER_LENGTH)) return true;
  if (!isValidNumber(CVCNumber)) return true;
  return false;
};

const getErrorMessage = (CVCNumber: string) => {
  if (CVCNumber === NO_ERROR) return NO_ERROR;
  if (!isValidLength(CVCNumber, CVC_NUMBER_LENGTH)) {
    return errorMessages.length;
  }
  if (!isValidNumber(CVCNumber)) {
    return errorMessages.number;
  }
  return NO_ERROR;
};

function CardCVCNumberInputs({ CVCNumber, changeCVCNumber, viewNextInput }: CardCVCNumberSectionProps) {
  const errorMessage = getErrorMessage(CVCNumber);

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
          isError={isCardCVCNumberInvalid(CVCNumber)}
          isPassword={false}
          width="100%"
          maxLength={CVC_NUMBER_LENGTH}
          placeholder="123"
        />
      </StyledInputWrap>
      <StyledErrorMessage>{errorMessage ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardCVCNumberInputs;
