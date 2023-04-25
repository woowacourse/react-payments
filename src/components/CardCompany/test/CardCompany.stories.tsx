/* eslint-disable react/function-component-definition */

import { Meta, Story } from '@storybook/react';

import CardCompany, { CardCompanyType } from '..';

export default {
  title: 'CardCompany',
  component: CardCompany,
} as Meta;

const Template: Story<CardCompanyType> = (args) => <CardCompany {...args} />;

export const BCCardCompany = Template.bind({});
BCCardCompany.args = {
  company: 'BC',
};
