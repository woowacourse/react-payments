import React from 'react';
import { Header } from '../Page/Header';
import { CardRegister } from '../Page/Body/CardRegister';
import { CardRegistered } from '../Page/Body/CardRegistered';

import { Page } from '../Page';

export default {
  title: 'Component/Page',
  component: Page,
  argTypes: {},
};

const Template = (args) => <Page {...args} />;

export const CardRegisterPage = Template.bind({});
CardRegisterPage.args = {
  children: [<CardRegister />, <Header titleText={'카드 추가'} hasButton={true} />],
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
