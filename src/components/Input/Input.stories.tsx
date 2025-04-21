import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'defaultStatus',
    isError: false,
    name: 'inputName',
    type: 'text',
    value: 'inputValue',
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('');

    return (
      <Input
        {...args}
        value={selected}
        onChange={({ value }) => setSelected(value)}
      />
    );
  },
};

export const Error: Story = {
  args: {
    placeholder: 'errorStatus',
    isError: true,
    name: 'inputName',
    type: 'text',
    value: 'inputValue',
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('');

    return (
      <Input
        {...args}
        value={selected}
        onChange={({ value }) => setSelected(value)}
      />
    );
  },
};
