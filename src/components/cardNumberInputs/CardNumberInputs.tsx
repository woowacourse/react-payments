import Input from '../input/Input';
import { CardNumber, CardNumberProps } from '../../types/index.types';
import { isValidLength, isValidNumber } from '../../util/validation';
import { NO_ERROR } from '../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../styled-component/inputs';

const CARD_NUMBER_LENGTH = 4;

const errorMessages = {
  length: '4자리만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
};

const isCardNumberInvalid = (cardNumber: string): boolean => {
  if (cardNumber === '') return false;
  if (!isValidLength(cardNumber, CARD_NUMBER_LENGTH)) return true;
  if (!isValidNumber(cardNumber)) return true;
  return false;
};

const getErrorMessage = (cardNumbers: CardNumber) => {
  let errorMessage = NO_ERROR;
  Object.values(cardNumbers).forEach((cardNumber) => {
    if (cardNumber === NO_ERROR) return;
    if (!isValidLength(cardNumber, CARD_NUMBER_LENGTH)) {
      errorMessage = errorMessages.length;
    }
    if (!isValidNumber(cardNumber)) {
      errorMessage = errorMessages.number;
    }
  });
  return errorMessage;
};

function CardNumberInputs({ cardNumber: cardNumbers, changeCardNumber }: CardNumberProps) {
  const errorMessage = getErrorMessage(cardNumbers);
  const inputKeys: (keyof typeof cardNumbers)[] = ['first', 'second', 'third', 'fourth'];

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <StyledInputWrap>
        {inputKeys.map((key) => (
          <Input
            key={key}
            value={cardNumbers[key]}
            onChange={(e) => {
              changeCardNumber(key, e.target?.value);
            }}
            width="25%"
            maxLength={CARD_NUMBER_LENGTH}
            placeholder="1234"
            isError={isCardNumberInvalid(cardNumbers[key])}
            isPassword={false}
          />
        ))}
      </StyledInputWrap>
      <StyledErrorMessage>{errorMessage ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardNumberInputs;
