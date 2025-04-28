import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    inputType: {
      control: 'inline-radio',
      options: ['text', 'number', 'password'],
    },
    name: {
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'defaultStatus',
    inputType: 'text',
    isError: false,
    name: 'inputName',
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
