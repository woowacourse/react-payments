import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { getCard } from '../../util';
import CardList from '../components/CardList';

export default {
  title: 'CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <CardList {...args} />;

export const SavedCardList = Template.bind({});

SavedCardList.args = {
  cardList: [
    {
      card: getCard({
        firstCardNumber: '1324',
        secondCardNumber: '1234',
        thirdCardNumber: '1234',
        fourthCardNumber: '1234',
        expireMonth: '3',
        expireYear: '23',
        ownerName: 'dom',
        securityCode: '123',
        firstPassword: '1',
        secondPassword: '2',
      }),
      nickName: 'dom',
    },
  ],
};
