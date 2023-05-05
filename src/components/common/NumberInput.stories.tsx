import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import { NumberInput } from './NumberInput';

const meta = {
  title: 'common/NumberInput',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
  },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return <NumberInput {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    userEvent.type(input, 'INVALID -#!@.,/?');
    expect(input).toHaveValue('');

    userEvent.type(input, '1270');
    expect(input).toHaveValue('1270');
  },
};

export const LengthLimited: Story = {
  args: {
    value: '',
    maxLength: 4,
  },
  render: ({ value: initialValue, ...args }) => {
    const [value, setValue] = useState(initialValue);

    return <NumberInput {...args} value={value} onChange={setValue} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    userEvent.type(input, '12556');
    expect(input).toHaveValue('1255');
  },
};
