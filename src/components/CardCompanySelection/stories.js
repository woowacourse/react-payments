import React from 'react';
import CardCompanySelection from '.';

export default {
  title: 'Components/CardCompanySelection',
  component: CardCompanySelection,
};

const Template = (args) => <CardCompanySelection {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSetCardCompany: () => {},
};
