import React from 'react';
import CardCvc from 'containers/CardCvcInput/CardCvc';

export default {
  title: 'CardAddition/CardCvc',
  component: CardCvc,
};

const Template = (args) => <CardCvc {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
