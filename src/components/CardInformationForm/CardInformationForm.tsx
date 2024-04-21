import * as Styled from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { CardNumberState } from '../../hooks/useCardNumber';
import { ExpirationDateState } from '../../hooks/useExpirationDate';
import { UserNameState } from '../../hooks/useUserName';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CardInformationFormProps {
  cardNumberState: CardNumberState;
  expirationDateState: ExpirationDateState;
  userNameState: UserNameState;
}

const CardInformationForm = ({
  cardNumberState,
  expirationDateState,
  userNameState,
}: CardInformationFormProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;

  const cardNumberErrorMessage =
    firstState.firstError ||
    secondState.secondError ||
    thirdState.thirdError ||
    fourthState.fourthError
      ? ERROR.cardNumber
      : '';
  const expirationErrorMessage = monthState.monthError
    ? ERROR.month
    : yearState.yearError
      ? ERROR.year
      : '';
  const userNameErrorMessage = userNameState.userNameError ? ERROR.userName : '';

  return (
    <Styled.CardInformationForm>
      <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
        <InputField label={LABEL.cardNumber} error={cardNumberErrorMessage}>
          <>
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={firstState.first}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={firstState.setFirst}
              invalid={firstState.firstError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={secondState.second}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={secondState.setSecond}
              invalid={secondState.secondError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={thirdState.third}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={thirdState.setThird}
              invalid={thirdState.thirdError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={fourthState.fourth}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={fourthState.setFourth}
              invalid={fourthState.fourthError}
            />
          </>
        </InputField>
      </FormField>
      <FormField title={TITLE.expirationDate} caption={CAPTION.expirationDate}>
        <InputField label={LABEL.expirationDate} error={expirationErrorMessage}>
          <>
            <Input
              placeholder={PLACEHOLDER.month}
              value={monthState.month}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={monthState.setMonth}
              invalid={monthState.monthError}
            />
            <Input
              placeholder={PLACEHOLDER.year}
              value={yearState.year}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={yearState.setYear}
              invalid={yearState.yearError}
            />
          </>
        </InputField>
      </FormField>
      <FormField title={TITLE.userName}>
        <InputField label={LABEL.userName} error={userNameErrorMessage}>
          <Input
            placeholder={PLACEHOLDER.userName}
            value={userNameState.userName}
            maxLength={MAX_LENGTH.userName}
            onChange={userNameState.setUserName}
            invalid={userNameState.userNameError}
          />
        </InputField>
      </FormField>
    </Styled.CardInformationForm>
  );
};

export default CardInformationForm;
