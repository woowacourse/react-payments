import { Form } from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';
import { CARD_NUMBER_ERROR_MESSAGE } from '../../hooks/useCardNumber';
import { MONTH_ERROR_MESSAGE, YEAR_ERROR_MESSAGE } from '../../hooks/useExpirationDate';
import { USER_NAME_ERROR_MESSAGE } from '../../hooks/useUserName';
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
    firstError || secondError || thirdError || fourthError ? CARD_NUMBER_ERROR_MESSAGE : '';
  const expirationErrorMessage = monthError
    ? MONTH_ERROR_MESSAGE
    : yearError
    ? YEAR_ERROR_MESSAGE
    : '';
  const userNameErrorMessage = userNameErrorState ? USER_NAME_ERROR_MESSAGE : '';

  return (
    <Form>
      <FormField
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      >
        <InputField label="카드 번호" error={cardNumberErrorMessage}>
          <>
            <Input
              placeholder="1234"
              value={first}
              maxLength={4}
              onChange={setFirst}
              invalid={firstError}
            />
            <Input
              placeholder="1234"
              value={second}
              maxLength={4}
              onChange={setSecond}
              invalid={secondError}
            />
            <Input
              placeholder="1234"
              value={third}
              maxLength={4}
              onChange={setThird}
              invalid={thirdError}
            />
            <Input
              placeholder="1234"
              value={fourth}
              maxLength={4}
              onChange={setFourth}
              invalid={fourthError}
            />
          </>
        </InputField>
      </FormField>
      <FormField
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      >
        <InputField label="유효기간" error={expirationErrorMessage}>
          <>
            <Input
              placeholder="MM"
              value={month}
              maxLength={2}
              onChange={setMonth}
              invalid={monthError}
            />
            <Input
              placeholder="YY"
              value={year}
              maxLength={2}
              onChange={setYear}
              invalid={yearError}
            />
          </>
        </InputField>
      </FormField>
      <FormField title="카드 소유자 이름을 입력해 주세요">
        <InputField label="소유자 이름" error={userNameErrorMessage}>
          <Input
            placeholder="LAST_NAME FIRST_NAME"
            value={userNameState}
            maxLength={20}
            onChange={setUserNameState}
            invalid={userNameErrorState}
          />
        </InputField>
      </FormField>
    </Form>
  );
};

export default CardInformationForm;
