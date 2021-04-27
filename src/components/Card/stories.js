import React from 'react';
import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    expirationDate: {
      control: {
        type: 'text',
      },
    },
    cardCompanyName: {
      control: {
        type: 'select',
        options: ['포코카드', '로이드카드', '준카드', '공원카드'],
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardCompanyName: '로이드카드',
  cardNumber: '1234123434561234',
  userName: 'bran',
  expirationDate: '11/21',
};

export const Large = Template.bind({});

Large.args = {
  cardCompanyName: '로이드카드',
  cardColor: '#04C092',
  cardNumber: '1234123434561234',
  userName: 'bran',
  expirationDate: '11/21',
  size: 'large',
};
