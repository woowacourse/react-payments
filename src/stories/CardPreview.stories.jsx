import React from 'react';
import CardPreview from '../components/common/CardPreview';

export default {
  title: 'CardPreview',
  component: CardPreview,
  argTypes: {
    values: 'object',
  },
};

const Template = (args) => <CardPreview {...args} />;

export const DefaultCardPreview = Template.bind({});
DefaultCardPreview.args = {
  values: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expiredMonth: '',
    expiredYear: '',
    owner: '',
    cvc: '',
    firstPasswordDigit: '',
    secondPasswordDigit: '',
    thirdPasswordDigit: '*',
    fourthPasswordDigit: '*',
  },
};

export const NineCardPreview = Template.bind({});
NineCardPreview.args = {
  values: {
    firstCardNumber: '1111',
    secondCardNumber: '2222',
    thirdCardNumber: '3333',
    fourthCardNumber: '4444',
    expiredMonth: '12',
    expiredYear: '25',
    owner: 'NINE',
    cvc: '123',
    firstPasswordDigit: '1',
    secondPasswordDigit: '2',
    thirdPasswordDigit: '*',
    fourthPasswordDigit: '*',
  },
};
