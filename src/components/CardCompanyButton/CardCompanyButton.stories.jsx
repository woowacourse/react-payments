import React from 'react';
import CardCompanyButton from '.';

export default {
  title: 'Payment/CardCompanyButton',
  component: CardCompanyButton,
};

const Template = args => <CardCompanyButton handleClickCardCompany={() => {}} {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#E24141',
  name: '포코카드',
};
