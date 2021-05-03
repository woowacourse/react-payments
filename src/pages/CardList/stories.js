import React from 'react';
import { MemoryRouter } from 'react-router';
import CardList from '.';

export default {
  title: 'Page/CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});

// TODO 모델추가
Default.args = {
  cards: [
    {
      userName: 'POCO',
      cardCompany: 'POCO',
      color: '#E24141',
      serialNumber: '1234567812345678',
      expirationDate: '12/31',
      nickName: '엄카',
    },
    {
      userName: 'POCO',
      cardCompany: 'ROID',
      color: '#04C09E',
      serialNumber: '1234567812345678',
      expirationDate: '01/01',
      nickName: '법카',
    },
  ],
};
