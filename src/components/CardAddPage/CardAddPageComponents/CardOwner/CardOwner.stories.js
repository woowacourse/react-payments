import React from 'react';
import CardOwner from './CardOwner';

export default {
  title: 'CardOwner',
  component: CardOwner,
};

const Template = (args) => <CardOwner {...args} />;

export const CardOwnerInput = Template.bind({});
CardOwnerInput.args = {
  cardInfo: {
    owner: '',
  },
};
