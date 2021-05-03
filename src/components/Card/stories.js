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
    companyName: {
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
  companyName: '로이드카드',
  number: '1234123434561234',
  userName: 'bran',
  expirationDate: '11/21',
};

export const Large = Template.bind({});

Large.args = {
  companyName: '로이드카드',
  color: '#04C092',
  number: '1234123434561234',
  userName: 'bran',
  expirationDate: '11/21',
  size: 'large',
};
