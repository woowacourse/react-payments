import Card from './Card';

import { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card',
  component: Card,
  argTypes: {
    expireDate: {
      control: { type: 'array' },
    },
  },
} satisfies Meta<React.ComponentProps<typeof Card>>;

const Template: StoryFn<React.ComponentProps<typeof Card>> = (props) => <Card {...props} />;

export const Controls = Template.bind({});
Controls.args = {
  cardCompany: '국민카드',
  cardNumber: ['1234', '5678', '1234', '5678'],
  ownerName: 'CHOPPER',
  expireDate: ['12', '25'],
};

export const NoValue = () => {
  return <Card cardCompany="" cardNumber={[]} ownerName="" expireDate={[]} />;
};

export const FullValue = () => {
  return (
    <Card
      cardCompany="국민카드"
      cardNumber={['1999', '1216', '1999', '1216']}
      ownerName="CHOPPER"
      expireDate={['12', '25']}
    />
  );
};
