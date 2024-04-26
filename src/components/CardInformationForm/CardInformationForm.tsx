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
import { CVCStateType } from '../../hooks/useCVC';
import { useState } from 'react';
import { PasswordStateType } from '../../hooks/usePassword';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER, OPTION } = MESSAGE;
const { MAX_LENGTH, CARD_INFORMATION_APPEARED } = CONDITION;

interface CardInformationFormProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
  selectedCardState: SelectedCardStateType;
  cvcState: CVCStateType;
  passwordState: PasswordStateType;
}

const CardInformationForm = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  selectedCardState,
  cvcState,
  passwordState,
}: CardInformationFormProps) => {
  const navigate = useNavigate();

  const { firstState, secondState, thirdState, fourthState } = cardNumberState;
  const { monthState, yearState } = expirationDateState;
  const [appearedCondition, setAppearedCondition] = useState<number>(
    CARD_INFORMATION_APPEARED.cardNumber,
  );

  const isCardNumberFilled =
    firstState.value && secondState.value && thirdState.value && fourthState.value;
  const isCardSelected = selectedCardState.value;
  const isExpirationDateFilled = monthState.value && yearState.value;
  const isUserNameFilled = userNameState.value;
  const isCVCFilled = cvcState.value;
  const isPasswordFilled = passwordState.value;

  const isCardNumberError =
    firstState.error || secondState.error || thirdState.error || fourthState.error;
  const isExpirationDateError = monthState.error || yearState.error;
  const isUserNameError = userNameState.error;
  const isCVCError = cvcState.error;
  const isPasswordError = passwordState.error;

  const cardNumberErrorMessage = isCardNumberError ? ERROR.cardNumber : '';
  const expirationErrorMessage = monthState.error ? ERROR.month : yearState.error ? ERROR.year : '';
  const userNameErrorMessage = isUserNameError ? ERROR.userName : '';
  const cvcErrorMessage = isCVCError ? ERROR.cvc : '';
  const passwordErrorMessage = isPasswordError ? ERROR.password : '';

  const isCardNumberValid = isCardNumberFilled && !isCardNumberError;
  const isExpirationDateValid = isExpirationDateFilled && !isExpirationDateError;
  const isUserNameValid = isUserNameFilled && !isUserNameError;
  const isCVCValid = isCVCFilled && !isCVCError;
  const isPasswordValid = isPasswordFilled && !isPasswordError;

  const isCardSelectedAppearedCondition =
    appearedCondition >= CARD_INFORMATION_APPEARED.selectedCard;
  const isExpirationDateAppearedCondition =
    appearedCondition >= CARD_INFORMATION_APPEARED.expirationDate;
  const isUserNameAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.userName;
  const isCVCAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.cvc;
  const isPasswordAppearedCondition = appearedCondition >= CARD_INFORMATION_APPEARED.password;
  const isSubmitButtonAppearedCondition =
    isCardNumberValid &&
    isCardSelected &&
    isExpirationDateValid &&
    isUserNameValid &&
    isCVCValid &&
    isPasswordValid;

  if (isCardNumberValid && !isCardSelectedAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.selectedCard);
  if (isCardSelected && !isExpirationDateAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.expirationDate);
  if (isExpirationDateValid && !isUserNameAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.userName);
  if (isUserNameValid && !isCVCAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.cvc);
  if (isCVCValid && !isPasswordAppearedCondition)
    setAppearedCondition(CARD_INFORMATION_APPEARED.password);

  const cardNumberStates = [firstState, secondState, thirdState, fourthState];
  const cardNumberInputs = cardNumberStates.map((state, index) => (
    <Input
      placeholder={PLACEHOLDER.cardNumber}
      value={state.value}
      maxLength={MAX_LENGTH.cardNumber}
      onChange={state.setValue}
      invalid={state.error}
      autoFocus={index === 0 ? true : undefined}
    />
  ));

  return (
    <StyledCardInformationForm>
      {isSubmitButtonAppearedCondition && (
        <Button
          label={LABEL.button}
          onClick={() => {
            navigate('/registration', {
              state: {
                firstValue: firstState.value,
                selectedCardValue: selectedCardState.value,
              },
            });
          }}
        />
      )}
      {isPasswordAppearedCondition && (
        <FormField title={TITLE.password} caption={CAPTION.password}>
          <InputField label={LABEL.password} error={passwordErrorMessage}>
            <Input
              placeholder={PLACEHOLDER.password}
              value={passwordState.value}
              maxLength={MAX_LENGTH.password}
              onChange={passwordState.setValue}
              invalid={passwordState.error}
              type="password"
              autoFocus
            />
          </InputField>
        </FormField>
      )}
      {isCVCAppearedCondition && (
        <FormField title={TITLE.cvc}>
          <InputField label={LABEL.cvc} error={cvcErrorMessage}>
            <Input
              placeholder={PLACEHOLDER.cvc}
              value={cvcState.value}
              maxLength={MAX_LENGTH.cvc}
              onChange={cvcState.setValue}
              invalid={cvcState.error}
              onFocus={() => cvcState.setIsFocus(true)}
              onBlur={() => cvcState.setIsFocus(false)}
              autoFocus
            />
          </InputField>
        </FormField>
      )}
      {isUserNameAppearedCondition && (
        <FormField title={TITLE.userName}>
          <InputField label={LABEL.userName} error={userNameErrorMessage}>
            <Input
              placeholder={PLACEHOLDER.userName}
              value={userNameState.value}
              maxLength={MAX_LENGTH.userName}
              onChange={userNameState.setValue}
              invalid={userNameState.error}
              autoFocus
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
                autoFocus
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
