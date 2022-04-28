import React from 'react';
import CardOwner from './CardOwner';

export default {
  title: 'CardOwner',
  component: CardOwner,
  argTypes: {
    cardOwnerName: { control: 'text' },
  },
};

const Template = args => {
  const correctOwnerNameCallback = () => {};
  return <CardOwner {...args} correctOwnerNameCallback={correctOwnerNameCallback} />;
};

export const Primary = Template.bind({});

Primary.args = {
  cardOwnerName: 'COKE TAETAE',
};
