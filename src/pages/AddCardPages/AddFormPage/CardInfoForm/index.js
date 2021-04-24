import { Form } from '../../../../components';
import { CardNumberInput, ExpirationDateInput, UserNameInput, PasswordInput } from './inputs';

export const CardInfoForm = () => {
  return (
    <Form>
      <CardNumberInput />
      <ExpirationDateInput />
      <UserNameInput />
      <PasswordInput />
    </Form>
  );
};
