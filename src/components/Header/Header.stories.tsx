/* eslint-disable react/function-component-definition */
import { Story, Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { HeaderProps } from './type';

import Header from '.';

export default {
  title: 'Header',
  component: Header,
  decorators: [withRouter],
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const CreditCardPageHeader = Template.bind({});
CreditCardPageHeader.args = {
  title: '보유 카드',
};

export const RegisterPageHeader = Template.bind({});
RegisterPageHeader.args = {
  title: '카드 추가',
  hasBackButton: true,
};
