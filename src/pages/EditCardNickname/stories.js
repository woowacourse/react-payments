import React from 'react';
import EditCardNickname from '.';

export default {
  title: 'Page/EditCardNickname',
  component: EditCardNickname,
  argTypes: {
    expirationDate: {
      control: {
        type: 'text',
      },
    },
    cardCompany: {
      control: {
        type: 'select',
        options: ['POCO', 'ROID', 'JUN', 'GONGWON'],
      },
    },
  },
};

const Template = (args) => <EditCardNickname {...args} />;

export const Default = Template.bind({});

Default.args = {
  userName: 'DEV JANG',
  cardCompany: 'POCO',
  serialNumber: '1234123412341234',
  expirationDate: '0911',
  cardNickName: '리틀로이드',
  setCardNickName: () => {},
};
