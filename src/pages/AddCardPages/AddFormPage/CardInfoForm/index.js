import { Button, Form } from '../../../../components';
import {
  CardNumberInput,
  ExpirationDateInput,
  UserNameInput,
  SecurityCodeInput,
  PasswordInput,
} from './inputs';

export const CardInfoForm = () => {
  return (
    <Form>
      <CardNumberInput
        firstFourDigits={1111}
        secondFourDigits={1111}
        thirdFourDigits={1111}
        fourthFourDigits={1111}
      />
      <ExpirationDateInput month="04" year={21} />
      <UserNameInput value="SUN" />
      <SecurityCodeInput value="111" />
      <PasswordInput value="1111" />
      <Button onClick={() => {}}>다음</Button>
    </Form>
  );
};
