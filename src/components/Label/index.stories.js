import React from 'react';
import { Label } from '.';

export default {
  title: 'Component/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const InputLabel = Template.bind({});
InputLabel.args = {
  children: '카드 번호',
};

export const ButtonLabel = Template.bind({});
ButtonLabel.args = {
  children: '포코 카드',
};
