import React from 'react';

import CardPreview from '../components/CardPreview';

import '../css/card.css';

export default {
  title: 'Components/CardPreview',
  component: CardPreview,
  argTypes: {
    expiryDate: { control: { type: 'object' } },
  },
};

const Template = (args) => <CardPreview {...args} />;

export const CardPreviewTemplate = Template.bind({});
CardPreviewTemplate.args = {
  company: '무비카드',
  number: {
    first: '1234',
    second: '5678',
    third: '1234',
    fourth: '5678',
  },
  ownerName: '록바',
  expiryDate: { month: '10', year: '23' },
};
