import React from 'react';
import CardCompanyOption from './CardCompanyOption';

export default {
  title: 'CardCompanyOption',
  component: CardCompanyOption,
};

const Template = (args) => <CardCompanyOption {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: '로이드카드',
  color: '#04C09E',
  onClick: () => {
    console.log('click');
  },
};
