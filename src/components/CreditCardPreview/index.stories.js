import React from 'react';
import { CreditCardPreview } from '.';
import { Card } from '..';

export default {
  title: 'Component/CreditCardPreview',
  component: CreditCardPreview,
  decorators: [
    (Story) => (
      <Card hasShadow style={{ backgroundColor: '#94DACD' }}>
        <Story />
      </Card>
    ),
  ],
};

const Template = (args) => <CreditCardPreview {...args} />;

export const LoydCreditCard = Template.bind({});
LoydCreditCard.args = {
  company: '로이드카드',
  cardNumber: '1111 2222 3333 4444',
  ownerName: 'SUN',
  expirationDate: '04/21',
};
