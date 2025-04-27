import Input from '../../common/input/Input';
import { CardNumberProps } from '../../../types/index.types';
import { isValidNumber } from '../../../util/validation';
import { NO_ERROR } from '../../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../../styled-component/inputs';
import autoFocusToNext from '../../../util/autoFocus';
import { ValidationProps } from '../../../hooks/useValidation';

function CardNumberInputs({
  cardNumber: cardNumbers,
  changeCardNumber,
  viewNextInput,
  getErrorMessage,
  isInvalid,
}: CardNumberProps & ValidationProps) {
  const inputKeys: (keyof typeof cardNumbers)[] = ['first', 'second', 'third', 'fourth'];

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <form>
        <StyledInputWrap>
          {inputKeys.map((key) => (
            <Input
              key={key}
              value={cardNumbers[key]}
              onChange={(e) => {
                changeCardNumber(key, e.target?.value);
                autoFocusToNext(e, 4);

                const isLast = key === 'fourth';
                const isComplete = e.target.value.length === 4 && isValidNumber(e.target.value);

                if (isLast && isComplete) {
                  viewNextInput();
                }
              }}
              width="25%"
              maxLength={4}
              placeholder="1234"
              isError={isInvalid('cardNumber', cardNumbers[key])}
              isPassword={false}
            />
          ))}
        </StyledInputWrap>
      </form>
      <StyledErrorMessage>
        {Object.values(cardNumbers)
          .map((num) => getErrorMessage('cardNumber', num))
          .find((msg) => msg !== NO_ERROR) ?? ''}
      </StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardNumberInputs;
