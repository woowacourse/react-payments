import type { Meta, StoryObj } from '@storybook/react';

import TooltipButton from '../components/TooltipButton';

const meta: Meta<typeof TooltipButton> = {
  title: 'components/TooltipButton',
  component: TooltipButton,
};

export default meta;
type Story = StoryObj<typeof TooltipButton>;

export const Default: Story = {};
