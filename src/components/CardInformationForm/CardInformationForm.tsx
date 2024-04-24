import { StyledCardInformationForm } from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import Dropdown from '../Dropdown/Dropdown';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER, OPTION } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CardInformationFormProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
  selectedCardState: SelectedCardStateType;
}

const CardInformationForm = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  selectedCardState,
}: CardInformationFormProps) => {
  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;

  const isCardNumberFilled =
    firstState.value && secondState.value && thirdState.value && fourthState.value;
  const isCardSelected = selectedCardState.value;
  const isExpirationDateFilled = monthState.value && yearState.value;

  const isCardNumberError =
    firstState.error || secondState.error || thirdState.error || fourthState.error;
  const isExpirationDateError = monthState.error || yearState.error;

  const isCardSelectedAppearedCondition = isCardNumberFilled && !isCardNumberError;
  const isExpirationDateAppearedCondition = isCardSelectedAppearedCondition && isCardSelected;
  const isUserNameAppearedCondition =
    isExpirationDateAppearedCondition && isExpirationDateFilled && !isExpirationDateError;

  const cardNumberErrorMessage = isCardNumberError ? ERROR.cardNumber : '';
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
    <StyledCardInformationForm>
      {isUserNameAppearedCondition && (
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
      )}
      {isExpirationDateAppearedCondition && (
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
      )}
      {isCardSelectedAppearedCondition && (
        <FormField title={TITLE.cardSelect} caption={CAPTION.cardSelect}>
          <Dropdown
            optionArray={OPTION.cardSelect}
            selectText={TITLE.cardSelect}
            selectedOptionState={selectedCardState}
          />
        </FormField>
      )}
      <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
        <InputField label={LABEL.cardNumber} error={cardNumberErrorMessage}>
          <>{cardNumberInputs}</>
        </InputField>
      </FormField>
    </StyledCardInformationForm>
  );
};

export default CardInformationForm;
