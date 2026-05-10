import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 1, text: 'one' },
  { value: 2, text: 'two' },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 'default',
    options,
    value: 1,
    onChange: () => {},
  },
};
