/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import CreditCard, { CreditCardProps } from '..';

export default {
  title: 'CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  creditCard: {
    number: '1234123412341234',
    expiry: '03/45',
    owner: 'NOAH',
  },
};
