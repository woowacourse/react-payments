import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '1234',
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
