import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './Title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
  },
};
