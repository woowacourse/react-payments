/* eslint-disable react/function-component-definition */

import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from '..';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ConFirmButton = Template.bind({});
ConFirmButton.args = {
  text: '확인',
  type: 'submit',
};
