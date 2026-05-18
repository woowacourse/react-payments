import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './index';
import { fn } from 'storybook/test';

type InputStoryArgs = React.ComponentProps<typeof Input>;

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: '1234',
    type: 'text',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1234',
    variant: 'default',
  },
  render: (args: InputStoryArgs) => <Input {...args} />,
};

export const Error: Story = {
  args: {
    value: '',
    variant: 'error',
  },
  render: (args: InputStoryArgs) => <Input {...args} />,
};

export const Focus: Story = {
  args: {
    value: '',
    variant: 'default',
  },
  render: (args: InputStoryArgs) => <Input {...args} autoFocus />,
};
