import React from 'react';
import AddCardForm from '.';

export default {
  title: 'Page/AddCardForm',
  component: AddCardForm,
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
    setExpirationDate: {
      control: {
        type: 'none',
      },
    },
  },
};

const Template = (args) => <AddCardForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  serialNumber: '1234123412341234',
  setSerialNumber: () => {},
  cardCompany: 'POCO',
  setCardCompany: () => {},
  expirationDate: '0911',
  setExpirationDate: () => {},
  userName: 'DEV JANG',
  setUserName: () => {},
  securityCode: '123',
  setSecurityCode: () => {},
  password: { first: '0', second: '0' },
  setPassword: () => {},
  onSetModalContents: () => {},
};
