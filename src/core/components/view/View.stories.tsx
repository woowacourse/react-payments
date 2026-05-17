import type { Meta, StoryObj } from '@storybook/react-vite';

import { View } from './View';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/View',
  component: View,
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'children',
  },
};
