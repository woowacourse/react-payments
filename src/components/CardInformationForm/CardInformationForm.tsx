import { Form } from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

import {
  CardNumberErrorState,
  CardNumberState,
  ExpirationDateErrorState,
  ExpirationDateState,
  SetCardNumberState,
  SetExpirationDateState,
} from '../../types/Types';

interface CardInformationFormProps {
  cardNumberState: CardNumberState;
  setCardNumberState: SetCardNumberState;
  cardNumberErrorState: CardNumberErrorState;
  expirationDateState: ExpirationDateState;
  setExpirationDateState: SetExpirationDateState;
  expirationDateErrorState: ExpirationDateErrorState;
  userNameState?: string;
  setUserNameState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userNameErrorState: boolean;
}

const CardInformationForm = ({
  cardNumberState,
  setCardNumberState,
  cardNumberErrorState,
  expirationDateState,
  setExpirationDateState,
  expirationDateErrorState,
  userNameState,
  setUserNameState,
  userNameErrorState,
}: CardInformationFormProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { setFirst, setSecond, setThird, setFourth } = setCardNumberState;
  const { firstError, secondError, thirdError, fourthError } = cardNumberErrorState;
  const { month, year } = expirationDateState;
  const { setMonth, setYear } = setExpirationDateState;
  const { monthError, yearError } = expirationDateErrorState;

  const cardNumberErrorMessage =
    firstError || secondError || thirdError || fourthError ? ERROR.cardNumber : '';
  const expirationErrorMessage = monthError ? ERROR.month : yearError ? ERROR.year : '';
  const userNameErrorMessage = userNameErrorState ? ERROR.userName : '';

  return (
    <Form>
      <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
        <InputField label={LABEL.cardNumber} error={cardNumberErrorMessage}>
          <>
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={first}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={setFirst}
              invalid={firstError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={second}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={setSecond}
              invalid={secondError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={third}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={setThird}
              invalid={thirdError}
            />
            <Input
              placeholder={PLACEHOLDER.cardNumber}
              value={fourth}
              maxLength={MAX_LENGTH.cardNumber}
              onChange={setFourth}
              invalid={fourthError}
            />
          </>
        </InputField>
      </FormField>
      <FormField title={TITLE.expirationDate} caption={CAPTION.expirationDate}>
        <InputField label={LABEL.expirationDate} error={expirationErrorMessage}>
          <>
            <Input
              placeholder={PLACEHOLDER.month}
              value={month}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={setMonth}
              invalid={monthError}
            />
            <Input
              placeholder={PLACEHOLDER.year}
              value={year}
              maxLength={MAX_LENGTH.expirationDate}
              onChange={setYear}
              invalid={yearError}
            />
          </>
        </InputField>
      </FormField>
      <FormField title={TITLE.userName}>
        <InputField label={LABEL.userName} error={userNameErrorMessage}>
          <Input
            placeholder={PLACEHOLDER.userName}
            value={userNameState}
            maxLength={MAX_LENGTH.userName}
            onChange={setUserNameState}
            invalid={userNameErrorState}
          />
        </InputField>
      </FormField>
    </Form>
  );
};

export default CardInformationForm;
