import type { Meta, StoryObj } from '@storybook/react';

import TooltipButton from '../components/TooltipButton';

const meta = {
  title: 'Example/TooltipButton',
  component: TooltipButton,
} satisfies Meta<typeof TooltipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
