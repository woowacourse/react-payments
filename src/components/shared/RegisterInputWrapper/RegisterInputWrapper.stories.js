/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import RegisterInputWrapper from './index';
import INPUT_TYPE from '../../../constants/inputType';
import { Default as CardNumbersInput } from '../../units/CardNumbersInput/CardNumbersInput.stories';
import { Default as ExpirationDateInput } from '../../units/ExpirationDateInput/ExpirationDateInput.stories';
import { Default as OwnerNameInput } from '../../units/OwnerNameInput/OwnerNameInput.stories';
import { Default as SecureCodeInput } from '../../units/SecureCodeInput/SecureCodeInput.stories';
import { Default as CardPasswordInput } from '../../units/CardPasswordInput/CardPasswordInput.stories';

export default {
  title: 'shared/RegisterInputWrapper',
  component: RegisterInputWrapper,
};

const Template = (args) => <RegisterInputWrapper {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  ...INPUT_TYPE.CARD_NUMBERS,
  children: <CardNumbersInput {...CardNumbersInput.args} />,
};

export const ExpirationDate = Template.bind({});
ExpirationDate.args = {
  ...INPUT_TYPE.EXPIRATION_DATE,
  children: <ExpirationDateInput {...ExpirationDateInput.args} />,
};

export const OwnerName = Template.bind({});
OwnerName.args = {
  ...INPUT_TYPE.OWNER_NAME,
  children: <OwnerNameInput {...OwnerNameInput.args} />,
};

export const SecureCode = Template.bind({});
SecureCode.args = {
  ...INPUT_TYPE.SECURE_CODE,
  children: <SecureCodeInput />,
};

export const Password = Template.bind({});
Password.args = {
  ...INPUT_TYPE.PASSWORD,
  children: <CardPasswordInput {...CardPasswordInput.args} />,
};
