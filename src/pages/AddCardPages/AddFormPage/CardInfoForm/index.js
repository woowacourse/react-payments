import { Form } from '../../../../components';
import {
  CardNumberInputContainer,
  ExpirationDateInputContainer,
  UserNameInputContainer,
  PasswordInputContainer,
} from './inputContainers';

export const CardInfoForm2 = () => {
  return (
    <Form>
      <CardNumberInputContainer />
      <ExpirationDateInputContainer />
      <UserNameInputContainer />
      <PasswordInputContainer />
    </Form>
  );
};
