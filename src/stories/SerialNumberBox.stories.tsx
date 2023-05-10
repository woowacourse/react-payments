import type { Meta, StoryObj } from '@storybook/react';

import SerialNumberBox from '../components/SerialNumberBox/SerialNumberBox';

const meta: Meta<typeof SerialNumberBox> = {
  title: 'Components/SerialNumberBox',
  component: SerialNumberBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SerialNumberBox>;

export const Default: Story = {};
