import React from 'react';

import CardPreview from 'components/CardPreview';

import { THEME } from 'constants';

import 'css/card.css';
import 'css/palette.css';

export default {
  title: 'Components/CardPreview',
  component: CardPreview,
  argTypes: {
    expiryDate: { control: { type: 'object' } },
    theme: {
      control: 'inline-radio',
      options: [
        'defalut',
        THEME.RED,
        THEME.BLUE,
        THEME.GREEN,
        THEME.HOT_PINK,
        THEME.MINT,
        THEME.PINK,
        THEME.ORANGE,
        THEME.YELLOW,
      ],
    },
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
  expiryDate: { month: '10', year: '23' },
  ownerName: '록바',
};
