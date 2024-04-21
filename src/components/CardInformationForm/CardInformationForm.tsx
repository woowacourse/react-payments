import * as Styled from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CardInformationFormProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
}

const CardInformationForm = ({
  cardNumberState,
  expirationDateState,
  userNameState,
}: CardInformationFormProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;

  const cardNumberErrorMessage =
    firstState.error || secondState.error || thirdState.error || fourthState.error
      ? ERROR.cardNumber
      : '';
  const expirationErrorMessage = monthState.error ? ERROR.month : yearState.error ? ERROR.year : '';
  const userNameErrorMessage = userNameState.error ? ERROR.userName : '';

  const cardNumberStates = [firstState, secondState, thirdState, fourthState];
  const cardNumberInputs = cardNumberStates.map((state) => (
    <Input
      placeholder={PLACEHOLDER.cardNumber}
      value={state.value}
      maxLength={MAX_LENGTH.cardNumber}
      onChange={state.setValue}
      invalid={state.error}
    />
  ));

  return (
    <Styled.CardInformationForm>
      <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
        <InputField label={LABEL.cardNumber} error={cardNumberErrorMessage}>
          <>{cardNumberInputs}</>
        </InputField>
      </FormField>
      <FormField title={TITLE.expirationDate} caption={CAPTION.expirationDate}>
        <InputField label={LABEL.expirationDate} error={expirationErrorMessage}>
          <>
            <Input
              placeholder={PLACEHOLDER.month}
              value={monthState.value}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={monthState.setValue}
              invalid={monthState.error}
            />
            <Input
              placeholder={PLACEHOLDER.year}
              value={yearState.value}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={yearState.setValue}
              invalid={yearState.error}
            />
          </>
        </InputField>
      </FormField>
      <FormField title={TITLE.userName}>
        <InputField label={LABEL.userName} error={userNameErrorMessage}>
          <Input
            placeholder={PLACEHOLDER.userName}
            value={userNameState.value}
            maxLength={MAX_LENGTH.userName}
            onChange={userNameState.setValue}
            invalid={userNameState.error}
          />
        </InputField>
      </FormField>
    </Styled.CardInformationForm>
  );
};

export default CardInformationForm;
