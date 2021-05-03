import React from 'react';

import { ClickableCard } from '.';

export default {
  title: 'Component/ClickableCard',
  component: ClickableCard,
  argTypes: {},
};

const Template = (args) => <ClickableCard {...args} />;

export const DefaultClickableCard = Template.bind({});
DefaultClickableCard.args = {};
