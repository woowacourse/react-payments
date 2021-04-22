import React from 'react';
import { Container } from '.';
import { Input, Text } from '..';

export default {
  title: 'Component/Container',
  component: Container,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Container {...args} />;

export const CardNumberInputContainer = Template.bind({});
CardNumberInputContainer.args = {
  children: (
    <>
      <Input type="number" value="1111" width="4.8rem" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input type="number" value="1111" width="4.8rem" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input type="password" value="1111" width="4.8rem" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input type="password" value="1111" width="4.8rem" />
    </>
  ),
};

export const ExpirationDateInputContainer = Template.bind({});
ExpirationDateInputContainer.args = {
  width: '43%',
  children: (
    <>
      <Input placeholder="MM" type="number" value="04" width="2.4rem" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        /
      </Text>
      <Input placeholder="YY" type="number" value="04" width="2.4rem" />
    </>
  ),
};

export const OwnerNameInputContainer = Template.bind({});
OwnerNameInputContainer.args = {
  children: (
    <Input placeholder="카드에 표시된 이름과 동일하게 입력하세요." value="SUN" width="18rem" />
  ),
};

export const SecurityCodeInputContainer = Template.bind({});
SecurityCodeInputContainer.args = {
  width: '26%',
  children: <Input type="password" value="123" width="3.6rem" />,
};

export const PasswordInputContainer = Template.bind({});
PasswordInputContainer.args = {
  width: '2.8125rem',
  children: <Input textAlign="center" type="password" value="3" />,
};

export const PasswordDisabledInputContainer = Template.bind({});
PasswordDisabledInputContainer.args = {
  width: '2.8125rem',
  children: <Input disabled textAlign="center" type="password" value="3" />,
};

export const NicknameInputContainer = Template.bind({});
NicknameInputContainer.args = {
  size: 'large',
  backgroundColor: '#94DACD',
  boxShadow: true,
};
