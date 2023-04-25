/* eslint-disable react/function-component-definition */

import { Story, Meta } from '@storybook/react';

import Header, { HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const CreditCardPageHeader = Template.bind({});
CreditCardPageHeader.args = {
  title: '보유 카드',
};
