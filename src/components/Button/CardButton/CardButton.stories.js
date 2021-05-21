import React from 'react';

import { CardButton } from '.';

export default {
  title: 'Component/CardButton',
  component: CardButton,
  argTypes: {},
};

const Template = (args) => <CardButton {...args} />;

export const DefaultCardButton = Template.bind({});
DefaultCardButton.args = {};
