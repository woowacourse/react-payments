import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardShape from '../components/CardShape';

export default {
  title: 'CardShape',
  component: CardShape,
  argTypes: {
    cardCompanyName: { control: 'text' },
    cardNumber: { control: 'text' },
    cardOwnerName: { control: 'text' },
    cardDate: { control: 'text' },
    dimensions: { control: 'object' },
    type: { control: 'text' },
    company: { control: 'object' },
  },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Empty_Card_Template = args => {
  return <CardShape {...args} />;
};

export const Empty_Card = Empty_Card_Template.bind({});

Empty_Card.args = {
  cardCompanyName: '국민카드',
  cardNumber: '0000-0000-****-****',
  cardOwnerName: 'COKE TAETAE',
  cardDate: '05 / 21',
  dimensions: {
    width: 1000,
    height: 1000,
  },
  type: 'EMPTY_CARD',
  cardCompanyList: [
    { id: 'company1', color: '#E24141', name: '포코 카드' },
    { id: 'company2', color: '#547CE4', name: '준 카드' },
    { id: 'company3', color: '#73BC6D', name: '공원 카드' },
    { id: 'company4', color: '#DE59B9', name: '브랜 카드' },
    { id: 'company5', color: '#04C09E4F', name: '로이드 카드' },
    { id: 'company6', color: '#45423b', name: '동키콩 카드' },
    { id: 'company7', color: '#b914ff', name: '소피아 카드' },
    { id: 'company8', color: '#968a68', name: '시지프 카드' },
  ],
};

const User_Card_Template = args => {
  return <CardShape {...args} />;
};

export const User_Card = User_Card_Template.bind({});

User_Card.args = {
  cardCompanyName: '국민카드',
  cardNumber: '0000-0000-****-****',
  cardOwnerName: 'COKE TAETAE',
  cardDate: '05 / 21',
  dimensions: {
    width: 1000,
    height: 1000,
  },
  company: { id: 'company2', color: '#547CE4', name: '준 카드' },
  type: 'USER_CARD',
};

const Add_Template = args => {
  return <CardShape {...args} />;
};

export const Add_Card = Add_Template.bind({});

Add_Card.args = {
  dimensions: {
    width: 1000,
    height: 1000,
  },
  type: 'ADD',
};
