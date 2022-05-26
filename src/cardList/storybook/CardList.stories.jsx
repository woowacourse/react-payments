import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from '../../util';
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
    { ...Card('1324', '1234', '1234', '1234', '3', '23', 'dom', '123', '1', '2'), nickName: 'dom' },
  ],
};
