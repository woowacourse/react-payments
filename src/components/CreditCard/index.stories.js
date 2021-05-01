import React from 'react';
import { CreditCard } from '.';
import { Card } from '..';
import { COLOR } from '../../constants';

export default {
  title: 'Component/CreditCard',
  component: CreditCard,
  decorators: [
    (Story) => (
      <Card backgroundColor={COLOR.LOYD_CARD} boxShadow size="medium">
        <Story />
      </Card>
    ),
  ],
};

const Template = (args) => <CreditCard {...args} />;

export const LoydCreditCard = Template.bind({});
LoydCreditCard.args = {
  cardCompany: '로이드카드',
  cardNumber: '1111 2222 3333 4444',
  ownerName: 'SUN',
  expirationDate: '04/21',
};
