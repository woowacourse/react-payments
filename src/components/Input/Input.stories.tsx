import type { Meta, StoryObj } from '@storybook/react';
import { InputBox, Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    width: '300px',
    textAlign: 'center',
    placeholder: 'Please type anything.',
  },
};

export const WithBox: Story = {
  args: {
    width: '400px',
    textAign: 'center',
    type: 'text',
    maxLength: 20,
  },
  render: (args) => (
    <InputBox>
      <Input {...args} />
    </InputBox>
  ),
};
