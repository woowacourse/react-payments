/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story, Meta } from '@storybook/react';
import ControlButton, { ControlButtonProps } from './ControlButton';

export default {
  title: 'ControlButton',
  component: ControlButton,
} as Meta;

const Template: Story<ControlButtonProps> = (args) => <ControlButton {...args} />;

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  type: 'button',
  disabled: true,
  onClick: () => { },
};
