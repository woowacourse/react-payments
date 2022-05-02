import React from 'react';
import CVC from './CVC';

export default {
  title: 'CardAddPage/CVC',
  component: CVC,
};

const Template = (args) => <CVC {...args} />;

export const CVCInput = Template.bind({});
CVCInput.args = {
  cardInfo: {
    cvc: '',
  },
};
