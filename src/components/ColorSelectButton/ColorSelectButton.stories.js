import React from 'react';
import ColorSelectButton from './ColorSelectButton';

export default {
  component: ColorSelectButton,
  title: 'ColorSelectButton',
};
const CardTemplate = (args) => <ColorSelectButton {...args} />;
export const Default = CardTemplate.bind({});
Default.args = {
  color: '#E24141',
  cardName: '우테코카드',
};
