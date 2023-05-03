import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATHNAME } from '../../constants/pathname';

import * as styled from './RegisterForm.styled';
import SerialNumberBox from '../SerialNumberBox/SerialNumberBox';
import ExpirationDateBox from '../ExpirationDateBox/ExpirationDateBox';
import OwnerNameBox from '../OwnerNameBox/OwnerNameBox';
import PasswordBox from '../PasswordBox/PasswordBox';
import SecurityCodeBox from '../SecurityCodeBox/SecurityCodeBox';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

const RegisterForm = () => {
  const navigation = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigation(PATHNAME.NICKNAME);
  };

  return (
    <styled.RegisterForm>
      <SerialNumberBox />
      <ExpirationDateBox />
      <OwnerNameBox />
      <SecurityCodeBox />
      <PasswordBox />
      <FormSubmitButton handleSubmit={handleSubmit} />
    </styled.RegisterForm>
  );
};

export default RegisterForm;
