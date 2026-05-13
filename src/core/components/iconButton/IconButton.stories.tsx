import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconClose: Story = {
  args: {
    icon: 'close',
  },
};
