import React from 'react';
import ColorSelectButton from './ColorSelectButton';

export default {
  component: ColorSelectButton,
  title: 'Items/ColorSelectButton',
};
const CardTemplate = (args) => <ColorSelectButton {...args} />;
export const Default = CardTemplate.bind({});

Default.args = {
  color: 'bg-poco',
  cardName: '우테코카드',
};
