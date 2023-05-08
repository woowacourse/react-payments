/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story as StoryType, Meta } from '@storybook/react';
import StoryProvider from 'stories/StoryProvider';
import ControlButton, { ControlButtonProps } from './ControlButton';

export default {
  title: 'ControlButton',
  component: ControlButton,
  decorators: [
    (Story) => (
      <StoryProvider>
        <Story />
      </StoryProvider>
    ),
  ],
} satisfies Meta<typeof ControlButton>;

const Template: StoryType<ControlButtonProps> = (args) => (
  <ControlButton {...args}>
    다음
  </ControlButton>
);

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  type: 'button',
  disabled: true,
  onClick: () => { },
};

export const EnabledButton = Template.bind({});
EnabledButton.args = {
  type: 'button',
  disabled: false,
  onClick: () => { },
};
