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
      companyName: '포코카드',
      color: '#E24141',
      number: '1234567812345678',
      expirationDate: '12/31',
      nickName: '엄카',
    },
    {
      userName: 'POCO',
      companyName: '로이드카드',
      color: '#04C09E',
      number: '1234567812345678',
      expirationDate: '01/01',
      nickName: '법카',
    },
  ],
};
