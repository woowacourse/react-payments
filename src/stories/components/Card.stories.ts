import type { Meta, StoryObj } from '@storybook/react';

import Card from '../../components/Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    bgColor: '#333333',
    cardInfo: {
      id: 'o3qiOI#$#',
      firstCardNumbers: '1234',
      secondCardNumbers: '1234',
      thirdCardNumbers: '1234',
      fourthCardNumbers: '1234',
      expirationMonth: '03',
      expirationYear: '28',
      ownerName: 'Woody',
      securityNumbers: '234',
      firstPassword: '1',
      secondPassword: '2',
    },
  },
};
