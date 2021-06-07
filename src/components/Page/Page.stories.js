import React from 'react';
import { Header } from '../Page/Header';
import { CardRegister } from '../Page/Body/CardRegister';
import { CardRegistered } from '../Page/Body/CardRegistered';
import { CardList } from '../Page/Body/CardList';
import { Page } from '../Page';
import { PAGE_TITLE } from '../../utils/constants/messages';
import * as Styled from './style';

export default {
  title: 'Component/Page',
  component: Page,
  argTypes: {},
};

const Template = (args) => <Page {...args} />;

export const CardRegisterPage = Template.bind({});
CardRegisterPage.args = {
  children: [
    <Header>
      <Styled.Button>{'◀︎'}</Styled.Button>
      <Styled.Title>{PAGE_TITLE.CARD_REGISTER}</Styled.Title>
    </Header>,
    <CardRegister />, 
  ],
};

export const CardRegisteredPage = Template.bind({});
CardRegisteredPage.args = {
  children: [
    <CardRegistered
      card={{
        company: '로이드',
        numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
        owner: 'SUN',
        validDay: { firstDigit: '04', secondDigit: '21' },
      }}
    />,
  ],
};

export const CardListPage = Template.bind({});
CardListPage.args = {
  children: [
    <Header>
      <Styled.Title>{PAGE_TITLE.CARD_LIST}</Styled.Title>
    </Header>,
    <CardList
      cards={[
        {
          company: '포코',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '엄카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
      ]}
    />,
  ],
};
