import * as styled from './RegisterForm.styled';
import SerialNumberBox from '../SerialNumberBox/SerialNumberBox';
import ExpirationDateBox from '../ExpirationDateBox/ExpirationDateBox';
import OwnerNameBox from '../OwnerNameBox/OwnerNameBox';
import PasswordBox from '../PasswordBox/PasswordBox';
import SecurityCodeBox from '../SecurityCodeBox/SecurityCodeBox';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

const RegisterForm = () => {
  return (
    <styled.RegisterForm>
      <SerialNumberBox />
      <ExpirationDateBox />
      <OwnerNameBox />
      <SecurityCodeBox />
      <PasswordBox />
      <FormSubmitButton />
    </styled.RegisterForm>
  );
};

export default RegisterForm;
