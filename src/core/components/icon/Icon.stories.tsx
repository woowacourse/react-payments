import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Close: Story = {
  args: {
    icon: 'close',
  },
};
